import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LearnItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Modules", { id: item })}
      // activeOpacity={0.8}
      style={styles.moduleStyle}
    >
      <Image
        style={styles.iconStyle}
        source={item.thumbnail}
        resizeMode="contain"
      />
      <Text style={styles.textStyle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  moduleStyle: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    borderRadius:30,
    height:120,
    // width:120,
    margin: 10,
    alignItems:'center',
    justifyContent:'center',
    shadowOpacity:0.1,
    shadowOffset:{
      width:2,
      height:2
    },
    shadowRadius:2,
    elevation:2
  },
  iconStyle: {
    width: 75,
    height: 75,
    // overflow:'hidden'
  },
  textStyle: {
    // fontFamily: "Raleway-Regular",
    fontSize: 14,
    // fontWeight:'bold',
    marginTop:5,
  },
});

export default LearnItem;
