import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import ShortSummary from "../components/ShortSummary";
import { database } from "../../database";
import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RapidReviews = ({ page }) => {
  const navigation = useNavigation();
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setPlaying(false);
    });
    return () => unsubscribe();
  }, [navigation]);

  // Screen orientation
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
  const handleFullScreenYoutube = async (status) => {
    if (status === true) {
      try {
        landscape();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } catch (error) {
        setErrorMessage("Something went wrong. Refresh the page!");
      }
    } else if (status === false) {
      try {
        portrait();
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      } catch (error) {
        setErrorMessage("Something went wrong. Refresh the page!");
      }
    }
  };

  const handleOnPress = (id) => {
    const response = database.filter((item) => item.id === id);
    const pushAction = StackActions.push("SearchDetail", { id: response[0] });
    navigation.dispatch(pushAction);
  };

  // Buttons
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    navigation.setOptions({ title: page.title })
  },[])

  return (
    <>
      {/* Youtube Video embedded */}
      {page.video ? (
        <View
          style={{
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <YoutubePlayer
            ref={playerRef}
            height={OrientationMode.height}
            width={OrientationMode.width}
            videoId={page.video}
            play={playing}
            volume={50}
            playbackRate={1}
            onFullScreenChange={(status) => handleFullScreenYoutube(status)}
            playerParams={{
              cc_lang_pref: "us",
              showClosedCaptions: false,
            }}
          />
        </View>
      ) : null}

      {/* Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
          backgroundColor: "white",
          elevation:1
          // Need to add for iOS
        }}
      >
        <TouchableOpacity style={{ alignItems: "center", flex: 1 }}>
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={30}
            color="gray"
          />
          <Text style={{ fontSize: 11, color: "gray", marginBottom:5 }}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flex: 1,
            borderBottomWidth: activeIndex === 1 ? 2 : 0,
            borderBottomColor:"#4f2683"
          }}
          onPress={() => setActiveIndex(1)}
        >
          <MaterialCommunityIcons
            name="table"
            size={30}
            color={activeIndex === 1 ? "#4f2683" : "gray"}
          />
          <Text
            style={{
              fontSize: 11,
              color: activeIndex === 1 ? "#4f2683" : "gray",
              marginBottom:5
            }}
          >
            Orientation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flex: 1,
            borderBottomWidth: activeIndex === 2 ? 2 : 0,
            borderBottomColor:"#4f2683"
          }}
          onPress={() => setActiveIndex(2)}
        >
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={30}
            color={activeIndex === 2 ? "#4f2683" : "gray"}
          />
          <Text
            style={{
              fontSize: 11,
              color: activeIndex === 2 ? "#4f2683" : "gray",
              marginBottom:5
            }}
          >
            Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flex: 1,
            borderBottomWidth: activeIndex === 3 ? 2 : 0,
            borderBottomColor:"#4f2683"
          }}
          onPress={() => setActiveIndex(3)}
        >
          <MaterialCommunityIcons
            name="format-list-checkbox"
            size={30}
            color={activeIndex === 3 ? "#4f2683" : "gray"}
          />
          <Text
            style={{
              fontSize: 11,
              color: activeIndex === 3 ? "#4f2683" : "gray",
              marginBottom:5
            }}
          >
            Materials
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {/* Materials */}
        {activeIndex === 3 ? (
          page.required_materials ? (
            <View>
              <Text style={styles.header}>Required Materials</Text>
              {page.required_materials.map((item) => (
                <MaterialsItem material={item} key={item} />
              ))}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>
                No required materials for this study.
              </Text>
            </View>
          )
        ) : null}

        {/* Table */}
        {activeIndex === 1 && page.orientation ? (
          <View>
            <Text style={styles.header}>Quick Summary</Text>
            <ShortSummary data={page.orientation} />
          </View>
        ) : null}

        {/* Text Content */}
        {activeIndex === 2 && page.details
          ? page.details.map((item, index) => (
              <View key={index}>
                {item.header ? (
                  <Text style={styles.header}>{item.header}</Text>
                ) : null}
                {item.image ? (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: Width,
                      height: 300,
                      resizeMode: "contain",
                      backgroundColor: "#ffffff",
                    }}
                  />
                ) : null}
                {item.text ? (
                  <Text style={styles.body}>
                    {item.text}
                  </Text>
                ):null}
              </View>
            ))
          : null}

        {/* Associated Pages */}
        {activeIndex === 2 && page.associated_pages ? (
          <View style={{ marginLeft: 15, marginTop: 15 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              Associated Pages
            </Text>
            {page.associated_pages.map((index) => (
              <TouchableOpacity
                key={index.id}
                onPress={() => handleOnPress(index.id)}
              >
                <Text style={styles.touchable}>{index.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </>
  );
};

const MaterialsItem = ({ material }) => {

  // material.notes, material.level

  const [checked, setChecked] = useState(false);
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20 }} key={material}>
      <View
        style={{
          borderWidth: Platform.OS === "ios" ? 1 : 0, // No box in iOS
          borderRadius: 10,
          marginBottom: 5,
          borderColor: "#bdc3c7",
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
          color="#4f2683"
        />
      </View>
      <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
        <Text
          style={{
            ...styles.body,
            textDecorationLine: checked ? "line-through" : "none",
            width: 200,
          }}
        >
          {material.text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    color: "#2b59a2",
    fontSize: 14,
  },
  header: {
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: "Raleway-Medium",
  },
  body: {
    marginHorizontal: 15,
    marginVertical: 15,
    fontFamily: "Raleway-Light",
  },
});

export default RapidReviews;
