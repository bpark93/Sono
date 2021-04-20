import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import firebase from "../components/firebase";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar, ActivityIndicator } from "react-native-paper";
import { categoryDatabase } from "../../database";
import { colorPicker } from "../components/RecentPages";

const SearchTutorialListScreen = ({route}) => {
  const {listId} = route.params
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("pages")
      .doc(listId)
      .get()
      .then(function (doc) {
        setList(doc.data().list);
      })
      .catch(function (error) {
        console.log("Error getting List", error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={{marginHorizontal:15, fontSize:32, fontWeight:'bold', fontFamily:Platform.OS === "android" ? "Roboto-Regular" : null, marginBottom:15}}>{listId === "rapidreviews" ? "Tutorials" : "Tools"}</Text>
      {list
        ? list.map((item) => (
            item.popular ?
            <List.Item
              key={item.id}
              style={styles.listItemStyle}
              title={item.title}
              description={item.subcategory}
              left={() => (
                <Avatar.Image
                  source={categoryDatabase[item.category]}
                  style={{
                    backgroundColor: colorPicker(item.category),
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={40}
                />
              )}
              onPress={() =>
                navigation.navigate("SearchDetail", { id: item.id })
              }
            />:null)): <ActivityIndicator animating={true} size="large"/>}
      {list
        ? list.map((item) => (
            item.id != "null" && !item.popular ?
            <List.Item
              key={item.id}
              style={styles.listItemStyle}
              title={item.title}
              description={item.subcategory}
              left={() => (
                <Avatar.Image
                  source={categoryDatabase[item.category]}
                  style={{
                    backgroundColor: colorPicker(item.category),
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={40}
                />
              )}
              onPress={() =>
                navigation.navigate("SearchDetail", { id: item.id })
              }
            /> :
            <List.Item
              key={item.title}
              style={styles.listItemStyle}
              title={`${item.title} - Coming Soon`}
              titleStyle={{color:'#D0D0D0'}}
              description={item.subcategory}
              descriptionStyle={{color:"#D0D0D0"}}
              left={() => (
                <Avatar.Image
                  source={categoryDatabase[item.category]}
                  style={{
                    backgroundColor: colorPicker(item.category),
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={40}
                />
              )}
            />
          ))
        : (
          <Text>No List</Text>
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingVertical:10,
  },
  listItemStyle: {
    marginHorizontal: 5,
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
    // width:40,
    marginTop: 10,
    marginRight: 10,
  },
});

export default SearchTutorialListScreen;
