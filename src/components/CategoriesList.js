import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  View
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar  } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { categoryDatabase } from "../../database";
import { colorPicker } from "../components/RecentPages"

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
      style={{ backgroundColor: expanded ? colorPicker(name) : "white"}}
      titleStyle={{ fontWeight: expanded ? "bold" : "normal", color: expanded ? "white" : "black", marginLeft:5,}}
      key={name}
      title={name}
      left={() => <Avatar.Image source={categoryDatabase[name]} style={{...styles.image, backgroundColor: expanded ? "#F0F0F0" : colorPicker(name)}} size={40}/>}
      onPress={() => setExpanded(!expanded)}
    >
      {Object.entries(groups).map((subcategory) => (
        <List.Accordion
          key={subcategory[0]}
          style={{
            ...styles.subCategoryStyle,
            backgroundColor: expanded ? "#F4F4F4" : "white",
          }}
          title={subcategory[0]}
        >
          {subcategory[1].map((page) => (
            <List.Item
              key={page.id}
              style={{
                ...styles.listItemStyle,
                backgroundColor: expanded ? "#E4E4E4" : "white",
              }}
              title={page.title}
              titleStyle={{fontSize:14}}
              onPress={() =>
                navigation.navigate("SearchDetail", { id: page.id })
              }
              left={() => {
                if (page.type === "rapidreview") {
                  return (
                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#d62d20', borderRadius:10, padding:5, marginVertical:2.5}}>
                      <FontAwesome5
                        name="play-circle"
                        size={14}
                        style={{color:'white'}}
                      />
                      <Text style={{marginLeft:3, color:'white', fontSize:12}}>Video</Text>
                    </View>
                  );
                } else if (page.type === "image") {
                  return (
                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#3b5998', borderRadius:10, padding:5, marginVertical:2.5}}>
                      <FontAwesome5
                        name="images"
                        size={14}
                        style={{color:'white'}}
                      />
                      <Text style={{marginLeft:3, color:'white', fontSize:12}}>Images</Text>
                    </View>
                  );
                } else {
                  return (
                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#2a4d69', borderRadius:10, padding:5, marginVertical:2.5}}>
                      <FontAwesome5
                        name="tools"
                        size={14}
                        style={{color:'white'}}
                      />
                      <Text style={{marginLeft:3, color:'white', fontSize:12}}>Tools</Text>
                    </View>
                  );
                }
              }}
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
    paddingLeft: 25,
  },
  listItemStyle: {
    paddingLeft: 20,
    height: 50,
    justifyContent:'center'
  },
  iconStyle: {
    fontSize: 30,
    color: "black",
  },
  subheaderStyle: {
    marginLeft: 15,
    marginVertical: 15,
    fontSize: 20,
    fontWeight:'bold'
  },
  image: {
    backgroundColor:'#F0F0F0',
    marginLeft:10,
    height:50,width:50, justifyContent:'center', alignItems:'center'
  },
});

export default CategoriesList;
