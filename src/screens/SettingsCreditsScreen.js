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

const SettingsAboutScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.textBox}>
        <Text style={{ fontFamily: "Raleway-Regular", fontSize: 20 }}>
          Project Lead and Software Developer
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/brian-800x600_vhvyo3.jpg",
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Brian Park</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD 2023 Candidate, Schulich School of Medicine and Dentistry,
              Western University
            </Text>
          </View>
        </View>

        <Text style={{ fontFamily: "Raleway-Regular", fontSize: 20 }}>
          Project Supervisors
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600485731/avatars/Profile-Picture_kgrj6l.png",
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Frank Myslik</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, CCFP-EM, Associate Professor of Medicine, Department of
              Emergency Medicine, Western University
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1603318543/avatars/drew-thompson-2-e1533238732547_fkmbsk.jpg"
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Drew Thompson</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, FRCPC, Associate Professor of Medicine, Department of
              Emergency Medicine, Western University
            </Text>
          </View>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/rob-e1533345037700_atdz73.jpg",
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Robert Arntfield</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, FRCPC, FCCP, FACEP, Associate Professor of Medicine,
              Department of Critical Care, Western University
            </Text>
          </View>
        </View>

        <Text style={{ fontFamily: "Raleway-Regular", fontSize: 20 }}>
          Content Contributors
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600487717/avatars/shane-1160x1160_sm5as9.jpg",
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Shane Freeman</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, PGY-4, Department of Emergency Medicine, Western University
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //    "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/rob-e1533345037700_atdz73.jpg",
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Jason Lam</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, CCFP-EM, Department of Emergency Medicine, Western University
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg",
            }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Derek Wu</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD 2021 Candidate, Schulich School of Medicine and Dentistry,
              Western University
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //   "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Mathilde Gaudreau-Simard</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, PGY-5, Department of Internal Medicine, University of Ottawa
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //   "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Thamer Alaifan</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, FRCPC, Department of Critical Care, Western University
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //   "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Bader Alsherhy</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MBBS, MPH, Department of Critical Care, Western University
            </Text>
          </View>
        </View> */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //   "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Melanie Le May</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              MD, PGY-5, Department of Internal Medicine, Western University
            </Text>
          </View>
        </View> */}

        <Text style={{ fontFamily: "Raleway-Regular", fontSize: 20 }}>
          Graphic Design
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Image
            // source={{
            //   uri:
            //     "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600487717/avatars/shane-1160x1160_sm5as9.jpg"
            // }}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Tracy Wang</Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              B.Sc 2022, Western University
            </Text>
          </View>
        </View>
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
    marginVertical: 20,
  },
});

export default SettingsAboutScreen;
