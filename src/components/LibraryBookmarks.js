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
import { Menu, IconButton, Avatar } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { colorPicker } from "../components/RecentPages";
import { categoryDatabase } from "../../database";

const Width = Dimensions.get("window").width;

const LibraryBookmarks = ({ layout, sortBy }) => {
  const navigation = useNavigation();
  const [bookmark, setBookmark] = useState([]);

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

  const updateBookmarkList = (id) => {
    setBookmark(bookmark.filter((item) => item.id !== id));
  };

  return bookmark.length != 0 ? (
    <ScrollView>
      {sortBy === "all"
        ? bookmark.map((item) => (
            <BookmarkItem
              info={item}
              key={item.id}
              updateBookmarkList={updateBookmarkList}
            />
          ))
        : sortBy === "image"
        ? bookmark
            .filter((item) => item.type === "image")
            .map((item) => (
              <BookmarkItem
                info={item}
                key={item.id}
                updateBookmarkList={updateBookmarkList}
              />
            ))
        : sortBy === "rapidreview"
        ? bookmark
            .filter((item) => item.type === "rapidreview")
            .map((item) => (
              <BookmarkItem
                info={item}
                key={item.id}
                updateBookmarkList={updateBookmarkList}
              />
            ))
        : bookmark
            .filter((item) => item.type === "resource")
            .map((item) => (
              <BookmarkItem
                info={item}
                key={item.id}
                updateBookmarkList={updateBookmarkList}
              />
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
      <Text // Remember to Add or Take out
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
        });
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 5,
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <Avatar.Image
            source={categoryDatabase[info.category]}
            style={{
              backgroundColor: colorPicker(info.category),
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            size={40}
          />
          <View style={{ width: Width * 0.7 }}>
            
              
              <Text style={{ ...styles.page, fontWeight: "500" }}>
                {info.title}
              </Text>
              <Text style={{ ...styles.page, color: "#939393", marginBottom: 3, fontSize:14 }}>
              {info.subcategory}
            </Text>
            <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: 10,
                  marginVertical: 2.5,
                  marginLeft:15
                }}
              >
                <FontAwesome5
                  name={
                    info.type === "rapidreview"
                      ? "play-circle"
                      : info.type === "image"
                      ? "images"
                      : "tools"
                  }
                  size={14}
                  style={{ color: "black" }}
                />
                <Text style={{ ...styles.page, fontSize: 12, color:'black', marginLeft:3 }}>{info.type === "rapidreview"
                    ? "Video"
                    : info.type === "image"
                    ? "Images"
                    : "Tools"}</Text>
              </View>
            
          </View>
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
          onPress={async () => {
            removeBookmark(info.id, "lib");
            updateBookmarkList(info.id);
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
  touchable: {
    marginHorizontal: 15,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderColor: "#E0E0E0",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    fontSize: 14,
    marginHorizontal: 10,
    color: "gray",
  },
  page: {
    fontSize: 14,
    marginLeft: 15,
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 5,
  },
});

export default LibraryBookmarks;
