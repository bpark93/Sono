import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const QuizLink = ({ name, id }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="crown"
          size={24}
          style={{ marginHorizontal: 5 }}
        />
        <Text style={styles.text}>{name}: Module Challenge</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("Test", { id: id })}
      >
        <Text style={styles.buttonText}>Take The Challenge</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding:10,
    // borderWidth:1,
    borderRadius:30,
    // backgroundColor:'#E0E0E0'
  },
  button: {
    padding:15,
    borderRadius: 15,
    backgroundColor: "#2980b9",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  text: {
    fontWeight:"bold",
    fontFamily:Platform.OS === "android" ? "Roboto-Bold" : null,
    fontSize: 20,
    // color:'white'
  },
  buttonText: {
    fontWeight:'bold',
    fontFamily:Platform.OS === "android" ? "Roboto-Bold" : null,
    fontSize: 20,
    color: "white",
  },
});

export default QuizLink;
