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

  const height = 75;
  const width = 75;

  const teamMembers = [
    {
      name:"Brian Park",
      role:'Project Lead',
      title:"Medical Student Class of 2023, Schulich School of Medicine and Dentistry, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/brian-800x600_vhvyo3.jpg"
    },
    {
      name:"Dr. Frank Myslik",
      title:"MD, CCFP-EM \nAssociate Professor of Medicine\nUltrasound Fellowship Director, Division of Emergency Medicine, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600485731/avatars/Profile-Picture_kgrj6l.png"
    },
    {
      name:"Dr. Drew Thompson",
      title:"MD, FRCPC\nAssociate Professor of Medicine\nDivision of Emergency Medicine, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1603318543/avatars/drew-thompson-2-e1533238732547_fkmbsk.jpg"
    },
    {
      name:"Dr. Robert Arntfield",
      title:"MD, FRCPC, FCCP, FACEP\nAssociate Professor of Medicine\n Department of Critical Care, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/rob-e1533345037700_atdz73.jpg"
    },
    {
      name:"Dr. Shane Freeman",
      title:"MD, PGY-4, Department of Emergency Medicine, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600487717/avatars/shane-1160x1160_sm5as9.jpg"
    },
    {
      name:"Dr. Jason Lam",
      title:"MD, CCFP-EM, Department of Emergency Medicine, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/v1616906695/avatars/user_ynm3wo.png"
    },
    {
      name:"Derek Wu",
      title:"Medical Student Class of 2021, Schulich School of Medicine and Dentistry, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg"
    },
    {
      name:"Tracy Wang",
      role:'Graphic Design',
      title:"B.Sc 2022, Western University",
      pictureUrl:"https://res.cloudinary.com/dwtw3ge2z/image/upload/v1616906695/avatars/user_ynm3wo.png"
    },

  ]

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {teamMembers.map((member) => (
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 15,
          marginHorizontal:15
        }}
        key={member.name}
      >
        {member.pictureUrl ? <Image
          source={{
            uri:member.pictureUrl,
          }}
          style={{ height: height, width: width, borderRadius: 20 }}
        />: <View style={{ height: height, width: width, borderRadius: 20 }}></View>}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 16 }}>{member.name}</Text>
          {member.role ? <Text style={{ fontSize: 12 }}>{member.role}</Text> : null}
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              color: "gray",
              fontSize: 12,
            }}
          >
            {member.title}
          </Text>
        </View>
      </View>
      ))}
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
