import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Linking,
  Image as RNImage,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import ShortSummary from "../components/ShortSummary";
import { database } from "../../database";
import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox, Snackbar } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import TabButtons from "./TabButtons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";
import { Image } from "react-native-expo-image-cache";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

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

  // Buttons
  const [activeIndex, setActiveIndex] = useState("Summary");

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

  const scrollviewRef = useRef(null)

  return (
    <View style={{ flex: 1 }}>
      {/* Youtube Video embedded */}
      {page.video != "null" ? (
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
      ) : (
        <View
          style={{
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            height: OrientationMode.height,
            width: OrientationMode.width,
          }}
        >
          <Text style={{ color: "white" }}>
            This video is currently in production.
          </Text>
        </View>
      )}

      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        stickyHeaderIndices={[0]}
        ref={scrollviewRef}
      >
        {/* Buttons */}
        <TabButtons
          scrollviewRef={scrollviewRef}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          settings={[
            {
              name: "Summary",
              icon: "table",
            },
            {
              name: "Steps",
              icon: "format-list-numbered",
            },
            {
              name: "Pearls & Pitfalls",
              icon: "thumbs-up-down",
            },
            {
              name: "Links",
              icon: "link-variant",
            },
          ]}
        />

        {/* Materials */}
        {activeIndex === "Steps" ? (
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
            <View>
              <Text style={styles.header}>Required Materials</Text>
              <MaterialsItem
                material={{
                  level: "Required",
                  notes: "",
                  text: "Ultrasound Machine, Probes",
                }}
              />
              <MaterialsItem
                material={{
                  level: "Required",
                  notes: "",
                  text: "Ultrasound Gel",
                }}
              />
            </View>
          )
        ) : null}

        {/* Table */}
        {activeIndex === "Summary" && page.orientation ? (
          <View>
            <ShortSummary data={page.orientation} />
          </View>
        ) : null}

        {/* Associated Pages */}
        {activeIndex === "Links" && page.associated_pages ? (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.header}>Associated Pages</Text>
            {page.associated_pages.map((page) => (
              <TouchableOpacity
                key={page.id}
                onPress={() => navigation.push("SearchDetail", { id: page.id })}
                style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginBottom:10}}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: page.type === "Tools" ? "#2a4d69" : "#3b5998",
                    borderRadius: 10,
                    padding: 5,
                    marginVertical: 2.5,
                  }}
                >
                  <FontAwesome5
                    name={page.type === "Tools" ? "tools":"images"}
                    size={14}
                    style={{ color: "white" }}
                  />
                  <Text style={{ marginLeft: 3, color: "white", fontSize: 12 }}>
                    {page.type === "Tools" ? "Tools" : "Images"}
                  </Text>
                </View>
                <Text style={styles.touchable}>{page.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {/* Pearls and Pitfalls */}
        {activeIndex === "Pearls & Pitfalls" && page.pnp ? (
          <View>
            <Text style={styles.header}>Pearls</Text>
            {page.pnp
              .filter((tip) => tip.type === "Pearl")
              .map((tip) => (
                <View key={tip.text} style={{marginHorizontal:15,flexDirection:'row', alignItems:'flex-start', marginBottom:10}}>
                  <MaterialCommunityIcons name="plus-circle" size={24} color="#2ecc71" />
                  <Text style={{marginLeft:10, flex:1}}>{tip.text}</Text>
                </View>
              ))}
            <Text style={styles.header}>Pitfalls</Text>
            {page.pnp
              .filter((tip) => tip.type === "Pitfall")
              .map((tip) => (
                <View key={tip.text} style={{marginHorizontal:15,flexDirection:'row', alignItems:'center', marginBottom:10}}>
                  <MaterialCommunityIcons name="minus-circle" size={24} color="#e74c3c" />
                  <Text style={{marginLeft:10, flex:1}}>{tip.text}</Text>
                </View>
              ))}
          </View>
        ) : null}

        {/* Steps */}
        {activeIndex === "Steps" && page.steps ? (
          <View>
            <Text style={styles.header}>Steps</Text>
            {page.steps.map((item, index) => (
              <StepItem item={item} index={index} key={item.text} />
            ))}
          </View>
        ) : null}

        {/* References */}
        {activeIndex === "Links" && page.references
          ? 
          <View>
            <Text style={styles.header}>References</Text>
          {page.references.map((ref, index) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: 15,
                  flexDirection: "row",
                  borderBottomWidth: 0.5,
                  borderColor: "#E0E0E0",
                  padding: 8,
                }}
                key={ref.text}
                onPress={async () => {
                  const supported = await Linking.canOpenURL(ref.pubmed);
                  if (supported) {
                    await Linking.openURL(ref.pubmed);
                  } else {
                    Alert.alert("No link exists.");
                  }
                }}
                activeOpacity={0.8}
              >
                {ref.pubmed ? (
                  <RNImage
                    source={require("../../assets/ncbi.png")}
                    style={{ height: 40, width: 30, marginRight: 10 }}
                  />
                ) : (
                  <View style={{ width: 30, height: 40, marginRight: 10 }}>
                    <MaterialCommunityIcons
                      name="link"
                      size={32}
                      color="black"
                    />
                  </View>
                )}
                <Text style={{ fontSize: 14, flex: 1}}>{ref.text}</Text>
              </TouchableOpacity>
            ))}</View>
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
            width: Width - 80,
            textDecorationLine: checked ? "line-through" : "none",
          }}
        >
          
          {material.text} 
          {optional && (
            <Text
              style={{
                fontWeight: "normal",
                color: "gray",
                fontSize: 12,
              }}
            >
              {` (Optional) `}
            </Text>
          )}
          {material.notes && (
            <Text
              style={{
                color: "gray",
                fontSize:12,
              }}
            >{` - ${material.notes}`}</Text>
          )}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const StepItem = ({ item, index }) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5,
        marginHorizontal:15,
        marginVertical:10,
        width: Width,
      }}
      activeOpacity={0.9}
      onPress={() => setChecked(!checked)}
    >
      <Text
        style={{
          fontSize: 24,
          width: Width * 0.1,
          textDecorationLine: checked ? "line-through" : "none",
        }}
      >
        {index + 1}.{" "}
      </Text>
      <View style={{ width: Width * 0.8 }}>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: checked ? "line-through" : "none",
            color: "gray",
            marginBottom: item.image ? 10 : 0,
          }}
        >
          {item.text}
        </Text>
        {item.image ? (
          <Image
            resizeMode="contain"
            uri={item.image}
            style={{
              width: Width * 0.8,
              height: Width * 0.6,
              alignSelf: "center",
              // backgroundColor: "#ffffff",
              opacity: checked ? 0.5 : 1,
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    color: "#2b59a2",
    fontSize: 18,
    marginHorizontal: 10,
    // marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  body: {
    marginHorizontal: 15,
    marginVertical: 10,
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "gray",
  },
  textContent: {
    fontSize: 14,
    // fontFamily:'Lora-Regular',
    color: "gray",
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default RapidReviews;
