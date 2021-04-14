import { Link } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsAboutScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={{ alignItems: "center", marginHorizontal: 20 }}>
        <Image
          source={require("../../assets/sono_logo.png")}
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        />
        <Text style={{ fontSize: 50 }}>Sono</Text>
        <Text
          style={{
            color: "gray",
            marginBottom: 10,
          }}
        >
          Version 1.0.2
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 20 }}>Powered By:</Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../assets/western-logo.png")}
            style={{ height: 60, width: 170, resizeMode: "contain" }}
          />
          <Image
            source={require("../../assets/schulich.png")}
            style={{ height: 60, width: 170, resizeMode: "contain" }}
          />
        </View>
        <Text style={{ color: "gray", marginBottom: 10 }}>
          Sono is a free, open source project developed by medical students,
          residents and faculty of Schulich School of Medicine, London, ON.
        </Text>
        <Text style={{ color: "gray" }}>
          Screencasts, cases and resources on the Learn Tab are provided by
          WesternSono, adapted to a mobile platform. Ultrasound clips in the
          Library section are sourced from ultrasound archives within London
          Health Sciences Centre. WesternSono is the hub of Point-Of-Care
          Ultrasound training, education and research at Western University.
        </Text>
      </View>

      <View
        style={{
          alignSelf: "center",
          paddingHorizontal: 20,
          marginTop: 20,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.2,
          borderColor: "#E0E0E0",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginBottom: 15,
            marginTop:30,
            alignSelf: "center",
          }}
        >
          Contribute to Sono!
        </Text>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("mailto:spark2023@meds.uwo.ca");
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 2,
              marginVertical: 5,
            }}
          >
            <MaterialCommunityIcons
              name="email-check-outline"
              size={50}
              color="black"
            />
            <Text style={{ color: "gray", fontSize: 16 }}>
              Email us your feedback
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("https://github.com/bpark93/Sono");
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 2,
              marginVertical: 5,
            }}
          >
            <MaterialCommunityIcons name="github-box" size={50} color="black" />
            <Text style={{ color: "gray", fontSize: 16 }}>
              Collaborate with us on our code
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL(
                `mailto:sono.app.contact@gmail.com?subject=Clip Contribution"&body=Name: \n\nLevel of Training: \n\nHeader: \n\nCaption (Describe the findings on the clips, or provide a learning point. Limit 200 characters): `
              );
            }}
            activeOpacity={1}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 2,
              marginVertical: 5,
            }}
          >
            <MaterialCommunityIcons name="database" size={50} color="black" />
            <Text style={{ color: "gray", fontSize: 16 }}>
              Contribute your clips and images
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textBox}>
        <Text
          style={{
            fontSize: 24,
            marginVertical: 30,
            alignSelf: "center",
          }}
        >
          Licenses
        </Text>
        <Text style={{ marginBottom: 10, color: "gray" }}>
          Sono is licensed under the GNU Affero General Public License v3.0
        </Text>
        <Text style={{ marginBottom: 10, color: "gray" }}>
          Permissions of this strongest copyleft license are conditioned on
          making available complete source code of licensed works and
          modifications, which include larger works using a licensed work, under
          the same license. Copyright and license notices must be preserved.
          Contributors provide an express grant of patent rights. When a
          modified version is used to provide a service over a network, the
          complete source code of the modified version must be made available.
        </Text>
        <TouchableOpacity
          onPress={async () =>
            await Linking.openURL("https://github.com/bpark93/Sono/blob/71d7b21b8b659f0670ac9ca1bb896b9e57bad6d7/README.md")
          }
        >
          <Text
            style={{
              color: "#3366BB",
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            Read the Full Version Here
          </Text>
        </TouchableOpacity>
        <Text style={{ marginBottom: 10, color: "gray" }}>
          Icons made by Freepik, Vectors Market and SmashIcons from
          www.flaticon.com
        </Text>
        <TouchableOpacity
          onPress={async () =>
            await Linking.openURL("https://westernsono.ca/sono-privacy-policy/")
          }
        >
          <Text
            style={{
              color: "#3366BB",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            Read our Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  textBox: {
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
});

export default SettingsAboutScreen;
