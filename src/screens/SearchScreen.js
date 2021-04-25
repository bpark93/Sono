import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { Searchbar, Banner, ActivityIndicator } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import useResults from "../components/useResults";
import SearchResultsList from "../components/SearchResultsList";
import CategoriesList from "../components/CategoriesList";
import { RecentPages } from "../components/RecentPages";
import Constants from "expo-constants";
import firebase from "../components/firebase";
import LibraryBookmarks from "../components/LibraryBookmarks";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

const SearchScreen = () => {
  const navigation = useNavigation();
  const [layout, setLayout] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("pages")
      .doc("layout")
      .get()
      .then(function (doc) {
        setLayout(doc.data());
      })
      .catch(function (error) {
        return;
      });
  }, []);

  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(layout);

  const searchbarRef = useRef(null);
  const scrollRef = useRef(null);

  return layout.length !== 0 ? (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]} ref={scrollRef}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 15,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/sono_logo.png")}
            style={{ height: 45, width: 45 }}
          />
          <Text style={{ fontFamily: "Roboto-Black", fontSize: 36 }}>
            Library
          </Text>
        </View>

        {/* <Text
          style={{
            marginLeft: 15,
            marginVertical: 15,
            fontSize: 18,
            fontFamily: "Raleway-Bold",
          }}
        >
          Find images, videos, and tools
        </Text> */}
        <View style={{ backgroundColor: "white" }}>
          <Searchbar
            ref={searchbarRef}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={(text) => {
              scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
              searchApi(text);
              setTerm(text);
            }}
            icon={() =>
              term ? (
                <FontAwesome name="arrow-left" style={styles.iconStyle} />
              ) : (
                <FontAwesome name="search" style={styles.iconStyle} />
              )
            }
            onIconPress={() => {
              Keyboard.dismiss();
              setTerm("");
            }}
            inputStyle={styles.inputStyle}
            style={styles.barStyle}
            clearIcon={() => (
              <FontAwesome name="remove" style={styles.iconStyle} />
            )}
          />
        </View>

        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {term ? (
          <SearchResultsList results={results} />
        ) : (
          <>
            {/* <LibraryBookmarks layout={layout} /> */}
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                style={{ ...styles.buttonStyle, backgroundColor: "#1e3d59" }}
                onPress={() => navigation.navigate("TutorialList", {listId: "rapidreviews"})}
                activeOpacity={0.6}
              >
                <Image
                  source={{
                    uri:
                      "https://res.cloudinary.com/dwtw3ge2z/image/upload/v1618899537/Misc/ultrasound-machine_cecazk.png",
                  }}
                  style={{
                    width: 40,
                    height: 50,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ ...styles.buttonTextStyle, color: "#f5f0e1" }}>
                  Tutorials
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.buttonStyle, backgroundColor: "#f5f0e1" }}
                onPress={() => navigation.navigate("TutorialList", {listId: "tools"})}
                activeOpacity={0.6}
              >
                <Image
                  source={{
                    uri:
                      "https://res.cloudinary.com/dwtw3ge2z/image/upload/v1618899872/Misc/calculator_hsnz9t.png",
                  }}
                  style={{
                    width: 35,
                    height: 50,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ ...styles.buttonTextStyle, color: "#1e3d59" }}>
                  Tools
                </Text>
              </TouchableOpacity>
            </View>
            <RecentPages layout={layout} />
            <CategoriesList layout={layout} />
          </>
        )}
      </ScrollView>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25,
    flex: 1,
    color: "gray",
    paddingTop: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  barStyle: {
    marginHorizontal: 20,
    marginVertical: 5,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F0F0F0",
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: Constants.statusBarHeight + 15,
  },
  textStyle: {
    fontSize: 18,
    color: "black",
  },
  buttonStyle: {
    overflow: "hidden",
    width: (width - 40) / 2,
    borderRadius: 20,
    marginRight: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
  },
});

export default SearchScreen;
