import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { getLearnProgress } from "../components/getLearnDatabase";
import { ProgressBar } from "react-native-paper";

const LearnModuleItem = ({ page, category }) => {
  const navigation = useNavigation();

  const [pressed, setPressed] = useState(false);
  const handlePress = (page) => {
    if (page.youtube != "pending"){
      setPressed(!pressed);
    } else {
      return;
    }
    updateProgress();
  };

  const [progress, setProgress] = useState(null);
  const updateProgress = async () => {
    const learnProgressStorage = await getLearnProgress(page.id);
    setProgress(learnProgressStorage);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      updateProgress();
    });
    return () => unsubscribe();
  }, [navigation]);
  const percentage = parseInt(progress) / 100;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress(page)}
        activeOpacity={0.7}
      >
        <View style={styles.moduleStyle}>
          <FontAwesome
            name={
              !page.video && !page.youtube
                ? "file-text"
                : progress === "100"
                ? "check-circle"
                : "play-circle"
            }
            size={18}
            color={
              progress === "100"
                ? "green"
                : progress === "0"
                ? "gray"
                : "#2980b9"
            }
          />
          <Text
            style={{
              fontFamily: Platform.OS === "android" ? pressed ? "Roboto-Bold" : "Roboto-Regular" : null,
              fontWeight: Platform.OS === "android" ? null : pressed ? "bold" : "normal",
              fontSize: 16,
              // width: width*.85,
              marginHorizontal: 20,
              color: page.youtube != "pending" ? null : "#C0C0C0"
            }}
          >
            {page.title + "  "}
            <Text style={{fontSize:12}}>{page.youtube != "pending" ? null: "(Coming Soon)"}</Text>
          </Text>
        </View>
      </TouchableOpacity>

      {pressed ? (
        <>
          {page.captionText? <Text style={styles.shortText} numberOfLines={5}>
            {page.captionText}
          </Text> : null}
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <ProgressBar
              progress={percentage}
              color="#4f2683"
              style={{ width: 150 }}
            />
            <Text
              style={{
                color: "gray",
                fontSize: 14,
                fontFamily: "Raleway-Regular",
              }}
            >
              {progress}%
            </Text>
            <TouchableOpacity
              disabled={page.youtube === "pending"}
              onPress={() => {
                if (!page.video && !page.youtube) {
                  navigation.replace("LearnText", { id: page, category });
                } else {
                  navigation.replace("LearnDetail", { id: page, category });
                }
              }}
              style={
                page.youtube === "pending"
                  ? { ...styles.button, backgroundColor: "#D0D0D0" }
                  : progress === "0"
                  ? { ...styles.button, backgroundColor: "#2ecc71" }
                  : progress === "100"
                  ? { ...styles.button, backgroundColor: "#FECB2E" }
                  : { ...styles.button, backgroundColor: "#2980b9" }
              }
            >
              <Text style={styles.buttonText}>
                {page.youtube === "pending"
                  ? "Coming Soon"
                  : progress === "0"
                  ? "Start"
                  : progress === "100"
                  ? "Complete"
                  : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  moduleStyle: {
    alignItems: "center",
    margin: 15,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  quiz: {
    height: 50,
    width: 100,
    backgroundColor: "#5FC9F8",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Raleway-Bold",
    color: "white",
  },
  shortText: {
    color: "gray",
    marginHorizontal: 15,
  },
});

export default LearnModuleItem;
