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
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const SettingsAboutScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={{alignItems:'center', marginHorizontal:20, }}>
        <Image
          source={require("../../assets/sono_logo.png")}
          style={{ height: 120, width: 120, resizeMode: "contain" }}
        />
        <Text style={{fontFamily:'Raleway-Regular', fontSize:36, }}>SONO</Text>
        <Text style={{fontFamily:'Raleway-Regular', color:'gray', marginBottom:10}}>Version 0.1.0</Text>
        <Text style={{fontFamily:'Raleway-Regular', marginBottom:5}}>Powered By:</Text>
        <View style={{flexDirection:'row', marginBottom:10}}>
          <TouchableOpacity onPress={async () => await Linking.openURL('https://westernsono.ca/')}>
            <Image
              source={require("../../assets/western-logo.png")}
              style={{ height: 50, width: 150, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/schulich.png")}
            style={{ height: 50, width: 150, resizeMode: "contain" }}
          />
        </View>
        <Text style={{color:'gray', marginBottom:10}}>Sono is a free, open source project developed by medical students, residents and faculty of Schulich School of Medicine, London, ON.</Text>
        <Text style={{color:'gray'}}>Screencasts, cases and resources on the Learn Tab are from WesternSono.ca, adapted to a mobile platform. WesternSono is the hub of Point-Of-Care Ultrasound training, education and research at Western University.</Text>
      </View>

      <View
          style={{
            alignSelf: "center",
            paddingHorizontal: 20,
            marginTop:20,
            borderTopWidth:0.5,
            borderBottomWidth:0.2,
            borderColor:'#E0E0E0'

          }}
        >
          <Text
            style={{
              fontSize: 24,
              marginVertical: 30,
              fontFamily: "Raleway-Regular",
              // fontWeight:'bold',
              alignSelf:'center'
            }}
          >
            Help us improve Sono!
          </Text>
          <View style={{ marginBottom: 10, alignItems:'center' }}>
            <Text style={{marginBottom:20, color:'gray'}}>We are always looking for more collaborators and ideas. Help us improve by:</Text>
            
            <Text style={{color:'gray'}}>Emailing us your feedback:</Text>
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL("mailto:spark2023@meds.uwo.ca");
              }}
              style={{marginBottom:10, flexDirection:'row', alignItems:'center'}}
            >
              <MaterialCommunityIcons name="email-check-outline" size={50} color="black" />
            </TouchableOpacity>

            <Text style={{color:'gray'}}>Making a pull request:</Text>
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL("https://github.com/bpark93/pocus");
              }}
              style={{marginBottom:10, flexDirection:'row', alignItems:'center'}}
              // style={{borderWidth:1, borderRadius:10, alignItems:'center', marginVertical:5}}
            >
              <MaterialCommunityIcons name="github-box" size={50} color="black" />
            </TouchableOpacity>
            <Text style={{color:'gray'}}>Contributing your clips and images:</Text>
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL("https://westernsono-library.web.app/");
              }}
              style={{marginBottom:10, flexDirection:'row', alignItems:'center'}}
              // style={{borderWidth:1, borderRadius:10, overflow:'hidden', alignItems:'center', marginVertical:5}}
            >
              <MaterialCommunityIcons name="database" size={50} color="black" />
              <Text style={{fontSize:20}}>Sono Database</Text>
            </TouchableOpacity>
          </View>
        </View>

      <View style={styles.textBox}>
        <Text
          style={{
            fontSize: 24,
            marginVertical: 30,
            fontFamily: "Raleway-Regular",
            alignSelf:'center'
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
        <Text>Icons made by Freepik, Vectors Market and SmashIcons from www.flaticon.com</Text>

        <Text
          style={{
            fontSize: 24,
            marginVertical: 30,
            fontFamily: "Raleway-Regular",
            alignSelf:'center'
          }}
        >
          Privacy Policy
        </Text>
        <Text style={{ marginBottom: 10, color:'gray'  }}>
          Coming soon
        </Text>
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
