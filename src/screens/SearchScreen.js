import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  ScrollView,
  AsyncStorage,
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

const SearchScreen = () => {
  
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
        console.log("Error getting List", error);
      });
  }, []);

  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(layout);
  
  const searchbarRef = useRef(null);

  const [bannerVisible, setBannerVisible] = useState(false);
  const dismissForever = async () => {
    await AsyncStorage.setItem("search_screen_banner_dismissed", "true");
  };
  useEffect(() => {
    async function getBannerInfo() {
      // AsyncStorage.removeItem("search_screen_banner_dismissed")
      const bannerInfo = await AsyncStorage.getItem(
        "search_screen_banner_dismissed"
      );
      bannerInfo === "true" ? setBannerVisible(false) : setBannerVisible(true);
    }
    getBannerInfo();
  }, []);

  return layout.length !== 0 ? (
    <View style={styles.container}>
      <Searchbar
        ref={searchbarRef}
        // autoFocus
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(text) => {
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
          // searchbarRef.current.blur()
        }}
        inputStyle={styles.inputStyle}
        style={styles.barStyle}
        clearIcon={() => <FontAwesome name="remove" style={styles.iconStyle} />}
      />
      {/* <Banner
        visible={bannerVisible}
        icon="information"
        actions={[
          {
            label: "Got it",
            onPress: () => {
              setBannerVisible(false);
              dismissForever();
            },
          },
        ]}
      >
        <Text>{`Welcome to WesternSono! Try searching or navigating to the following pages: \n\nAorta Image Aquisition\nUS-Guided Peripheral IV\nReduced LV Function`}</Text>
      </Banner> */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {term ? (
          <SearchResultsList results={results} />
        ) : (
          <>
            <LibraryBookmarks layout={layout} />
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
    height: 60,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  textStyle: {
    fontSize: 18,
    color: "black",
  },
});

export default SearchScreen;
