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
import { Checkbox, Snackbar } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TabButtons from "./TabButtons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";

const RapidReviews = ({ page, id }) => {
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
  const [activeIndex, setActiveIndex] = useState(0);

  // Bookmarks
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
  }, []);

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
  }, [bookmarked]);

  return (
    <View style={{ flex: 1 }}>
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
      <TabButtons
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        settings={[
          {
            name: "Orientation",
            icon: "table",
          },
          {
            name: "Details",
            icon: "clipboard-text-outline",
          },
          {
            name: "Materials",
            icon: "format-list-checkbox",
          },
          {
            name: "References",
            icon: "book-open-outline",
          },
        ]}
      />

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {/* Materials */}
        {activeIndex === 2 ? (
          page.required_materials ? (
            <View>
              <Text style={styles.header}>Required Materials</Text>
              {page.required_materials
                .filter((item) => item.level === "Required")
                .map((item) => (
                  <MaterialsItem material={item} key={item.text} />
                ))}
              {page.required_materials
                .filter((item) => item.level === "Optional")
                .map((item) => (
                  <MaterialsItem
                    material={item}
                    key={item.text}
                    optional={true}
                  />
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
        {activeIndex === 0 && page.orientation ? (
          <View>
            <Text style={styles.header}>Quick Summary</Text>
            <ShortSummary data={page.orientation} />
          </View>
        ) : null}

        {/* Text Content */}
        {activeIndex === 1 && page.details
          ? page.details.map((item, index) => (
              <View key={index}>
                {item.header ? (
                  <Text style={styles.header}>{item.header}</Text>
                ) : null}
                {item.image ? (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: Width*0.9,
                      height: Width*.675,
                      alignSelf:'center',
                      resizeMode: "contain",
                      backgroundColor: "#ffffff",
                    }}
                  />
                ) : null}
                {item.text ? (
                  <Text style={styles.body}>{item.text}</Text>
                ) : null}
              </View>
            ))
          : null}

        {/* Associated Pages */}
        {activeIndex === 1 && page.associated_pages ? (
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

        {/* References */}
        {activeIndex === 3 && page.references
          ? page.references.map((ref) => (
              <View
                style={{ marginHorizontal: 15, marginTop: 15 }}
                key={ref.text}
              >
                <Text>{ref.text}</Text>
              </View>
            ))
          : null}
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
        "{page.title}" added to Bookmarks
      </Snackbar>
    </View>
  );
};

const MaterialsItem = ({ material, optional }) => {
  // material.notes, material.level

  const [checked, setChecked] = useState(false);
  return (
    <View
      style={{ flexDirection: "row", marginHorizontal: 20 }}
      key={material.text}
    >
      <Checkbox.Android
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
        color="#4f2683"
      />
      <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
        <Text
          style={{
            ...styles.body,
            fontWeight: "bold",
            textDecorationLine: checked ? "line-through" : "none",
          }}
        >
          {optional && (
            <Text
              style={{
                fontWeight: "normal",
                fontFamily: "Raleway-Regular",
                color: "gray",
                fontSize: 10,
              }}
            >
              {`(OPTIONAL) `}
            </Text>
          )}
          {material.text}
          <Text
            style={{
              fontWeight: "normal",
              fontFamily: "Raleway-Regular",
              color: "gray",
            }}
          >{` - ${material.notes}`}</Text>
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
    marginVertical: 10,
    fontFamily: "Raleway-Regular",
  },
});

export default RapidReviews;
