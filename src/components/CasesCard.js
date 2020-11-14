import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
            width: Width * 0.85,
            alignSelf: "center",
          }}
          uri={item.image}
        />
      ) : null}
      <Text style={{marginHorizontal:15, marginVertical:5, color: categoryChecker(item.category), fontWeight:'bold',}}>{item.category}</Text>
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
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 15,
    marginVertical: 15,
    overflow: "hidden",
    paddingBottom: 15,
    backgroundColor:'white',
    // elevation:5,
    // shadowOffset:{
    //   width:10,
    //   height:-10
    // },
    // shadowOpacity:0.2,
    // shadowRadius:1
  },
  title: {
    fontSize: 18,
    marginHorizontal: 15,
    // fontFamily: "Roboto-Black",
    fontWeight:'bold',
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
