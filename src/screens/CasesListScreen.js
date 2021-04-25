import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { ActivityIndicator, Avatar, Menu } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../components/firebase";


const CasesListScreen = ({ route }) => {
  const { list } = route.params;
  const [results, setResults] = useState(list)

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [fullyLoaded, setFullyLoaded] = useState(false)

  const { width, height } = Dimensions.get("window");

  const [sortBy, setSortBy] = useState("all");
  const [sortyByPressed, setSortByPressed] = useState(false);

  const loadMore = () => {
    firebase
      .firestore()
      .collection("cases")
      .doc("layout")
      .get()
      .then(function (doc) {
        setResults(doc.data().cases.reverse());
        setLoading(false);
        setFullyLoaded(true);
      })
      .catch(function (error) {
        return;
      });
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          marginHorizontal:15
        }}
      >
          <Text style={{ fontSize: 18, fontWeight:'bold' }}>
            Specialty:{" "}
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
                    fontSize: 18,
                    marginRight: 5,
                  }}
                >
                  {sortBy === "all"
                    ? "All"
                    : sortBy}
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
                setSortBy("all");
                setSortByPressed(false);
              }}
              title="All"
              titleStyle={{ fontSize: 16, fontFamily:null }}
            />
            <Menu.Item
              onPress={() => {
                setSortBy("Emergency Medicine");
                setSortByPressed(false);
              }}
              title="Emergency Medicine"
              titleStyle={{ fontSize: 16, fontFamily:null }}
            />
            <Menu.Item
              onPress={() => {
                setSortBy("Critical Care");
                setSortByPressed(false);
              }}
              title="Critical Care"
              titleStyle={{ fontSize: 16, fontFamily:null }}
            />
            <Menu.Item
              onPress={() => {
                setSortBy("Other");
                setSortByPressed(false);
              }}
              title="Other"
              titleStyle={{ fontSize: 16, fontFamily:null }}
            />
          </Menu>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          sortBy === "all" || sortBy === item.category ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("CasesDetail", { id: item })}
            style={{
              marginLeft: 15,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
            }}
          >
            <Avatar.Image
              source={{ uri: item.image }}
              style={{
                backgroundColor: "#E0E0E0",
                marginRight: 15,
                overflow: "hidden",
              }}
              size={45}
            />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color:
                    item.category === "Emergency Medicine" ? "red" : "blue",
                }}
              >
                {item.category}
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  flexWrap: "wrap",
                  width: width * 0.75,
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.excerpt}
              </Text>
            </View>
          </TouchableOpacity>
        ):null)}
        initialNumToRender={5}
        ListFooterComponent={() => {
          return loading ? (
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <ActivityIndicator size="large" />
              <Text
                style={{
                  fontFamily: "Raleway-Regular",
                  fontSize: 12,
                  marginTop: 15,
                }}
              >
                Loading More Cases...
              </Text>
            </View>
          ) : !fullyLoaded ? (
            <View style={{ alignItems: "flex-end", marginHorizontal: 15 }}>
              <TouchableOpacity activeOpacity={0.8} style={{...styles.next, backgroundColor: fullyLoaded? "#E0E0E0" : "#4f2683"}} onPress={() => {
                setLoading(true);
                loadMore();
              }} disabled={fullyLoaded}>
                <Text style={{ color: "white" }}>Load More</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ alignItems: "center", marginHorizontal: 15 }}>
                <Text>No More Cases</Text>
              </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headerStyle: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  next: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#4f2683",
  },
});

export default CasesListScreen;
