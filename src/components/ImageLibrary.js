import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Image as RNImage
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

const ImageLibrary = ({ page, id }) => {
  const width = useWindowDimensions().width;

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

  const [hidePressed, setHidePressed] = useState(false);

  return (
    //Image library
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
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
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: "white", paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Raleway-Medium",
                  marginVertical: 5,
                }}
              >
                Key Features
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 20,
                }}
                onPress={() => setHidePressed(!hidePressed)}
              >
                <Text style={{ color: "#4f2683" }}>
                  {hidePressed ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            {page.key_features && !hidePressed
              ? page.key_features
                  .filter((tip) => tip.pnp === "Pearl")
                  .map((tip) => (
                    <View
                      style={{
                        flexDirection: "row",
                        marginVertical: 3,
                        alignItems: "center",
                      }}
                      key={tip.text}
                    >
                      <MaterialCommunityIcons
                        name="plus-circle-outline"
                        size={24}
                        color="#2ecc71"
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: 3,
                          fontFamily: "Roboto-Regular",
                          color: "gray",
                          fontSize: 16,
                        }}
                      >
                        {tip.text}
                      </Text>
                    </View>
                  ))
              : null}
            {page.key_features && !hidePressed
              ? page.key_features
                  .filter((tip) => tip.pnp === "Pitfall")
                  .map((tip) => (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginVertical: 2,
                        alignItems: "center",
                      }}
                      key={tip.text}
                    >
                      <MaterialCommunityIcons
                        name="minus-circle-outline"
                        size={24}
                        color="#e74c3c"
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: 3,
                          fontFamily: "Roboto-Regular",
                          color: "gray",
                          fontSize: 16,
                        }}
                      >
                        {tip.text}
                      </Text>
                    </View>
                  ))
              : null}
          </View>
        )}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.header}>{item.title}</Text>
            {item.format === "Image" ? (
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
            <Text style={styles.body}>{item.caption}</Text>
            <Text style={styles.body}>Contributed by {item.contributor}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            {page.references && (
              <View style={{ marginTop: 10 }}>
                <Text style={styles.header}>References</Text>
                {page.references.map((ref) => (
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 15,
                      flexDirection: "row",
                      borderBottomWidth: 0.5,
                      borderColor: "gray",
                      paddingBottom: 5,
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
                    <RNImage
                      source={require("../../assets/ncbi.png")}
                      style={{ height: 40, width: 30, marginRight: 10 }}
                    />
                    <Text
                      style={{
                        fontFamily: "Raleway-Regular",
                        fontSize: 14,
                        flex: 1,
                      }}
                    >
                      {ref.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {page.associated_pages && (
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
            )}
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
    fontFamily: "Raleway-Medium",
  },
  body: {
    marginHorizontal: 15,
    marginTop: 10,
    fontFamily: "Raleway-Light",
  },
  touchable: {
    color: "#2b59a2",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default ImageLibrary;
