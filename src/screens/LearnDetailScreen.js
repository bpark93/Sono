import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { learnDatabase } from "../../database";
import LearnDetailButtons from "../components/LearnDetailButtons";
import {
  setLearnProgress,
  getLearnProgress,
} from "../components/getLearnDatabase";
import {
  Snackbar,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import { addNote, getNotes, editNote } from "../components/useLearnNotes";
import LearnNotes from "../components/LearnNotes";
import firebase from "../components/firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar, setStatusBarTranslucent } from "expo-status-bar";
import QuizQuestion from "../components/QuizQuestion";

const LearnDetailScreen = ({ route, navigation }) => {
  const { id, category } = route.params;
  const videoRef = useRef(null);
  const youtubeRef = useRef(null);
  const [youtubePlaying, setYoutubePlaying] = useState(true);

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
      const duration = await youtubeRef.current.getDuration();
      const currentTime = await youtubeRef.current.getCurrentTime();
      const percentage = Math.floor((currentTime / duration) * 100);
      const temp = await getLearnProgress(id.id);
      const progressInt = parseInt(temp);

      if (percentage > progressInt) {
        setLearnProgress(id.id, percentage.toString());
      }
    };
    const unsubscribe = navigation.addListener("blur", () => {
      updateProgress();
      setStatusBarTranslucent(true);
    });
    return () => unsubscribe();
  }, []);

  // Orientation manipulation
  const Width = Dimensions.get("window").width;
  const Height = Dimensions.get("window").height;
  const [OrientationMode, setOrientationMode] = useState({
    width: Width,
    height: (Width * 9) / 16,
  });
  const landscape = () => {
    setOrientationMode({ width: Height, height: Width });
  };
  const portrait = () => {
    setOrientationMode({ width: Width, height: (Width * 9) / 16 });
  };
  const handleFullscreenVideo = async (event) => {
    if (event.fullscreenUpdate === 0) {
      try {
        landscape();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } catch (error) {
        console.log(error);
      }
    } else if (event.fullscreenUpdate === 2) {
      try {
        portrait();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleFullScreenYoutube = async (status) => {
    if (status === true) {
      try {
        landscape();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } catch (error) {
        console.log(error);
      }
    } else if (status === false) {
      try {
        portrait();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Set up for navigation to Modules
  const categoryId = id.id.split(".")[0];
  const moduleParams = learnDatabase.filter(
    (item) => item.id.toString() === categoryId
  );

  // States for Buttons
  const [snackVisible, setSnackVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [transcriptToggled, setTranscriptToggled] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);

  // To pause video once clicking away
  if (id.youtube === undefined) {
    useEffect(() => {
      const unsubscribe = navigation.addListener("blur", () => {
        videoRef.current.pauseAsync();
      });
      return () => unsubscribe();
    }, [navigation]);
  }

  // Notes
  const [text, setText] = useState("");
  const [newNoteButtonPressed, setNewNoteButtonPressed] = useState(false);
  const textinputRef = useRef(null);
  // get current time
  const [currentTime, setCurrentTime] = useState(null);
  const getTime = async () => {
    try {
      const videoTime = await youtubeRef.current.getCurrentTime();
      setCurrentTime(videoTime);
    } catch (error) {
      return null;
    }
  };
  // time formatter
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  };
  // Note state
  const [noteList, setNoteList] = useState([]);
  const parseNoteList = async () => {
    try {
      const notesStringList = await getNotes(id.id);
      if (notesStringList === []) {
        return null;
      } else {
        const notes = notesStringList.map((note) => JSON.parse(note));
        setNoteList(notes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    parseNoteList();
  }, [id]);
  const youtubeSeek = (seconds) => {
    youtubeRef.current.seekTo(seconds);
  };
  const [editing, setEditing] = useState(false);
  const [original, setOriginal] = useState(null);
  const edit = (item) => {
    setEditing(true);
    setText(item.note);
    setOriginal(item);
    setCurrentTime(item.time);
    setNewNoteButtonPressed(true);
  };

  const [transcriptText, setTranscriptText] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("learnTranscripts")
      .doc("" + id.id)
      .get()
      .then(function (doc) {
        setTranscriptText(doc.data().body);
        setErrorMessage("");
      })
      .catch(function (error) {
        setErrorMessage("The transcript for this page is unavailable.");
        setTranscriptText("");
      });
  }, [id]);

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [questionsCorrect, setQuestionsCorrect] = useState(0)
  const [noQuizError, setNoQuizError] = useState("")
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
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "black",
          height: 20 + Height,
        }}
      ></View>
      <StatusBar style="light" />
      <View
        style={{
          alignItems: "center",
          backgroundColor: "black",
          marginTop: Constants.statusBarHeight,
        }}
      >
        <View>
          {id.youtube ? (
            <YoutubePlayer
              ref={youtubeRef}
              height={OrientationMode.height}
              width={OrientationMode.width}
              videoId={id.youtube}
              play={youtubePlaying}
              volume={50}
              playbackRate={1}
              onFullScreenChange={(status) => handleFullScreenYoutube(status)}
              playerParams={{
                cc_lang_pref: "us",
                showClosedCaptions: false,
              }}
            />
          ) : (
            <Video
              ref={videoRef}
              source={{ uri: id.video }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              useNativeControls
              onFullscreenUpdate={(event) => handleFullscreenVideo(event)}
              style={{
                width: OrientationMode.width,
                height: OrientationMode.height,
              }}
            />
          )}
        </View>
      </View>
      {!transcriptToggled ? (
        <KeyboardAwareScrollView
          style={styles.container}
          containerStyle={{ justifyContent: "space-between", flex: 1 }}
        >
          <View style={styles.categoryTouchable}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() =>
                navigation.replace("Modules", { id: moduleParams[0] })
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
          <Text style={styles.header}>{id.title}</Text>
          <LearnDetailButtons
            progress={progress}
            pageInfo={id}
            snackToggle={() => setSnackVisible(true)}
            modalToggle={() => setModalVisible(true)}
            transcriptToggle={() => setTranscriptToggled(true)}
            noteToggle={(bool) => setNoteVisible(bool)}
            youtubeToggle={() => setYoutubePlaying(false)}
          />
          <Text style={styles.body}>{id.captionText}</Text>

          {noteVisible ? (
            <View style={{ margin: 15, flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Your Notes
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginVertical: 10,
                  justifyContent: "center",
                }}
                onPress={() => {
                  if (!newNoteButtonPressed) {
                    setNewNoteButtonPressed(true);
                    setYoutubePlaying(false);
                    getTime();
                    parseNoteList();
                  } else {
                    // setYoutubePlaying(true)
                    setNewNoteButtonPressed(false);
                    setEditing(false);
                    setText("");
                  }
                }}
              >
                <View style={{backgroundColor:'#E0E0E0', flexDirection:'row', padding:10, borderRadius:10}}>
                  <MaterialCommunityIcons
                    name={
                      newNoteButtonPressed ? "cancel" : "comment-plus-outline"
                    }
                    size={16}
                    style={{ marginRight: 5,}}
                  />
                  <Text style={{ fontSize: 14, }}>
                    {newNoteButtonPressed ? "Cancel" : "Add a new note"}
                  </Text>
                </View>
              </TouchableOpacity>
              {newNoteButtonPressed && (
                <View>
                  <TextInput
                    ref={textinputRef}
                    mode="outlined"
                    label=""
                    value={text}
                    onChangeText={(text) => setText(text)}
                    multiline={true}
                    numberOfLines={3}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <Button
                    mode="contained"
                    disabled={text ? false : true}
                    style={{
                      marginHorizontal: Width * 0.2,
                      marginVertical: 10,
                    }}
                    labelStyle={{ fontWeight: "bold" }}
                    onPress={async () => {
                      if (!editing) {
                        await addNote(id.id, text, currentTime);
                        textinputRef.current.clear();
                        setText("");
                        setNewNoteButtonPressed(false);
                        await parseNoteList();
                      } else {
                        await editNote(id.id, text, currentTime, original);
                        textinputRef.current.clear();
                        setNewNoteButtonPressed(false);
                        setEditing(false);
                        setText("");
                        await parseNoteList();
                      }
                    }}
                  >
                    {editing
                      ? "Update"
                      : `Add note @ ${formatTime(currentTime)}`}
                  </Button>
                </View>
              )}
              <View>
                {noteList.length === 0 ? (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ color: "#9E9E9E", fontSize: 18 }}>
                      No saved notes.
                    </Text>
                  </View>
                ) : (
                  noteList.map((item) => (
                    <LearnNotes
                      key={item.note}
                      item={item}
                      id={id.id}
                      formatTime={(time) => formatTime(time)}
                      seek={(time) => youtubeSeek(time)}
                      refresh={() => parseNoteList()}
                      edit={(x) => edit(x)}
                    />
                  ))
                )}
              </View>
            </View>
          ) : null}
        </KeyboardAwareScrollView>
      ) : (
        <View style={{ ...styles.container }}>
          <TouchableOpacity
            style={{ ...styles.transcriptButton, alignSelf: "flex-end" }}
            onPress={() => {
              setTranscriptToggled(false);
              setNoteVisible(false);
            }}
          >
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
          <ScrollView>
            {transcriptText && !errorMessage
              ? transcriptText.map((paragraph) => (
                  <View key={paragraph.timestamp}>
                    <TouchableWithoutFeedback
                      onPress={() => youtubeSeek(paragraph.timestamp)}
                    >
                      <Text
                        style={{
                          // fontFamily: "Raleway-Regular",
                          textDecorationLine: "underline",
                          marginHorizontal: 15,
                          color: "#03a9f4",
                        }}
                      >
                        {formatTime(paragraph.timestamp)}
                      </Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.body}>{paragraph.body}</Text>
                  </View>
                ))
              : null}
            {errorMessage ? (
              <Text style={{ fontSize: 18, marginHorizontal: 15 }}>
                {errorMessage}
              </Text>
            ) : null}
          </ScrollView>
        </View>
      )}

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
            <ScrollView style={{ flex: 1, marginVertical:50 }} contentContainerStyle={{justifyContent: "center", alignItems:'center',}}> 
              <View style={{marginVertical:20}}>
                <Text style={{fontSize:24}}>{id.title} Lesson Quiz</Text>
                <Text style={{color:'#BBBBBB'}}>Get 80% or higher to complete the lesson.</Text>
              </View>
              
              <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: "#ff6961", marginBottom:10, marginTop:0 }}
                onPress={() => {
                  setModalVisible(false)
                  setQuizStarted(false)
                }}
              >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                  Exit Quiz
                </Text>
              </TouchableOpacity>
              
              {quizQuestions.map((item,index) => (
                <View key={item.question} style={{width:Width-30,}}>
                  <Text style={{alignSelf:'center', fontSize:18}}>{`Question ${index+1}`}</Text>
                  <QuizQuestion question={item} checker={() => setQuestionsCorrect(questionsCorrect+1)}/>
                </View>
              ))}
              <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: (questionsCorrect / quizQuestions.length)>0.8 ? "#2ecc71" : "#E0E0E0" }}
                onPress={() => {
                  setModalVisible(false)
                  setQuizStarted(false)
                  setLearnProgress(id.id, '100')
                  setProgress('100')
                  setQuestionsCorrect(0)
                }}
                disabled={(questionsCorrect / quizQuestions.length)>0.8  ? false : true}
              >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                  Save and Exit
                </Text>
              </TouchableOpacity>
            </ScrollView>
          ) : noQuizError ? (
            <View style={styles.modalView}>
              <Text>{noQuizError}</Text>
              <TouchableOpacity
                style={{ ...styles.modalButton, backgroundColor: "#2980b9" }}
                onPress={() => {
                  setModalVisible(false)
                  setQuizStarted(false)
                }}
              >
                <Text style={{ color: "white", fontFamily: "Raleway-Bold" }}>
                  Exit Quiz
                </Text>
              </TouchableOpacity>
            </View>
          ):(
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
              onPress={() => setModalVisible(false)}
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
  header: {
    marginHorizontal: 15,
    marginBottom: 5,
    fontSize: 22,
    fontFamily: "Raleway-Bold",
  },
  body: {
    margin: 15,
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
  link: {
    marginHorizontal: 15,
    fontFamily: "Raleway-Regular",
    color: "#3498db",
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
  transcriptButton: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTouchable: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default LearnDetailScreen;
