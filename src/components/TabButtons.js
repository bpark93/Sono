import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabButtons = ({ activeIndex, setActiveIndex, settings }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        backgroundColor: "white",
        elevation: 1,
        // Need to add for iOS
      }}
    >
      {settings.length != 3
        ? settings.map((item, index) => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                flex: 1,
                borderBottomWidth: activeIndex === index ? 2 : 0,
                borderBottomColor: "#4f2683",
              }}
              onPress={() => setActiveIndex(index)}
              key={item.name}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color={activeIndex === index ? "#4f2683" : "gray"}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: activeIndex === index ? "#4f2683" : "gray",
                  marginBottom: 5,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        : settings.map((item, index) => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                flex: 1,
                borderBottomWidth: activeIndex === index+1 ? 2 : 0,
                borderBottomColor: "#4f2683",
              }}
              onPress={() => setActiveIndex(index+1)}
              key={item.name}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color={activeIndex === index+1 ? "#4f2683" : "gray"}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: activeIndex === index+1 ? "#4f2683" : "gray",
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
