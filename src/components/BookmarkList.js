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
import { getBookmark, removeBookmark, setBookmark } from "./useBookmark";
import { learnDatabase } from "../../database";
import { Menu, IconButton } from "react-native-paper";

const Width = Dimensions.get("window").width;

const BookmarkList = ({ sortBy }) => {
  const navigation = useNavigation();
  const [bookmark, setBookmark] = useState([]);

  async function getData() {
    const currentBookmarkArray = await getBookmark("learn");
    const modulesArray = learnDatabase.map((item) => item.pages);

    const categoryArray = modulesArray.map(item => Object.entries(item).map(page => page[1]))
    const sectionArray = [].concat.apply([], categoryArray)
    const pagesArray = [].concat.apply([], sectionArray)

    const idArray = pagesArray.map((item) => item.id);
    let finalList = [];
    for (let i = 0; i < currentBookmarkArray.length; i++) {
      for (let j = 0; j < idArray.length; j++) {
        if (currentBookmarkArray[i] === idArray[j]) {
          finalList = [...finalList, pagesArray[j]];
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

  const [reversedBookmark, setReversedBookmark] = useState([]);
  useEffect(() => {
    const reversed = [...bookmark];
    setReversedBookmark(reversed.reverse());
  }, [bookmark]);

  const [sortedBookmark, setSortedBookmark] = useState([]);
  useEffect(() => {
    const copy = [...bookmark];
    copy.sort(function (a, b) {
      return a.id - b.id;
    });
    setSortedBookmark(copy);
  }, [bookmark]);

  const categoryList = learnDatabase.map((item) => [
    item.title,
    item.id,
    item.thumbnail,
  ]);

  const updateBookmarkList = (id) => {
    setBookmark(bookmark.filter((item) => item.id !== id));
  };

  return (
    <ScrollView>
      {bookmark.length != 0 ? (
        sortBy === "all" ? (
          bookmark.map((item) =>
            categoryList
              .filter((mod) => mod[1].toString() === item.id.split(".")[0])
              .map((thing) => (
                <LearnBookmarkItem
                  pageInfo={item}
                  categoryInfo={thing}
                  key={item.id}
                  updateBookmarkList={updateBookmarkList}
                />
              ))
          )
        ) : (
          sortedBookmark.map((item) =>
            categoryList
              .filter((mod) => mod[1].toString() === item.id.split(".")[0])
              .map((thing) => (
                <LearnBookmarkItem
                  pageInfo={item}
                  categoryInfo={thing}
                  key={item.id}
                  updateBookmarkList={updateBookmarkList}
                />
              ))
          )
        )
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
        </View>
      )}
    </ScrollView>
  );
};

const LearnBookmarkItem = ({ pageInfo, categoryInfo, updateBookmarkList }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        if (!pageInfo.video && !pageInfo.youtube) {
          navigation.navigate("Learn", {
            screen: "LearnText",
            params: {
              id: pageInfo,
              category: categoryInfo[0],
            },
            initial: false,
          });
        } else {
          navigation.navigate("Learn", {
            screen: "LearnDetail",
            params: {
              id: pageInfo,
              category: categoryInfo[0],
            },
            initial: false,
          });
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 5,
          marginTop: 5,
        }}
      >
        <Image source={categoryInfo[2]} style={styles.learnCategoryStyle} />
        <View>
          <Text style={styles.category}>{categoryInfo[0]}</Text>
          <Text style={styles.page}>{pageInfo.title}</Text>
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
            removeBookmark(pageInfo.id, "learn");
            updateBookmarkList(pageInfo.id);
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
    fontSize: 16,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    marginHorizontal: 15,
    marginTop: 10,
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
    fontSize: 14,
    fontFamily: "Raleway-Regular",
    marginHorizontal: 10,
    color: "gray",
  },
  page: {
    fontSize: 20,
    // fontFamily: "Raleway-Regular",
    marginHorizontal: 10,
    width: 250,
  },
  learnCategoryStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf:'center'
  },
});

export default BookmarkList;
