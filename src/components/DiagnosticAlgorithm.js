import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image as RNImage,
  Linking,
} from "react-native";
import { TextInput, HelperText, Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TabButtons from "./TabButtons";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";
import { Image } from "react-native-expo-image-cache";
import HTML from "react-native-render-html";

const { width } = Dimensions.get("window");

const dummyData = {
    nodes:[
        {
            id:0,
            question: "Is the patient stable?",
            answers:[
                {
                    text:"Unstable",
                    id:1                    
                },
                {
                    text:"Stable",
                    id:2
                }
            ]
        },
        {
            id:1,
            question:"More likely etiology?",
            answers:"Answer 1"
        },
        {
            id:2,
            question:"What best fits the patient profile?",
            answers:"Answer 2"
        }
    ]
}

const DiagnosticAlgorithm = ({ page, id }) => {
  const navigation = useNavigation();

  const [bookmarked, setBookmarked] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  useEffect(() => {
    async function bookmarkChecker() {
      const temp = await getBookmark("lib");
      for (let i in temp) {
        if (temp[i] === id) {
          setBookmarked(true);
        }
      }
    }
    bookmarkChecker();
  }, [page]);

  useEffect(() => {
    navigation.setOptions({
      title: page.title,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (!bookmarked) {
              setBookmarked(true);
              setBookmark(id, "lib");
              setSnackVisible(true);
            } else {
              setBookmarked(false);
              removeBookmark(id, "lib");
            }
          }}
        >
          <MaterialCommunityIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={28}
            color={bookmarked ? "gold" : "black"}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [bookmarked, page]);

  

  return (
    <View>

    </View>
  );
};

const Node = (info) => {
    return (
        <View>
            <View>
                <Text>{info.question}</Text>
            </View>
            {info.answers.map(answer => (
                <View key={answer.id}>
                    <Text>{answer.text}</Text>
                </View>
            ))}
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  
});

export default DiagnosticAlgorithm;
