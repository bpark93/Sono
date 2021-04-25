import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import CasesCard from "./CasesCard";
import Carousel, { Pagination } from "react-native-snap-carousel";
import firebase from "../components/firebase";

const Cases = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("cases")
      .doc("layout")
      .get()
      .then(function (doc) {
        setResults(doc.data().cases.reverse().slice(0,10));
        setLoading(false);
      })
      .catch(function (error) {
        setErrorMessage("There was a problem getting the cases. Please restart the app.", error);
      });
  }, []);

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.header}>Cases</Text>
        {!loading && (
          <TouchableOpacity
            onPress={() => navigation.navigate("CasesList", { list: results })}
            activeOpacity={0.8}
            style={styles.next}
          >
            <Text style={{ fontWeight: "bold", padding: 10, }}>
              See All Cases
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {!loading ? (
        <View>
          <Carousel
            data={results}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CasesDetail", { id: item })}
                activeOpacity={0.8}
              >
                <CasesCard item={item} />
              </TouchableOpacity>
            )}
            sliderWidth={width}
            itemWidth={width * 0.85}
            removeClippedSubviews={false}
          />
        </View>
      ) : errorMessage ? (
        <View style={{...styles.container, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:16}}>{errorMessage}</Text>
        </View>
      ) : (
        <ContentLoader
          speed={1.2}
          width={width * 0.75}
          height={250}
          viewBox={`0 0 ${width * 0.75} 250`}
          backgroundColor="#f5f6f7"
          foregroundColor="#eeeeee"
          style={{ alignSelf: "center", marginTop: 15 }}
        >
          <Rect x="0" y="0" rx="20" ry="20" width={width * 0.7} height="150" />
          <Circle cx="30" cy="175" r="15" />
          <Rect x="55" y="168" rx="0" ry="0" width={width * 0.5} height="15" />
          <Rect x="15" y="195" rx="0" ry="0" width={width * 0.6} height="10" />
          <Rect x="15" y="210" rx="0" ry="0" width={width * 0.6} height="10" />
          <Rect x="15" y="225" rx="0" ry="0" width={width * 0.6} height="10" />
        </ContentLoader>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  header: {
    fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 15,
    marginRight:5,
    paddingVertical:5,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  next: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
});

export default Cases;
