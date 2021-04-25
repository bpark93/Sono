import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const height = 100;
const width = 100;

const SettingsAboutScreen = () => {
  const projectLeads = [
    {
      name: "Brian Park",
      group: "1",
      role: "Project Lead, Software Developer",
      title:
        "Medical Student Class of 2023, Schulich School of Medicine and Dentistry, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1617951173/avatars/1617492196574-14_lferdw.jpg",
      blurb:
        "Brian is a Medical Student at Western University with interests in ultrasound guided procedures and Emergency Medicine. After stumbling upon Dr. Myslik and the faculty at WesternSono, he was instantly hooked on the immense utility and broad applicability of ultrasound at the point of care. In an effort to share his newfound passion, Brian spent his lockdown downtime combining ultrasound with another passion of his (software development) to create the free and open resource that is currently in your hands. When he's not nerding out over ultrasound clips or pixel nudging Sono to perfection, Brian enjoys cooking, snowboarding and crafting new creative excuses for his underperforming Tottenham Hotspur FC.",
      twitter: "_brianpark",
      shortName: "Brian",
    },
    {
      name: "Dr. Frank Myslik",
      group: "1",
      role: "Physician Lead",
      title:
        "MD, CCFP(EM), CCEeXAM, Diploma MEd\nAssistant Professor of Medicine\nUltrasound Fellowship Director, Division of Emergency Medicine, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600485731/avatars/Profile-Picture_kgrj6l.png",
      blurb:
        "Dr. Myslik is a Point of Care Ultrasound (POCUS) expert and Assistant Professor with Western University. As a full-time Emergency Medicine Physician, he uses POCUS on a daily basis for resuscitative, diagnostic and procedural indications. He has taught at both national and international courses and has also authored multiple papers on the subject. As the Acute Care POCUS Fellowship director for Western University, he has a strong interest in education for learners of all levels.",
      twitter: "frankmyslik",
      shortName: "Dr. Myslik",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Shane Freeman",
      title: "MD, Acute Care POCUS Fellow, Department of Emergency Medicine, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1600487717/avatars/shane-1160x1160_sm5as9.jpg",
      role: "Content Editor",
    },
    {
      name: "Dr. Jason Lam",
      title:
        "MD, CCFP-EM, Acute Care POCUS Fellow, Department of Emergency Medicine, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/c_fill_pad,g_auto,b_auto,w_300,h_300/v1619126586/avatars/Jason_Lam_usz8p3.jpg",
      role: "Content Editor",
    },

    {
      name: "Tracy Wang",
      role: "Graphic Design",
      title: "B.Sc 2022, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1100,h_1100/v1618627819/avatars/174202434_1615409581992080_1278976305973028815_n_z4imhq.jpg",
    },
  ];

  const contributors = [
    {
      name: "Dr. Drew Thompson",
      title:
        "MD, FRCPC\nAssociate Professor of Medicine\nDivision of Emergency Medicine, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_1000,h_1000/v1603318543/avatars/drew-thompson-2-e1533238732547_fkmbsk.jpg",
      // twitter:"emergguy",
      // blurb:"Dr. Thompson is a full time emergency physician and the local lead of the ED ultrasound program at Western’s ED since 2005 and Director of its present day operations. In addition to being a CEUS master instructor, he has lectured extensively on point of care ultrasound and has special interests in quality assurance and resident education."
    },
    {
      name: "Dr. Robert Arntfield",
      title:
        "MD, FRCPC, FCCP, FACEP\nAssociate Professor of Medicine\n Department of Critical Care, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600485731/avatars/rob-e1533345037700_atdz73.jpg",
      // twitter:"arntfield",
      // blurb:"Dr. Arntfield is a trained emergency physician, intensivist and traumatologist who is active with point of care ultrasound in all clinical areas. He is co-author of the textbook: Point-of-Care Ultrasound and is director of the critical care ultrasound program at Western University. He is a past course leader for the American College of Chest Physicians (ACCP) critical care ultrasonography program and teaches and lectures on point of care ultrasound throughout the world."
    },
    {
      name: "Derek Wu",
      title:
        "Medical Student Class of 2021, Schulich School of Medicine and Dentistry, Western University",
      pictureUrl:
        "https://res.cloudinary.com/dwtw3ge2z/image/upload/g_face,c_thumb,w_300,h_300/v1600487083/avatars/IMG_0147-1_efozod.jpg",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.header}>Leadership</Text>
      {projectLeads.map((member) => (
        <Profile member={member} key={member.name} />
      ))}

      <Text style={{ ...styles.header, marginTop: 30 }}>Sono Team</Text>
      {teamMembers.map((member) => (
        <Profile member={member} key={member.name} />
      ))}

      <Text style={{ ...styles.header, fontSize:26 }}>Special Thanks to</Text>
      {contributors.map((member) => (
        <Profile member={member} key={member.name} />
      ))}
    </ScrollView>
  );
};

const Profile = ({ member }) => {
  const [hidePressed, setHidePressed] = useState(true);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 15,
          marginHorizontal: 15,
        }}
      >
        {member.pictureUrl ? (
          <Image
            source={{
              uri: member.pictureUrl,
            }}
            style={{ height: height, width: width, borderRadius: 30 }}
          />
        ) : (
          <View
            style={{ height: height, width: width, borderRadius: 30 }}
          ></View>
        )}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.names}>{member.name}</Text>
          {member.role ? (
            <Text style={{ fontSize: 16 }}>{member.role}</Text>
          ) : null}
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
      {member.blurb || member.twitter ? (
        <View
          style={{
            marginHorizontal: 10,
            flex: 1,
            backgroundColor: "#F0F0F0",
            borderRadius: 10,
            padding: 10,
          }}
        >
          {member.blurb ? (
            <TouchableOpacity onPress={() => setHidePressed(!hidePressed)} activeOpacity={0.6}>
              <Text numberOfLines={hidePressed ? 5 : 0}>{member.blurb}</Text>
            </TouchableOpacity>
          ) : null}
          {hidePressed ? <Text style={{color: "#3366BB"}}>Read More</Text> : null}
          <View style={{ flexDirection: "row" }}>
            {member.twitter ? (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  marginLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={async () => {
                  await Linking.openURL(
                    `https://twitter.com/${member.twitter}`
                  );
                }}
              >
                <FontAwesome5 name="twitter" size={38} color="#00acee" />
                <Text style={{ color: "#00acee" }}>@{member.twitter}</Text>
              </TouchableOpacity>
            ) : null}
            {member.email ? (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  marginLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={async () => {
                  await Linking.openURL(`mailto:${member.email}`);
                }}
              >
                <FontAwesome5 name="envelope" size={32} color="black" />
                <Text style={{ color: "black", marginLeft: 5 }}>
                  Email {member.shortName}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      ) : null}
    </>
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
  header: {
    fontSize: 32,
    marginVertical: 15,
    fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  names: {
    fontSize: 20,
    marginVertical: 5,
  },
});

export default SettingsAboutScreen;
