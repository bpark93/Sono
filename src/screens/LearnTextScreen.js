import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  LogBox,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { learnDatabase } from "../../database";
import LearnDetailButtons from "../components/LearnDetailButtons";
import {
  setLearnProgress,
  getLearnProgress,
} from "../components/getLearnDatabase";
import { Snackbar, ActivityIndicator } from "react-native-paper";
import Constants from "expo-constants";
import firebase from '../components/firebase'
import HTML from 'react-native-render-html';

// Doesn't work until 0.63
// LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const LearnTextScreen = ({ route, navigation }) => {
  const { id, category } = route.params;
  
  // Progress
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    const checkProgress = async () => {
      const pageprogress = await getLearnProgress(id.id);
      if (pageprogress === "0") {
        setLearnProgress(id.id, "1");
      }
      setProgress(pageprogress);
    };
    checkProgress();

    const updateProgress = async () => {
    //   update progress based on text read
    };
    const unsubscribe = navigation.addListener("blur", () => {
      updateProgress();
    });
    return () => unsubscribe();
  }, []);

  
  // Set up for navigation to Modules
  const categoryId = id.id.split(".")[0];
  const moduleParams = learnDatabase.filter(
    (item) => item.id.toString() === categoryId
  );

  // States for Buttons
  const [snackVisible, setSnackVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [content, setContent] = useState('')
  const [none, setNone] = useState(false)
  useEffect(() => {
    firebase
    .firestore()
    .collection("learnTextModules")
    .doc(''+id.id)
    .get().then(function(doc) {
        setContent(doc.data().html)
    }).catch(function(error){
        setNone(true)
        setContent("This lesson is not yet ready for prime-time! Please check later for an update.")
    })
  },[])

  

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight+15, backgroundColor:'white'}}>
        <ScrollView
          style={styles.container}
          containerStyle={{ justifyContent: "space-between", flex: 1 }}
        >
          <View style={styles.categoryTouchable}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() =>
                navigation.navigate("Modules", { id: moduleParams[0] })
              }
            >
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color="#4f2683"
              />
              <Text style={styles.category}>{category}</Text>
            </TouchableOpacity>
          </View>
          {id.headerImage && <Image source={id.headerImage} style={{height:200, width:200, marginVertical:20, alignSelf:'center'}}/>}
          <Text style={styles.header}>{id.title}</Text>
          <LearnDetailButtons
            progress={progress}
            pageInfo={id}
            snackToggle={() => setSnackVisible(true)}
            modalToggle={() => setModalVisible(true)}
          />
          <Text style={styles.body}>{id.captionText}</Text>
          {none && <Image source={require('../../assets/crane.png')} style={{height:200, width:200, marginVertical:20, alignSelf:'center'}}/>}
          {content.length === 0? (
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
              <ActivityIndicator
                animating={true} 
                size='large'  
              />
          </View>
          ) : (
            <HTML 
              html={content}
              baseFontStyle={{fontSize:14, fontFamily:'Raleway-Medium'}}
              containerStyle={styles.htmlStyle}
            />
          )
          }
          
          
        </ScrollView> 

        <Snackbar
            visible={snackVisible}
            onDismiss={() => setSnackVisible(false)}
            duration={3000}
            action={{
            label: "Okay",
            onPress: () => setSnackVisible(false),
            }}
        >
            "{id.title}" added to Bookmarks
        </Snackbar>

        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalView}>
            <Text style={styles.header}>{id.title}: Lesson Quiz</Text>
            <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: "#2ecc71" }}
            >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                Start
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: "#2980b9" }}
                onPress={() => setModalVisible(false)}
            >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                Dismiss
                </Text>
            </TouchableOpacity>
            </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  htmlStyle:{
    marginHorizontal: 15,
  },
  header: {
    marginHorizontal: 15,
    marginBottom: 5,
    fontSize: 24,
    fontFamily: "Raleway-Bold",
  },
  body: {
    margin: 15,
    fontFamily: "Roboto-Regular",
    fontSize:18,
  },
  category: {
    marginHorizontal: 10,
    fontSize: 20,
    fontFamily: "Raleway-Regular",
    color: "#4f2683",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: "gray",
    fontSize: 12,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    height: 50,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  categoryTouchable: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default LearnTextScreen;
