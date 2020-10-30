import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import wpServer from "../api/wpServer";
import { useNavigation } from "@react-navigation/native";

const CasesListScreen = ({ route }) => {
  const { list } = route.params;
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
              source={{uri:item.image}}
              style={{
                backgroundColor: "#E0E0E0",
                marginRight: 15,
                overflow: "hidden",
              }}
              size={45}
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight:'bold' }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  flexWrap: "wrap",
                  width: width*0.75,
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.excerpt}
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
          ) : (
            <View style={{ alignItems: "flex-end", marginHorizontal: 15 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.next}
              >
                <Text
                  style={{ color: "white", }}
                >
                  Load More
                </Text>
              </TouchableOpacity>
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
    borderRadius:20,
    backgroundColor:'#E0E0E0'
  },
});

export default CasesListScreen;
