import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LibraryBookmarks from "../components/LibraryBookmarks";
import firebase from "../components/firebase";
import { ActivityIndicator, Menu, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookmarkList from "../components/BookmarkList";

const BookmarkScreen = () => {
  const [layout, setLayout] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("pages")
      .doc("layout")
      .get()
      .then(function (doc) {
        setLayout(doc.data());
      })
      .catch(function (error) {
        console.log("Error getting List", error);
      });
  }, []);

  const [viewing, setViewing] = useState("lib");
  const [viewingPressed, setViewingPressed] = useState(false)
  const [sortBy, setSortBy] = useState("newest");
  const [sortyByPressed, setSortByPressed] = useState(false)

  return layout.length !== 0 ? (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Raleway-Regular" }}>
            Viewing:{" "}
          </Text>
          <Menu
            visible={viewingPressed}
            onDismiss={() => setViewingPressed(false)}
            anchor={
              <TouchableOpacity
                onPress={() => setViewingPressed(true)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    color: "#4f2683",
                    fontSize: 16,
                    fontFamily: "Raleway-Bold",
                    marginRight: 5,
                  }}
                >
                  {viewing === "lib" ? "Library" : "Learn"}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            }
          >
              <Menu.Item
                onPress={() => {
                    setViewing("lib")
                    setViewingPressed(false)
                }}
                title="Library"
                titleStyle={{fontSize:14}}
              />
              <Menu.Item
                onPress={() => {
                    setViewing("learn")
                    setViewingPressed(false)
                }}
                title="Learn"
                titleStyle={{fontSize:14}}
              />
          </Menu>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Raleway-Regular" }}>
            Sort By:{" "}
          </Text>

          <Menu
            visible={sortyByPressed}
            onDismiss={() => setSortByPressed(false)}
            anchor={
              <TouchableOpacity
                onPress={() => setSortByPressed(true)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    color: "#4f2683",
                    fontSize: 16,
                    fontFamily: "Raleway-Bold",
                    marginRight: 5,
                  }}
                >
                  {sortBy === "newest" ? "Newest" : "Oldest"}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            }
          >
              <Menu.Item
                onPress={() => {
                    setSortBy("newest")
                    setSortByPressed(false)
                }}
                title="Newest"
                titleStyle={{fontSize:14}}
              />
              <Menu.Item
                onPress={() => {
                    setSortBy("oldest")
                    setSortByPressed(false)
                }}
                title="Oldest"
                titleStyle={{fontSize:14}}
              />
          </Menu>
        </View>
      </View>
      {viewing === "lib" ? <LibraryBookmarks layout={layout} sortBy={sortBy}/>
      : <BookmarkList sortBy={sortBy}/>}
    </ScrollView>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookmarkScreen;
