import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const CasesCard = ({ item }) => {
  const Width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {item._embedded["wp:featuredmedia"][0].media_details.sizes
        .course_thumbnail ? (
        <Image
          style={{
            height: 150,
            width: 350,
            resizeMode: "cover",
            alignSelf: "center",
          }}
          source={{
            uri:
              item._embedded["wp:featuredmedia"][0].media_details.sizes
                .course_thumbnail.source_url,
          }}
        />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 5,
          width: 330,
        }}
      >
        <FontAwesome5 name="user-md" style={styles.iconStyle} />
        <Text style={{ fontFamily: "Raleway-Regular", fontSize: 12 }}>
          By {item._embedded.author[0].name}
        </Text>
      </View>
      <Text style={styles.title}>{item.title.rendered}</Text>
      {item.excerpt.rendered ? (
        <Text
          style={{
            marginHorizontal: 15,
            width: 320,
            fontSize: 12,
            color: "gray",
          }}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {item.excerpt.rendered.replace("<p>", "")}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 15,
    marginVertical: 15,
    overflow: "hidden",
    paddingBottom:15,
    // elevation:2
  },
  title: {
    fontSize: 16,
    marginHorizontal: 15,
    fontFamily: "Raleway-Medium",
    width: 320,
  },
  iconStyle: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default CasesCard;
