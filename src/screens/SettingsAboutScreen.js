import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Subheading,
  Headline,
  Text,
  Caption,
  Avatar,
} from "react-native-paper";

const SettingsAboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/western-logo.png")} />
      <View style={styles.textBox}>
        <Headline>Credits</Headline>
        <Text style={{ fontFamily: "Raleway-Bold", fontSize: 18 }}>
          Project Lead and Software Developer
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          {/* <Avatar.Image source={{}}/> */}
          <Text>Brian Park</Text>
          <Text style={{ fontFamily: "Raleway-Light" }}>
            {" "}
            MD 2023 Candidate
          </Text>
        </View>
        <Text style={{ fontFamily: "Raleway-Bold", fontSize: 18 }}>
          Content and Direction
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text>Frank Myslik</Text>
          <Text style={{ fontFamily: "Raleway-Light" }}> MD, CCFP-EM</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text>Robert Arntfield</Text>
          <Text style={{ fontFamily: "Raleway-Light" }}> MD, FRCPC</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <Text>Derek Wu</Text>
          <Text style={{ fontFamily: "Raleway-Light" }}>
            {" "}
            MD 2021 Candidate
          </Text>
        </View>
        <Text style={{ fontFamily: "Raleway-Bold", fontSize: 18 }}>
          Licenses
        </Text>
        <Text>Icons made by Freepik from www.flaticon.com</Text>
        <Text>Lottie by AirBnB</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  textBox: {
    marginTop: 15,
    alignItems: "flex-start",
  },
});

export default SettingsAboutScreen;
