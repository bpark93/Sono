import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar  } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { categoryDatabase } from "../../database";

const CategoriesList = ({ layout }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.subheaderStyle}>Categories</Text>
      {layout ? (
        Object.entries(layout).map((category) => (
          <ListAccordion
            name={category[0]}
            groups={category[1]}
            key={category[0]}
          />
        ))
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ScrollView>
  );
};

const ListAccordion = ({ name, groups }) => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(false);
  return (
    <List.Accordion
      style={{ backgroundColor: expanded ? "#F4F4F4" : "white" }}
      titleStyle={{ fontFamily: expanded ? "Raleway-Bold" : "Raleway-Regular" }}
      key={name}
      title={name}
      left={() => <Avatar.Image source={categoryDatabase[name]} style={styles.image} size={40}/>}
      onPress={() => setExpanded(!expanded)}
    >
      {Object.entries(groups).map((subcategory) => (
        // true ? (
        <List.Accordion
          key={subcategory[0]}
          style={{
            ...styles.subCategoryStyle,
            backgroundColor: expanded ? "#FAFAFA" : "white",
          }}
          title={subcategory[0]}
          left={() => <FontAwesome5 name="folder" size={16} />}
        >
          {subcategory[1].map((page) => (
            <List.Item
              key={page.id}
              style={{
                ...styles.listItemStyle,
                backgroundColor: expanded ? "#FAFAFA" : "white",
              }}
              title={page.title}
              onPress={() =>
                navigation.navigate("SearchDetail", { id: page.id })
              }
              left={() => {
                if (page.type === "rapidreview") {
                  return (
                    <FontAwesome5
                      name="play-circle"
                      size={16}
                      style={{ marginTop: 7 }}
                    />
                  );
                } else if (page.type === "image") {
                  return (
                    <FontAwesome5
                      name="images"
                      size={16}
                      style={{ marginTop: 7 }}
                    />
                  );
                } else {
                  return (
                    <FontAwesome5
                      name="tools"
                      size={16}
                      style={{ marginTop: 7 }}
                    />
                  );
                }
              }}
              right={() => (
                <FontAwesome5
                  name="chevron-right"
                  size={14}
                  style={{ marginTop: 10, marginRight: 15, color: "#673ab7" }}
                />
              )}
            />
          ))}
        </List.Accordion>
      ))}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  categoryStyle: {
    marginHorizontal: 0,
  },
  subCategoryStyle: {
    paddingLeft: 40,
    height: 55,
  },
  listItemStyle: {
    paddingLeft: 55,
    height: 50,
  },
  iconStyle: {
    fontSize: 30,
    color: "black",
  },
  subheaderStyle: {
    marginLeft: 15,
    marginVertical: 15,
    fontSize: 20,
    // fontFamily: "Raleway-Bold",
    fontWeight:'bold'
  },
  image: {
    backgroundColor:'#F0F0F0',
    marginLeft:10,
    height:50,width:50, justifyContent:'center', alignItems:'center'
  },
});

export default CategoriesList;
