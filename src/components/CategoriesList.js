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

  const colorpicker = (category) => {
    let picker = "#4f2683";
    switch (category) {
      case "Trauma":
        picker = "#e51c23"; // Material Red
        break;
      case "Musculoskeletal":
        picker = "#d2d4dc"; // Material Red
        break;
      case "Skin":
        picker = "#fce9db"; // Material Red
        break;
      case "Head and Neck":
        picker = "#a8e6cf"; // Material Red
        break;
      case "Cardiac":
        picker = "#e36387"; // Material Deep Orange
        break;
      case "Vascular":
        picker = "#e36387"; // Material Deep Orange
        break;
      case "Lung and Pleura":
        picker = "#a6dcef"; // Material Indigo
        break;
      case "Abdominal":
        picker = "#7FACD6"; // Material Blue
        break;
      case "Renal":
        picker = "#BFB8DA"; // Material Green
        break;
      case "Procedural":
        picker = "#A5678E"; // Material Cyan
        break;
      case "OB/Gyn":
        picker = "#f2aaaa"; // Material Pink
        break;
      case "Testicular":
        picker = "#f2aaaa"; // Material Pink
        break;
      case "Pediatric":
        picker = "#ff99cc"; // Material Pink
        break;
      default:
        break;
    }
    return picker
  }

  return (
    <List.Accordion
      style={{ backgroundColor: expanded ? colorpicker(name) : "white"}}
      titleStyle={{ fontWeight: expanded ? "bold" : "normal", color: expanded ? "white" : "black" }}
      key={name}
      title={name}
      left={() => <Avatar.Image source={categoryDatabase[name]} style={styles.image} size={40}/>}
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
    paddingLeft: 20,
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
