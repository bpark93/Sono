import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import firebase from "../components/firebase";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar, ActivityIndicator, Menu } from "react-native-paper";
import { categoryDatabase } from "../../database";
import { colorPicker } from "../components/RecentPages";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchTutorialListScreen = ({ route }) => {
  const { listId } = route.params;
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const [listCopy, setListCopy] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection("pages")
      .doc(listId)
      .get()
      .then(function (doc) {
        setList(doc.data().list);
        setListCopy(doc.data().list);
      })
      .catch(function (error) {
        return;
      });
  }, []);

  const [sortByPressed, setSortByPressed] = useState(false);
  const [sortBy, setSortBy] = useState("Category")
  const [itemsHidden, setItemsHidden] = useState(false)

  const hideItems = () => {
    if (!itemsHidden){
      const hiddenList = list.filter(item => item.id != "null")
      setList(hiddenList)
      setItemsHidden(true)
    } else {
      sortItems(sortBy)
      setItemsHidden(false)
    }
  }

  const sortItems = (sortName) => {
    switch (sortName){
      case "Category":
        let sortingCat = [...listCopy]
        sortingCat.sort(function(a,b){
          if (a.category < b.category) {return -1}
          if (a.category > b.category) {return 1}
          return 0;
        })
        setList(sortingCat)
        break;
      case "Alphabetical A-Z":
        let sorting = [...listCopy]
        sorting.sort(function(a,b){
          if (a.title < b.title) {return -1}
          if (a.title > b.title) {return 1}
          return 0;
        })
        setList(sorting)
        break;
      default:
        break;
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          marginHorizontal: 15,
          fontSize: 32,
          fontWeight: "bold",
          fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
          marginBottom: 15,
        }}
      >
        {listId === "rapidreviews" ? "Tutorials" : "Tools"}
      </Text>

      <View style={{ marginHorizontal: 15, flexDirection: "row", marginBottom:15 }}>
        <Text style={{ fontSize: 18 }}>Sort By:</Text>
        <Menu
          visible={sortByPressed}
          onDismiss={() => setSortByPressed(false)}
          anchor={
            <TouchableOpacity
                onPress={() => setSortByPressed(true)}
                style={{ flexDirection: "row", alignItems: "center", marginLeft:15 }}
              >
                <Text
                  style={{
                    color: "#4f2683",
                    fontSize: 18,
                    marginRight:5,
                    fontFamily:Platform.OS === "android" ? "Roboto-Regular" : null, 
                    fontWeight:'bold'
                  }}
                >
                  {sortBy}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={16}
                  color="#4f2683"
                />
              </TouchableOpacity>
          }
        >
            <Menu.Item
              onPress={() => {
                sortItems("Category")
                setSortBy("Category");
                setSortByPressed(false)
              }}
              title="Category"
              titleStyle={{ fontSize: 16,  }}
            />
            {/* <Menu.Item
              onPress={() => {
                sortItems("Popular")
                setSortBy("Popular");
                setSortByPressed(false)
              }}
              title="Popular"
              titleStyle={{ fontSize: 16,  }}
            /> */}
            <Menu.Item
              onPress={() => {
                sortItems("Alphabetical A-Z")
                setSortBy("Alphabetical A-Z");
                setSortByPressed(false)
              }}
              title="Alphabetical A-Z"
              titleStyle={{ fontSize: 16,  }}
            />
        </Menu>
      </View>

      <TouchableOpacity style={{ marginHorizontal: 15, flexDirection: "row", marginBottom:15, alignItems:'center'}} onPress={hideItems}>
        <MaterialCommunityIcons name={itemsHidden ? "eye":"eye-off"} size={18} color="gray" />
        <Text style={{ fontSize: 14, color:"gray", marginLeft:10 }}>{`${itemsHidden ? "Show" : "Hide"} unavailable items`}</Text>
      </TouchableOpacity>

      {list ? (
        list.map((item) =>
          item.id != "null" && !item.popular ? (
            <List.Item
              key={item.id}
              style={styles.listItemStyle}
              title={item.title}
              titleStyle={{ fontSize: 18 }}
              description={`${item.category} / ${item.subcategory}`}
              left={() => (
                <Avatar.Image
                  source={
                    item.icon
                      ? { uri: item.icon }
                      : categoryDatabase[item.category]
                  }
                  style={{
                    backgroundColor: colorPicker(item.category),
                    height: 75,
                    width: 75,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={55}
                />
              )}
              onPress={() =>
                navigation.navigate("SearchDetail", { id: item.id })
              }
            />
          ) : (
            <List.Item
              key={item.title}
              style={styles.listItemStyle}
              title={`${item.title} - Coming Soon`}
              titleStyle={{ color: "#D0D0D0", fontSize: 18 }}
              description={`${item.category} / ${item.subcategory}`}
              descriptionStyle={{ color: "#D0D0D0" }}
              left={() => (
                <Avatar.Image
                  source={
                    item.icon
                      ? { uri: item.icon }
                      : categoryDatabase[item.category]
                  }
                  style={{
                    backgroundColor: colorPicker(item.category),
                    height: 75,
                    width: 75,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={55}
                />
              )}
            />
          )
        )
      ) : (
        <ActivityIndicator size="large" animating={true} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingVertical: 10,
  },
  listItemStyle: {
    marginHorizontal: 5,
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
    marginRight: 10,
  },
});

export default SearchTutorialListScreen;
