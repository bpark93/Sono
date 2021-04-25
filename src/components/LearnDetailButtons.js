import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";

const LearnDetailButtons = ({
  progress,
  pageInfo,
  snackToggle,
  modalToggle,
  quizNotAvailable,
  transcriptToggle,
  noteToggle,
  youtubeToggle,
}) => {
  const [savePressed, setSavePressed] = useState(false);
  useEffect(() => {
    async function bookmarkChecker() {
      const temp = await getBookmark("learn");
      for (let i in temp) {
        if (temp[i] === pageInfo.id) {
          setSavePressed(true);
        }
      }
    }
    bookmarkChecker();
  }, []);

  const [notePressed, setNotePressed] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
      }}
    >
      {/* Save/Bookmark Button */}
      {savePressed ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={async () => {
            await removeBookmark(pageInfo.id, "learn");
            setSavePressed(!savePressed);
          }}
        >
          <MaterialCommunityIcons name="bookmark" size={30} color="#f1c40f" />
          <Text style={styles.buttonText}>Saved</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.touchable}
          onPress={async () => {
            await setBookmark(pageInfo.id, "learn");
            setSavePressed(!savePressed);
            snackToggle();
          }}
        >
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={30}
            color="gray"
          />
          <Text style={styles.buttonText}>Bookmark</Text>
        </TouchableOpacity>
      )}

      {/* Transcript Button */}
      {transcriptToggle? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            transcriptToggle();
          }}
        >
          <MaterialCommunityIcons
            name="file-document-box-outline"
            size={30}
            color="gray"
          />
          <Text style={styles.buttonText}>Transcript</Text>
        </TouchableOpacity>
        ) : null
      }

      {/* Note Button */}
      {noteToggle? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            if(notePressed){
              setNotePressed(false);
              noteToggle(false);
            }
            else {
              setNotePressed(true);
              noteToggle(true);
            }
          }}
        >
          <MaterialCommunityIcons
            name={notePressed?"close-octagon-outline":"comment-plus-outline"}
            size={30}
            color={notePressed?"red":"gray"}
          />
          <Text style={styles.buttonText}>{notePressed? "Close" : "Notes"}</Text>
        </TouchableOpacity>
        ) : null
      }

      {/* Quiz Button */}
      {quizNotAvailable ? null : progress === "100" ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            modalToggle();
            if (pageInfo.video || pageInfo.youtube){
              youtubeToggle();
            }
          }}
        >
          <MaterialCommunityIcons name="trophy" size={30} color="#f1c40f" />
          <Text style={{ ...styles.buttonText, color: "#f1c40f" }}>
            Quiz Complete!
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            modalToggle();
            if (pageInfo.video || pageInfo.youtube){
              youtubeToggle();
            }
          }}
        >
          <MaterialCommunityIcons
            name="trophy-outline"
            size={30}
            color="gray"
          />
          <Text style={styles.buttonText}>Take the Quiz</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "gray",
    fontSize: 12,
  },
  touchable: {
    alignItems: "center",
    width: 100,
  },
});

export default LearnDetailButtons;
