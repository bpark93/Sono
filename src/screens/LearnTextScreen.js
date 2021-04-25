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
import { Image } from "react-native-expo-image-cache";
import {
  PhysicsModule,
  ProbeTypes,
  ProbeMovements,
} from "../components/FundamentalsModules";
import QuizQuestion from "../components/QuizQuestion";
import firebase from "../components/firebase";

const LearnTextScreen = ({ route, navigation }) => {
  const { id, category } = route.params;
  const { width } = Dimensions.get("window");

  // Progress
  const [progress, setProgress] = useState(null);
  const [updatedProgress, setUpdatedProgress] = useState(null);

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
      if (parseInt(updatedProgress) > parseInt(progress)) {
        await setLearnProgress(id.id, updatedProgress);
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

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [noQuizError, setNoQuizError] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("learnQuizzes")
      .doc("" + id.id)
      .get()
      .then(function (doc) {
        setQuizQuestions(doc.data().questions);
      })
      .catch(function (error) {
        setNoQuizError("This quiz is being developed. Stay tuned!");
      });
  }, [id]);

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
        <Text style={{ ...styles.header, marginTop: 20 }}>{id.title}</Text>

        {/* Page Image */}
        {id.headerImage ? (
          <Image
            uri={id.headerImage}
            style={{
              height: width * 0.75,
              width: width,
              marginTop: 20,
            }}
            resizeMode="contain"
          />
        ) : null}

        {/* Buttons */}
        <LearnDetailButtons
          progress={progress}
          pageInfo={id}
          snackToggle={() => setSnackVisible(true)}
          modalToggle={() => setModalVisible(true)}
          quizNotAvailable={noQuizError}
        />

        {/* Content */}
        {id.id === "1.1" ? (
          <PhysicsModule
            progress={(newProgress) => setUpdatedProgress(newProgress)}
            quizTrigger={() => setModalVisible(true)}
            quizNotAvailable={noQuizError}
          />
        ) : id.id === "1.2" ? (
          <ProbeTypes
            progress={(newProgress) => setUpdatedProgress(newProgress)}
            quizTrigger={() => setModalVisible(true)}
            quizNotAvailable={noQuizError}
          />
        ) : id.id === "1.3" ? (
          <ProbeMovements
            progress={(newProgress) => setUpdatedProgress(newProgress)}
            quizTrigger={() => setModalVisible(true)}
            quizNotAvailable={noQuizError}
          />
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
        {quizStarted ? (
          quizQuestions ? (
            <ScrollView
              style={{ flex: 1, marginVertical: 50 }}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                <Text style={{ fontSize: 24 }}>{id.title} Lesson Quiz</Text>
                <Text style={{ color: "#BBBBBB" }}>
                  Get 80% or higher to complete the lesson.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  ...styles.modalButton,
                  backgroundColor: "#ff6961",
                  marginBottom: 10,
                  marginTop: 0,
                }}
                onPress={() => {
                  setModalVisible(false);
                  setQuizStarted(false);
                  setQuestionsCorrect(0);
                }}
              >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                  Exit Quiz
                </Text>
              </TouchableOpacity>

              {quizQuestions.map((item, index) => (
                <View key={item.question} style={{ width: width - 30 }}>
                  {/* <Text style={{alignSelf:'center', fontSize:18}}>{`Question ${index+1}`}</Text> */}
                  <QuizQuestion
                    index={index}
                    question={item}
                    checker={() => setQuestionsCorrect(questionsCorrect + 1)}
                    answered={() => setQuestionsAnswered(questionsAnswered + 1)}
                  />
                </View>
              ))}
              {questionsAnswered === quizQuestions.length ? (
                questionsCorrect / quizQuestions.length > 0.8 ? (
                  <TouchableOpacity
                    style={{
                      ...styles.modalButton,
                      backgroundColor: "#2ecc71",
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      setQuizStarted(false);
                      setLearnProgress(id.id, "100");
                      setUpdatedProgress("100");
                      setQuestionsCorrect(0);
                      setQuestionsAnswered(0);
                    }}
                  >
                    <Text
                      style={{ color: "white", fontFamily: "Raleway-Bold" }}
                    >
                      Finish
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      ...styles.modalButton,
                      backgroundColor: "#ff6961",
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      setQuizStarted(false);
                      setQuestionsCorrect(0);
                      setQuestionsAnswered(0);
                    }}
                  >
                    <Text
                      style={{ color: "white", fontFamily: "Raleway-Bold" }}
                    >
                      Retry Quiz
                    </Text>
                  </TouchableOpacity>
                )
              ) : null}
            </ScrollView>
          ) : noQuizError ? (
            <View style={styles.modalView}>
              <Text>{noQuizError}</Text>
              <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: "#2980b9" }}
                onPress={() => {
                  setModalVisible(false);
                  setQuizStarted(false);
                }}
              >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                  Exit Quiz
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.modalView}>
              <ActivityIndicator size="large" />
            </View>
          )
        ) : (
          <View style={styles.modalView}>
            <Text style={styles.header}>{id.title}: Lesson Quiz</Text>
            <TouchableOpacity
              style={{ ...styles.modalButton, backgroundColor: "#2ecc71" }}
              onPress={() => setQuizStarted(true)}
            >
              <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                Start
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.modalButton, backgroundColor: "#2980b9" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                Dismiss
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    fontSize: 16,
  },
  category: {
    marginHorizontal: 10,
    fontSize: 20,
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
