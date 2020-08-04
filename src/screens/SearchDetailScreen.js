import React, { useEffect, useState } from "react";
import RapidReviews from "../components/RapidReviews";
import ImageLibrary from "../components/ImageLibrary";
import ResourceTool from '../components/ResourceTool'
import { setList } from "../components/RecentPages";
import firebase from "../components/firebase";

const SearchDetailScreen = ({ route }) => {
  const { id } = route.params;

  useEffect(() => {
    async function setRecent() {
      await setList(id.id);
    }
    setRecent();
  }, []);

  if (id.type === "resource") {
    const [pageInfo, setPageInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
      firebase
        .firestore()
        .collection("pages")
        .doc("" + id.id)
        .get()
        .then(function (doc) {
          setPageInfo(doc.data().content);
        })
        .catch(function (error) {
          setErrorMessage("This page is not available yet. Stay tuned for updates!");
        });
    }, []);

    return (
      <ResourceTool pageInfo={pageInfo} errorMessage={errorMessage}/>
    );
  }

  return (
    // Rapid Reviews
    id.type === "rapidreview" ? (
      <RapidReviews page={id} />
    ) : (
      //Image library
      <ImageLibrary page={id} />
    )
  );
};

export default SearchDetailScreen;
