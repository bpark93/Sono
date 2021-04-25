import React from "react";
import { View, StyleSheet,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
import { colorPicker } from "./RecentPages";
import {categoryDatabase} from "../../database"

const SearchResultsScreen = ({ results }) => {
  const navigation = useNavigation();
  return (
    <View>
      {results.map(({ item }) => (
        <List.Item
          key={item.id}
          style={styles.listItemStyle}
          title={item.title}
          description={item.subcategory}
          left={() =>
            <Avatar.Image
            source={categoryDatabase[item.category]}
            style={{
              backgroundColor: colorPicker(item.category),
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            size={40}
          />
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
    marginTop: 10,
    marginRight: 10,
  },
});

export default SearchResultsScreen;
