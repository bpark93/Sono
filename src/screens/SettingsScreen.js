import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>     
      <List.Item
        title="About"
        left={() => <MaterialCommunityIcons name="information" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("about")}
      />
      <List.Item
        title="Credits"
        left={() => <MaterialCommunityIcons name="account-group" style={styles.iconStyle} />}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("credits")}
      />
      <List.Item
        title="FAQs"
        left={() => (
          <MaterialCommunityIcons name="help" style={styles.iconStyle} />
        )}
        style={styles.listItemStyle}
        onPress={() => navigation.navigate("help")}
      />
      <List.Item
        title="Settings"
        left={() => <MaterialCommunityIcons name="settings-outline" style={styles.iconStyle} />}
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
