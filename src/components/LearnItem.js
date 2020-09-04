import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LearnItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Modules", { id: item })}
        // activeOpacity={0.8}
        style={styles.moduleStyle}
      >
        <Image style={styles.iconStyle} source={item.thumbnail} />
        <Text style={styles.textStyle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  moduleStyle: {
    alignItems: "center",
    // justifyContent:"space-around",
    margin: 5,
    flexDirection: "row",
  },
  iconStyle: {
    width: 65,
    height: 45,
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 5,
  },
  textStyle: {
    fontFamily: "Raleway-Regular",
    fontSize: 16,
    marginLeft: 20,
    width: 250,
  },
  progressStyle: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth:0.2,
    borderBottomColor:'#E0E0E0',
  },
});

export default LearnItem;
