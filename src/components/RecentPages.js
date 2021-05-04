import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const RECENT = "recent_pages";
const MAX_ITEMS = 5;

const RecentPages = ({ layout }) => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      async function flatten() {
        let flatLayout = [];
        Object.entries(layout).map((category) => {
          Object.entries(category[1]).map((subcategory) => {
            flatLayout.push(subcategory[1]);
          });
        });
        const flatterLayout = flatLayout.flat();
        return flatterLayout;
      }

      async function getData() {
        const temp = await getList();
        const flatterLayout = await flatten();

        let finalList = [];
        for (let j = 0; j < temp.length; j++) {
          for (let i = 0; i < flatterLayout.length; i++) {
            if (flatterLayout[i].id === temp[j] && !flatterLayout[i].duplicate) {
              finalList = [...finalList, flatterLayout[i]];
            }
          }
        }
        setList(finalList);
      }
      getData();
      return () => {
        isActive = false;
      };
    }, [])
  );

  return list.length != 0 ? (
    <View style={{ marginHorizontal: 15 }}>
      <Text style={styles.subheaderStyle}>Recently visited</Text>
      {list.map((page) => (
        <TouchableOpacity
          key={page.title}
          onPress={() => navigation.navigate("SearchDetail", { id: page.id })}
          style={{ flexDirection: "row", marginBottom: 8 }}
          activeOpacity={0.5}
        >
          {/* <View style={styles.categoryView}>
                            <Text style={styles.category} >{page.category}</Text> 
                        </View> */}
          <PrettyTag category={page.category} />
          <View style={styles.pageInfo}>
            {page.type === "rapidreview" ? (
              <FontAwesome5 name="play-circle" style={styles.iconStyle} />
            ) : page.type === "image" ? (
              <FontAwesome5 name="images" style={styles.iconStyle} />
            ) : (
              <FontAwesome5 name="tools" style={styles.iconStyle} />
            )}
            <Text style={styles.text}>{page.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  ) : null;
};

const initializeRecentPages = async () => {
  try {
    const initialized = await AsyncStorage.getItem(RECENT);
    if (initialized === null) {
      await AsyncStorage.setItem(RECENT, "empty"); 
      return false;
    }
    return true;
  } catch (e) {;
    return false;
  }
};

const getList = async () => {
  try {
    const pagesList = await AsyncStorage.getItem(RECENT);
    if (pagesList === null) {
      return [];
    }
    const listArray = pagesList.split(",");
    return listArray;
  } catch (e) {
    return;
  }
};

const setList = async (id) => {
  try {
    const current = await AsyncStorage.getItem(RECENT);
    const oldListArray = current.split(",");
    const alreadyListed = oldListArray.filter((item) => item === id);
    if (oldListArray.length === MAX_ITEMS && alreadyListed.length === 0) {
      oldListArray.pop();
    }
    if (alreadyListed.length === 0) {
      oldListArray.unshift(id);
      const newListString = oldListArray.toString();
      await AsyncStorage.setItem(RECENT, newListString);
    } else {
      const newListArray = oldListArray.filter((item) => item != id);
      newListArray.unshift(id);
      const newListString = newListArray.toString();
      await AsyncStorage.setItem(RECENT, newListString);
    }
  } catch (e) {
    return;
  }
};

const colorPicker = (category) => {
  switch (category) {
    case "Trauma":
      return "#e51c23"; 
    case "Soft Tissue MSK":
      return "#ffc764"; 
    case "Skin":
      return "#fce9db"; 
    case "Head and Neck":
      return "#a8e6cf"; 
    case "Cardiac":
      return "#e36387";
    case "Vascular":
      return "#FF6961";
    case "Lung and Pleura":
      return "#a6dcef"; 
    case "Abdominal":
      return "#7FACD6"; 
    case "Genitourinary":
      return "#BFB8DA";
    case "Procedural":
      return "#A5678E"; 
    case "OB/Gyn":
      return "#f2aaaa"; 
    case "Pediatric":
      return "#ff99cc"; 
    default:
      return "#4f2683";
  }
}

const PrettyTag = ({ category }) => {
  return (
    <View style={{ ...styles.categoryView, backgroundColor: colorPicker(category) }}>
      <Text style={{ ...styles.category }}>
        {category === "Genitourinary"
          ? "GU"
          : category === "Soft Tissue MSK"
          ? "MSK"
          : category === "Head and Neck"
          ? "HEENT"
          :category}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 16,
    color: "black",
    marginHorizontal: 5,
  },
  subheaderStyle: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? 'Roboto-Bold' : null,
    color: "white",
    textAlign:'center'
  },
  categoryView: {
    borderRadius: 5,
    backgroundColor: "#4f2683",
    padding: 5,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    margin: 5,
  },
  pageInfo: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: "#F0F0F0",
    marginHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
});

export { RecentPages, initializeRecentPages, setList, colorPicker };
