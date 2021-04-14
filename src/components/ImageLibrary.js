import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Platform,
  TouchableOpacity,
  Image as RNImage,
  Linking,
} from "react-native";
// import ImageModal from "react-native-image-modal";
import { Image } from "react-native-expo-image-cache";
import { Video } from "expo-av";
import LibraryChip from "../components/LibraryChip";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";
import { Snackbar } from "react-native-paper";
import SnapCarousel from "../components/SnapCarousel";

const { width, height } = Dimensions.get("window");

const ImageLibrary = ({ page, id }) => {
  const [viewing, setViewing] = useState([]);
  const handleChipPress = (name) => {
    const alreadyInList = viewing.filter((item) => item === name);
    if (alreadyInList.length === 0) {
      setViewing([name, ...viewing]);
    } else {
      const removed = viewing.filter((item) => item != name);
      setViewing(removed);
    }
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    const viewToggleHandler = () => {
      if (viewing.length === 0) {
        setImages(page.images);
        return;
      } else {
        let temp = [];
        for (let i = 0; i < viewing.length; i++) {
          for (let j = 0; j < page.images.length; j++) {
            if (viewing[i] === page.images[j].option) {
              temp.push(page.images[j]);
            }
          }
        }
        setImages(temp);
      }
    };
    viewToggleHandler();
  }, [viewing, page]);

  const navigation = useNavigation();

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
  }, [bookmarked, page]);

  const [hidePressed, setHidePressed] = useState(true);

  return (
    //Image library
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingVertical: 5,
        }}
      >
        {page.filter_options && (
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              fontSize: 12,
              color: "gray",
            }}
          >
            Filter By:{" "}
          </Text>
        )}
        {page.filter_options &&
          page.filter_options.map((item) => (
            <LibraryChip
              name={item.text}
              handleChipPress={(name) => handleChipPress(name)}
              key={item.text}
            />
          ))}
      </View>
      <FlatList
        style={{ flex: 1, backgroundColor: "white" }}
        maxToRenderPerBatch={5}
        windowSize={5}
        data={images}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() =>
          page.key_features ? (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 15,
                  // height: hidePressed ? page.key_features.length > 2 ? 200 : null : null,
                  overflow: "hidden",
                }}
                onPress={() => setHidePressed(!hidePressed)}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 5,
                  }}
                >
                  Key Features
                </Text>
                {page.key_features
                  ? hidePressed
                    ? page.key_features
                        .slice(0, 3)
                        // .filter((tip) => tip.pnp === "Pearl")
                        .map((tip) => (
                          <View
                            style={{
                              flexDirection: "row",
                              marginVertical: 3,
                              // alignItems: "center",
                            }}
                            key={tip.text}
                          >
                            <MaterialCommunityIcons
                              name={
                                tip.pnp === "Pearl"
                                  ? "plus-circle"
                                  : "minus-circle"
                              }
                              size={24}
                              color={
                                tip.pnp === "Pearl" ? "#2ecc71" : "#e74c3c"
                              }
                            />
                            <Text
                              style={{
                                flex: 1,
                                marginLeft: 6,
                                // fontFamily: "Roboto-Regular",
                                // color: "gray",
                                fontSize: 14,
                                lineHeight: 17,
                              }}
                            >
                              {tip.text}
                            </Text>
                          </View>
                        ))
                    : page.key_features.map((tip) => (
                        <View
                          style={{
                            flexDirection: "row",
                            marginVertical: 3,
                          }}
                          key={tip.text}
                        >
                          <MaterialCommunityIcons
                            name={
                              tip.pnp === "Pearl"
                                ? "plus-circle"
                                : "minus-circle"
                            }
                            size={24}
                            color={tip.pnp === "Pearl" ? "#2ecc71" : "#e74c3c"}
                          />
                          <Text
                            style={{
                              flex: 1,
                              marginLeft: 6,
                              fontSize: 14,
                              lineHeight: 17,
                            }}
                          >
                            {tip.text}
                          </Text>
                        </View>
                      ))
                  : null}
                {/* {page.key_features
                ? page.key_features
                    .filter((tip) => tip.pnp === "Pitfall")
                    .map((tip) => (
                      <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "space-between",
                          marginVertical: 2,
                          // alignItems: "center",
                        }}
                        key={tip.text}
                      >
                        <MaterialCommunityIcons
                          name="minus-circle"
                          size={24}
                          color="#e74c3c"
                        />
                        <Text
                          style={{
                            flex: 1,
                            marginLeft: 6,
                            // fontFamily: "Roboto-Regular",
                            // color: "gray",
                            fontSize: 14,
                          }}
                        >
                          {tip.text}
                        </Text>
                      </View>
                    ))
                : null} */}
              </TouchableOpacity>
              {page.key_features.length > 3 ? <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 10,
                  flexDirection: "row",
                }}
                activeOpacity={0.5}
                onPress={() => setHidePressed(!hidePressed)}
              >
                <Text
                  style={{
                    color: "#4f2683",
                    fontWeight: "bold",
                    fontFamily:
                      Platform.OS === "android" ? "Roboto-Regular" : null,
                  }}
                >
                  {hidePressed ? "Show More" : "Show Less"}
                </Text>
                <MaterialCommunityIcons
                  name={hidePressed ? "chevron-down" : "chevron-up"}
                  size={16}
                  color="#4f2683"
                />
              </TouchableOpacity>:null}
              <TouchableOpacity
                onPress={async () =>
                  await Linking.openURL(
                    `mailto:sono.app.contact@gmail.com?subject=Issue with "${page.title}" - ${page.category}&body=Describe the issue: \n\nTo reproduce (Steps to reproduce the behavior): \n\nExpected Behavior: \n\nScreenshots: \n\nSmartphone (Device, OS + version): \n\nAdditional Context: `
                  )
                }
                style={{ paddingHorizontal: 15, alignSelf: "center", alignItems:'center', flexDirection:'row', justifyContent:'center'}}
              >
                <MaterialCommunityIcons name="alert-circle-outline" size={20} color="#A55858" />
                <Text style={{ color: "#A55858", marginLeft:5 }}>Report an Issue</Text>
              </TouchableOpacity>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <View style={{ marginVertical: 15 }}>
            <Text style={styles.header}>{item.title}</Text>
            {Array.isArray(item.url) ? (
              // <ScrollView
              //   horizontal={true}
              //   snapToInterval={width}
              //   decelerationRate="fast"
              //   showsHorizontalScrollIndicator={true}
              //   pagingEnabled={true}
              // >
              //   {item.url.map((imageArrayItem) => (
              //     <View key={imageArrayItem.url}>
              //       {imageArrayItem.format === "Image" ? (
              //         <Image
              //           resizeMode="contain"
              //           imageBackgroundColor="#000000"
              //           style={{
              //             width: width,
              //             height: width * 0.75,
              //           }}
              //           uri={imageArrayItem.url}
              //         />
              //       ) : (
              //         <Video
              //           source={{ uri: imageArrayItem.url }}
              //           rate={1.0}
              //           volume={1.0}
              //           useNativeControls={false}
              //           shouldPlay={true}
              //           isLooping
              //           resizeMode="contain"
              //           style={{
              //             width: width,
              //             height: width * 0.75,
              //           }}
              //         />
              //       )}
              //     </View>
              //   ))}
              // </ScrollView>
              <SnapCarousel images={item.url} />
            ) : item.format === "Image" ? (
              <Image
                resizeMode="contain"
                imageBackgroundColor="#000000"
                style={{
                  width: width,
                  height: width * 0.75,
                }}
                uri={item.url}
              />
            ) : (
              <Video
                source={{ uri: item.url }}
                rate={1.0}
                volume={1.0}
                useNativeControls={false}
                shouldPlay={true}
                isLooping
                resizeMode="contain"
                style={{
                  width: width,
                  height: width * 0.75,
                }}
              />
            )}
            {item.caption ? (
              <Text style={styles.body}>{item.caption}</Text>
            ) : null}
            {item.contributor ? (
              <Text style={styles.body}>Contributed by {item.contributor}</Text>
            ) : null}
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            {page.references ? (
              <View style={{ marginTop: 10 }}>
                <Text style={styles.header}>References</Text>
                {page.references.map((ref) => (
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 15,
                      flexDirection: "row",
                      borderBottomWidth: 0.5,
                      borderColor: "gray",
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
                    <Text
                      style={{
                        fontSize: 14,
                        flex: 1,
                      }}
                    >
                      {ref.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
            {page.associated_pages ? (
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.header}>Associated Pages</Text>
                {page.associated_pages.map((page) => (
                  <TouchableOpacity
                    key={page.id}
                    onPress={() =>
                      navigation.push("SearchDetail", { id: page.id })
                    }
                  >
                    <Text style={styles.touchable}>{page.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>
        )}
      />

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

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "bold",
  },
  body: {
    marginHorizontal: 15,
    marginTop: 10,
    color: "gray",
  },
  touchable: {
    color: "#2b59a2",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default ImageLibrary;
