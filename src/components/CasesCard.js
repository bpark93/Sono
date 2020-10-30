import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

const Width = Dimensions.get("window").width;

const CasesCard = ({ item }) => {

  const categoryChecker = (category) => {
    switch (category){
      case "Emergency Medicine":
        return "red"
      case "Critical Care":
        return "blue"
      case "Pediatric EM":
        return "orange"
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      {item.image ? (
        <Image
          resizeMode="cover"
          style={{
            height: 150,
            width: Width * 0.75,
            alignSelf: "center",
          }}
          uri={item.image}
        />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 5,
          width: Width * 0.7,
        }}
      >
        <FontAwesome5 name="user-md" style={styles.iconStyle} />
        <Text style={{  fontSize: 12, color:"gray" }}>
          By {item.author}
        </Text>
      </View>
      <Text style={{marginHorizontal:15, color: categoryChecker(item.category), fontWeight:'bold', textDecorationLine:'underline'}}>{item.category}</Text>
      <Text style={styles.title}>{item.title}</Text>
      {item.excerpt ? (
        <Text
          style={{
            marginHorizontal: 15,
            width: Width * 0.7,
            fontSize: 12,
            color: "gray",
          }}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {item.excerpt}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 0.5,
    // borderColor: "gray",
    borderRadius: 15,
    marginVertical: 15,
    overflow: "hidden",
    paddingBottom: 15,
    backgroundColor:'#F0F0F0',
    elevation:5,
    shadowOffset:{
      width:10,
      height:-10
    },
    shadowOpacity:0.2,
    shadowRadius:1
  },
  title: {
    fontSize: 18,
    marginHorizontal: 15,
    fontFamily: "Roboto-Black",
    width: Width * 0.7,
    color:'black'
  },
  iconStyle: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default CasesCard;
