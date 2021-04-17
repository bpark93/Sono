import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
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
import firebase from "../components/firebase";
import HTML from "react-native-render-html";
import { Image } from "react-native-expo-image-cache";
import {
  PhysicsModule,
  ProbeTypes,
  ProbeMovements,
} from "../components/FundamentalsModules";

const LearnTextScreen = ({ route, navigation }) => {
  const { id, category } = route.params;
  const { width } = Dimensions.get("window");

  // Progress
  const [progress, setProgress] = useState(null);
  const [updatedProgress, setUpdatedProgress] = useState(null)
  
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
      if (parseInt(updatedProgress)>parseInt(progress)){
        await setLearnProgress(id.id, updatedProgress)
      } 
    };

    const unsubscribe = navigation.addListener("blur", () => {
      updateProgress();
    });
    return () => unsubscribe();
  }, [updatedProgress]);

  // Set up for navigation to Modules
  const categoryId = id.id.split(".")[0];
  const moduleParams = learnDatabase.filter(
    (item) => item.id.toString() === categoryId
  );

  // States for Buttons
  const [snackVisible, setSnackVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [content, setContent] = useState("");
  const [pageImage, setPageImage] = useState("");
  const [none, setNone] = useState(false);
  useEffect(() => {
    firebase
      .firestore()
      .collection("learnTextModules")
      .doc("" + id.id)
      .get()
      .then(function (doc) {
        setContent(doc.data().html);
        setPageImage(doc.data().headerImage);
      })
      .catch(function (error) {
        setNone(true);
        setContent(
          "This lesson is not yet ready for prime-time! Please check later for an update."
        );
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: "white",
      }}
    >
      {/* Go Back to Module Button */}
      <View>
        <TouchableOpacity
          style={styles.touchable}
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
      <ScrollView
        style={styles.container}
        containerStyle={{ justifyContent: "space-between", flex: 1 }}
      >
        {/* Header */}
        <Text style={{...styles.header, marginTop:20}}>{id.title}</Text>

        {/* Page Image */}
        {pageImage.length != 0 && (
          <Image
            uri={pageImage}
            style={{
              height: width * 0.75,
              width: width,
              marginTop: 20,
            }}
            resizeMode="contain"
          />
        )}

        

        {/* Buttons */}
        <LearnDetailButtons
          progress={progress}
          pageInfo={id}
          snackToggle={() => setSnackVisible(true)}
          modalToggle={() => setModalVisible(true)}
          quizNotAvailable={true}
        />

        {/* Caption */}
        {/* <Text style={{ ...styles.body, marginTop: 20 }}>{id.captionText}</Text> */}

        {/* Placeholder */}
        {none && (
          <Image
            source={require("../../assets/crane.png")}
            style={{
              height: 200,
              width: 200,
              marginVertical: 20,
              alignSelf: "center",
            }}
          />
        )}

        {/* Content */}
        {id.id === "1.1" ? (
          <PhysicsModule progress={(newProgress) => setUpdatedProgress(newProgress)}/>
        ) : id.id === "1.2" ? (
          <ProbeTypes />
        ) : id.id === "1.3" ? (
          <ProbeMovements />
        ) : null}
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
  htmlStyle: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  header: {
    marginHorizontal: 15,
    marginBottom: 5,
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto-Bold" : null,
    fontWeight: "bold",
  },
  body: {
    marginHorizontal: 15,
    // fontFamily: "Lora-Regular",
    fontSize: 16,
  },
  category: {
    marginHorizontal: 10,
    fontSize: 20,
    // fontFamily: "Raleway-Regular",
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
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default LearnTextScreen;
