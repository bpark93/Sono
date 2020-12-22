import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchResultsScreen = ({ results }) => {
  const navigation = useNavigation();
  return (
    <View>
      {results.map(({ item }) => (
        <List.Item
          key={item.id}
          style={styles.listItemStyle}
          title={item.title}
          description={item.category}
          left={() =>
            item.type === "rapidreview" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#d62d20",
                  borderRadius: 10,
                  padding: 5,
                  marginVertical: 10,
                }}
              >
                <FontAwesome5
                  name="play-circle"
                  size={20}
                  style={{ color: "white" }}
                />
                <Text style={{ marginLeft: 3, color: "white", fontSize: 12 }}>
                  Video
                </Text>
              </View>
            ) : item.type === "image" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#3b5998",
                  borderRadius: 10,
                  padding: 5,
                  marginVertical: 10,
                }}
              >
                <FontAwesome5
                  name="images"
                  size={20}
                  style={{ color: "white" }}
                />
                <Text style={{ marginLeft: 3, color: "white", fontSize: 12 }}>
                  Images
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#2a4d69",
                  borderRadius: 10,
                  padding: 5,
                  marginVertical: 10,
                }}
              >
                <FontAwesome5
                  name="tools"
                  size={20}
                  style={{ color: "white" }}
                />
                <Text style={{ marginLeft: 3, color: "white", fontSize: 12 }}>
                  Tools
                </Text>
              </View>
            )
          }
          onPress={() => navigation.navigate("SearchDetail", { id: item.id })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemStyle: {
    marginLeft: 10,
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
    // width:40,
    marginTop: 10,
    marginRight: 10,
  },
});

export default SearchResultsScreen;
