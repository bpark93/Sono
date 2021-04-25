import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, Dimensions, Platform } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const { width } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Learn Ultrasound",
    text:
      "Learn the tool that is revolutionizing care in nearly every medical and surgical specialty.",
    image: require("../../assets/8535.jpg"),
    backgroundColor: "#FFFFFF",
  },
  {
    key: "2",
    title: "Find images",
    text: "Access a vast library of normal and pathological images, video tutorials, clinical tools and resources.",
    image: require("../../assets/20945184.jpg"),
    backgroundColor: "#FFFFFF",
  },
  {
    key: "3",
    title: "Solve Cases",
    text:
      "Work your way through realistic and comprehensive teaching cases with detailed answer keys",
    image: require("../../assets/6461.jpg"),
    backgroundColor: "#FFFFFF",
  },
];

const _renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image
        source={item.image}
        style={{ width: width, height: width, resizeMode:'contain'}}
      />
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome
        name="chevron-right"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );
};

const _renderPrevButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome
        name="chevron-left"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );
};

const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome name="check" color="rgba(255, 255, 255, .9)" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  title: {
    paddingBottom: 10,
    fontSize: 40,
    fontWeight:'bold',
    fontFamily: Platform.OS === 'android' ? "Raleway-Regular" : null
  },
  text: {
    paddingTop: 10,
    fontSize:16,
    width:width-150,
  },
});

const Onboarding = ({ onDoneClick }) => {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderPrevButton={_renderPrevButton}
      activeDotStyle={{ backgroundColor: "#000000" }}
      onDone={() => onDoneClick(false)}
    />
  );
};

export default Onboarding;
