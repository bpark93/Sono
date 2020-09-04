import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getBookmark } from "./useBookmark";
import { categoryDatabase } from "../../database";

const Width = Dimensions.get("window").width;

const LibraryBookmarks = ({layout}) => {
  const navigation = useNavigation();
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    async function flatten() {
        let flatLayout = [];
        Object.entries(layout).map((category) => {
          Object.entries(category[1]).map((subcategory) => {
            flatLayout.push(subcategory[1]);
          });
        });
        const flatterLayout = flatLayout.flat();
        return flatterLayout;
      }
    async function getData() {
      const currentBookmarkArray = await getBookmark("lib");
      const flatterLayout = await flatten();
      let finalList = [];
      for (let i = 0; i < currentBookmarkArray.length; i++) {
        for (let j = 0; j < flatterLayout.length; j++) {
          if (currentBookmarkArray[i] === flatterLayout[j].id) {
            finalList = [...finalList, flatterLayout[j]];
          }
        }
      }
      console.log(finalList.length)
      setBookmark(finalList);
    }
    const unsubscribe = navigation.addListener("focus", async () => {
      await getData();
    });
    return () => unsubscribe();
  }, [navigation]);

  return (
    <>
      <Text style={styles.header}>Your Bookmarks</Text>
      <ScrollView
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {bookmark.length != 0 ? (
          bookmark.map((item) => (
                <TouchableOpacity
                  style={styles.touchable}
                  key={item.id}
                  onPress={() => navigation.navigate("SearchDetail", { id: item.id })}
                >
                  <ImageBackground
                    source={categoryDatabase[item.category]}
                    style={{
                      height: 150,
                      width: 150,
                      opacity: 0.3,
                      position: "absolute",
                      alignSelf: "center",
                    }}
                    imageStyle={{
                      resizeMode: "contain",
                    }}
                  />
                  <Text style={styles.category}>{item.category}</Text>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              ))
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: Width,
              height: 150,
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
            <Text style={{ opacity: 0.3 }}>
              Add to your bookmarks for quick access {bookmark.length}
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Raleway-Bold",
    fontSize: 18,
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
    margin: 10,
    marginLeft: 15,
    flex: 1,
    height: 150,
    width: 150,
    // backgroundColor: "#fdf6e3",
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  category: {
    fontSize: 14,
    fontFamily: "Raleway-Bold",
    color: "#34aadc",
    marginHorizontal: 10,
  },
});

export default LibraryBookmarks;
