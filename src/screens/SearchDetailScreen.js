import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import RapidReviews from "../components/RapidReviews";
import ImageLibrary from "../components/ImageLibrary";
import ReferenceDocument from "../components/ReferenceDocument"
import { setList } from "../components/RecentPages";
import firebase from "../components/firebase";
import {ActivityIndicator} from 'react-native-paper'

const SearchDetailScreen = ({ route }) => {
  const { id } = route.params;

  useEffect(() => {
    async function setRecent() {
      await setList(id);
    }
    setRecent();
  }, []);

  const [pageInfo, setPageInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("pages")
      .doc("" + id)
      .get()
      .then(function (doc) {
        setPageInfo(doc.data());
      })
      .catch(function (error) {
        setErrorMessage(
          "There was an error retrieving page data. Please try again!"
        );
      });
  }, []);

  return (
      pageInfo.length !== 0 ? ( 
        // Rapid Reviews
        pageInfo.type === "rapidreview" ? (
          <RapidReviews page={pageInfo} id={id} />
        ) : pageInfo.type === "image" ? (
          //Image library
          <ImageLibrary page={pageInfo} id={id}/>
        ) : (
          <ReferenceDocument page={pageInfo} id={id}/>
        )
      ) : (
        <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size="large" />
          <Text style={{marginTop:20, color:'gray'}}>Loading Page...</Text>
        </View>
      )
  );
};

export default SearchDetailScreen;
