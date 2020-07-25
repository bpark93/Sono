import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <List.Item
        title="Sign In"
        left={() => <FontAwesome name="user-o" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("auth")}
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
        title="About Application"
        left={() => <FontAwesome name="info-circle" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("about")}
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
  },
});

export default SettingsScreen;
