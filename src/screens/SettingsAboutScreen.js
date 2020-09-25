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
      <TouchableOpacity onPress={async () => await Linking.openURL('https://westernsono.ca/')}>
      <Image
        source={require("../../assets/western-logo.png")}
        style={{ height: 70, width: 175, resizeMode: "contain" }}
      />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 24,
            marginVertical: 15,
            fontFamily: "Raleway-Bold",
          }}
        >
          Credits
        </Text>
        <Text style={{ fontFamily: "Raleway-Medium", fontSize: 20 }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>Brian Park</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MD 2023 Candidate
            </Text>
          </View>
        </View>

        <Text style={{ fontFamily: "Raleway-Medium", fontSize: 20 }}>
          Content and Direction
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Frank Myslik</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MD, CCFP-EM, Associate Professor of Medicine, Department of
              Emergency Medicine, Western University
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
                "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/rob-e1533345037700_atdz73.jpg",
            }}
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Robert Arntfield</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MD, FRCPC, FCCP, FACEP, Associate Professor of Medicine,
              Department of Critical Care, Western University
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Derek Wu</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MD 2021 Candidate
            </Text>
          </View>
        </View>

        <Text style={{ fontFamily: "Raleway-Medium", fontSize: 20 }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Shane Freeman</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Jason Lam</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
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
            // source={{
            //   uri:
            //   "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
            // }}
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Mathilde Gaudreau-Simard</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Thamer Alaifan</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Bader Alsherhy</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MBBS, MPH, Department of Critical Care, Western University
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Dr. Melanie Le May</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              MD, PGY-5, Department of Internal Medicine, Western University
            </Text>
          </View>
        </View>

        <Text style={{ fontFamily: "Raleway-Medium", fontSize: 20 }}>
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
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Tracy Wang</Text>
            <Text style={{ fontFamily: "Raleway-Light" }}>
              B.Sc 2022, Western University
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Raleway-Medium",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Licenses
        </Text>
        <Text style={{ marginBottom: 10, color:'gray'  }}>
          Sono is licensed under the GNU Affero General Public License v3.0
        </Text>
        <Text style={{ marginBottom: 10, color:'gray' }}>
          Permissions of this strongest copyleft license are conditioned on
          making available complete source code of licensed works and
          modifications, which include larger works using a licensed work, under
          the same license. Copyright and license notices must be preserved.
          Contributors provide an express grant of patent rights. When a
          modified version is used to provide a service over a network, the
          complete source code of the modified version must be made available.
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          We welcome contributors!{" "}
        </Text>
        <View style={{marginBottom:10}}>
          <Text>Make a pull request here:</Text>
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("https://github.com/bpark93/pocus");
            }}
            // style={{borderWidth:1, borderRadius:10, alignItems:'center', marginVertical:5}}
          >
            <Image
              source={require("../../assets/github.png")}
              style={{ height: 41, width: 100 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom:10}}>
          <Text>Contribute your clips and images here:</Text>
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("https://westernsono-library.web.app/");
            }}
            // style={{borderWidth:1, borderRadius:10, overflow:'hidden', alignItems:'center', marginVertical:5}}
          >
            <Image
              source={require("../../assets/sonoLibraryLogo.png")}
              style={{ height: 41, width: 200 }}
            />
          </TouchableOpacity>
        </View>
        <Text>Icons made by Freepik from www.flaticon.com</Text>
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
