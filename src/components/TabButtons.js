import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabButtons = ({ activeIndex, setActiveIndex, settings, scrollviewRef }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        backgroundColor: "white",
        elevation: 1,
      }}
    >
      {settings.map((item) => (
        <TouchableOpacity
          style={{
            alignItems: "center",
            flex: 1,
            borderBottomWidth: activeIndex === item.name ? 2 : 0.5,
            borderBottomColor: activeIndex === item.name ? "#4f2683" : "#E0E0E0",
          }}
          onPress={() => {
            setActiveIndex(item.name)
            if (scrollviewRef) {
              scrollviewRef.current.scrollTo({x:0,y:0,animated:false})
            }
          }}
          key={item.name}
        >
          <MaterialCommunityIcons
            name={item.icon}
            size={30}
            color={activeIndex === item.name ? "#4f2683" : "gray"}
          />
          <Text
            style={{
              fontSize: 11,
              color: activeIndex === item.name ? "#4f2683" : "gray",
              marginBottom: 5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabButtons;
