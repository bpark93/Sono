import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>     
      <List.Item
        title="About"
        left={() => <FontAwesome name="info-circle" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("about")}
      />
      <List.Item
        title="Credits"
        left={() => <FontAwesome name="hand-peace-o" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("credits")}
      />
      <List.Item
        title="Help"
        left={() => (
          <FontAwesome name="question-circle" style={styles.iconStyle} />
        )}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("help")}
      />
      <List.Item
        title="Settings"
        left={() => <FontAwesome name="gear" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("auth")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignContent: "space-around",
  },
  iconStyle: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 5,
    alignSelf: "center",
  },
  listItemStyle: {
    marginHorizontal: 10,
    marginTop: 10,
    borderBottomWidth:0.5,
    borderColor:'#E0E0E0'
  },
});

export default SettingsScreen;
