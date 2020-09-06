import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getBookmark, removeBookmark } from "./useBookmark";
import { Menu, IconButton } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

const Width = Dimensions.get("window").width;

const LibraryBookmarks = ({ layout, sortBy }) => {
  const navigation = useNavigation();
  const [bookmark, setBookmark] = useState([]);
  const [reversedBookmark, setReversedBookmark] = useState([]);

  const flatten = () => {
    let flatLayout = [];
    Object.entries(layout).map((category) => {
      Object.entries(category[1]).map((subcategory) => {
        flatLayout.push(subcategory[1]);
      });
    });
    const flatterLayout = flatLayout.flat();
    return flatterLayout;
  };
  const flatterLayout = flatten();

  async function getData() {
    const currentBookmarkArray = await getBookmark("lib");
    let finalList = [];
    for (let i = 0; i < currentBookmarkArray.length; i++) {
      for (let j = 0; j < flatterLayout.length; j++) {
        if (currentBookmarkArray[i] === flatterLayout[j].id) {
          finalList = [...finalList, flatterLayout[j]];
        }
      }
    }
    setBookmark(finalList);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      await getData();
    });
    return () => unsubscribe();
  }, [navigation]);

  useEffect(() => {
    const reversed = [...bookmark];
    setReversedBookmark(reversed.reverse());
  }, [bookmark]);

  const updateBookmarkList = (id) => {
    setBookmark(bookmark.filter(item => item.id !== id))
  }

  return bookmark.length != 0 ? (
    <ScrollView>
      {sortBy === "newest"
        ? bookmark.map((item) => <BookmarkItem info={item} key={item.id} updateBookmarkList={updateBookmarkList}/>)
        : reversedBookmark.map((item) => (
            <BookmarkItem info={item} key={item.id} updateBookmarkList={updateBookmarkList}/>
          ))}
    </ScrollView>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Width,
        height: 200,
      }}
    >
      <Image
        source={require("../../assets/write.png")}
        style={{
          height: 75,
          width: 100,
          opacity: 0.3,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          opacity: 0.4,
          marginTop: 15,
          fontFamily: "Raleway-Bold",
        }}
      >
        You don't have any saved bookmarks.
      </Text>
      <Text
        style={{ opacity: 0.3, marginTop: 15, marginHorizontal: 30 }}
        numberOfLines={2}
      >
        Your bookmarks can be downloaded for offline viewing.
      </Text>
    </View>
  );
};

const BookmarkItem = ({ info, updateBookmarkList }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        navigation.navigate("Library", {
          screen: "SearchDetail",
          params: { id: info.id },
        })
      }
      }
    >
      <View>
        <Text
          style={styles.category}
        >{`${info.category} > ${info.subcategory}`}</Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 5,
            marginTop: 5,
          }}
        >
          {info.type === "rapidreview" ? (
            <FontAwesome5 name="play-circle" style={styles.iconStyle} />
          ) : info.type === "image" ? (
            <FontAwesome5 name="images" style={styles.iconStyle} />
          ) : (
            <FontAwesome5 name="tools" style={styles.iconStyle} />
          )}
          <Text style={styles.page}>{info.title}</Text>
        </View>
      </View>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <IconButton
            onPress={() => setMenuVisible(true)}
            icon="dots-horizontal"
            size={16}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            setMenuVisible(false);
          }}
          title="Download"
          icon="arrow-collapse-down"
          titleStyle={{ fontSize: 14 }}
        />
        <Menu.Item
          onPress={async () => {
            removeBookmark(info.id, "lib")
            updateBookmarkList(info.id)
            setMenuVisible(false);
          }}
          title="Remove Bookmark"
          icon="bookmark-remove"
          titleStyle={{ fontSize: 14 }}
        />
      </Menu>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Raleway-Bold",
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Raleway-Regular",
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  touchable: {
    marginHorizontal: 15,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    fontSize: 12,
    fontFamily: "Raleway-Regular",
    marginHorizontal: 10,
    color: "gray",
  },
  page: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: "Raleway-Regular",
    width:300
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 5,
  },
});

export default LibraryBookmarks;
