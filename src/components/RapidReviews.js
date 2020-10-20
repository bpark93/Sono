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
  Image as RNImage, Alert
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
import {Image} from "react-native-expo-image-cache";

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Bookmarks
  const [bookmarked, setBookmarked] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const [videoShowing, setVideoShowing] = useState(true)

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
      {page.video && videoShowing ? (
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

      {/* Hide Video Button */}
      {/* {activeIndex === 1 && ( */}
          <View style={{alignItems:'center', justifyContent:'center', marginVertical:5}}>
            <TouchableOpacity style={{flexDirection:'row', padding:5, borderRadius:15, backgroundColor:'#F0F0F0'}} onPress={() => setVideoShowing(!videoShowing)}>
              <MaterialCommunityIcons name={videoShowing ? "chevron-up" : "chevron-down"} size={24} color="black" />
              <Text style={{fontSize:16}}>{videoShowing ? "Hide Video" : "Show Video"}</Text>
            </TouchableOpacity>
          </View>
        {/* )} */}

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
                marginVertical:30
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
            <ShortSummary data={page.orientation} />
          </View>
        ) : null}

        {/* Associated Pages */}
        {activeIndex === 0 && page.associated_pages ? (
          <View style={{marginBottom:10}}>
            <Text style={styles.header}>
              Associated Pages
            </Text>
            {page.associated_pages.map((page) => (
              <TouchableOpacity
                key={page.id}
                onPress={() => navigation.push("SearchDetail", {id:page.id})}
              >
                <Text style={styles.touchable}>{page.title}</Text>
              </TouchableOpacity>
            ))}
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
                    resizeMode="contain"
                    uri={item.image}
                    style={{
                      width: Width*0.8,
                      height: Width*.6,
                      alignSelf:'center',
                      backgroundColor: "#ffffff",
                    }}
                  />
                ) : null}
                {item.text ? (
                  <Text style={styles.textContent}>{item.text}</Text>
                ) : null}
              </View>
            ))
          : null}

        {/* References */}
        {activeIndex === 3 && page.references
          ? page.references.map((ref, index) => (
              <TouchableOpacity
                style={{ marginHorizontal: 15, marginTop: 20, flexDirection:'row', borderBottomWidth:0.5, borderColor:'gray', padding:8}}
                key={ref.text}
                onPress={async () => {
                  const supported = await Linking.canOpenURL(ref.pubmed)
                  if (supported){
                    await Linking.openURL(ref.pubmed)
                  } else {
                    Alert.alert("No link exists.")
                  }
                }}
              >
                {ref.pubmed ? (
                  <RNImage source={require('../../assets/ncbi.png')} style={{height:40, width:30, marginRight:10}}/>
                ):(
                  <View style={{width:30, height:40, marginRight:10}}>
                    <MaterialCommunityIcons name="link" size={32} color="black" />
                  </View> 
                )}
                <Text style={{fontSize:14, flex:1}}>{ref.text}</Text>
              </TouchableOpacity>
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
            width:Width-80,
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
    fontSize: 18,
    marginHorizontal:15,
    marginBottom:10
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color:'gray'
  },
  textContent:{
    fontSize:16, 
    fontFamily:'Lora-Regular',
    color:'gray',
    marginHorizontal:15,
    marginVertical:10
  }
});

export default RapidReviews;
