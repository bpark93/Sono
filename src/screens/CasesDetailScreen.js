import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Linking
} from "react-native";
import { Card, ActivityIndicator } from "react-native-paper";
import HTML from "react-native-render-html";
import { FontAwesome5 } from "@expo/vector-icons";
import SnapCarousel from "../components/SnapCarousel";
import { Image } from "react-native-expo-image-cache";
import firebase from "../components/firebase";
import QuizQuestion from '../components/QuizQuestion'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const CasesDetailScreen = ({ route }) => {
  const { id } = route.params;

  const [results, setResults] = useState(null);
  const [answerToggle, setAnswerToggle] = useState(false);

  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    firebase
      .firestore()
      .collection("cases")
      .doc("" + id.id)
      .get()
      .then(function (doc) {
        setResults(doc.data());
      })
      .catch(function (error) {
        console.log("Error getting List", error);
      });
  }, []);

  const toggleAnswer = () => {
    setAnswerToggle(!answerToggle);
  };

  return results ? (
    <ScrollView style={{ flex: 1 }}>
      {/* Title Card */}
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Text style={styles.headerStyle}>Background</Text>
          {results.initial ? (
            <HTML html={results.initial} containerStyle={styles.htmlStyle} />
          ) : null}
        </Card.Content>
      </Card>

      {/* Images Card */}
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          marginVertical: 5,
        }}
      >
        <Text style={styles.imageHeaderStyle}>Images</Text>
        {results.images ? (
          <SnapCarousel images={results.images} />
        ) : (
          <View
            style={{
              height: (windowWidth * 13) / 16,
              width: windowWidth,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator // UPGRADE TO SOMETHING FANCIER
              animating={true}
              color="purple"
              size="large"
              style={{ paddingTop: 15 }}
            />
            <Text style={{ paddingTop: 10 }}>Loading...</Text>
          </View>
        )}
      </View>

      {/* Questions Card */}
      {results.questions? 
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            marginVertical: 5,
            padding:15
          }}
        >
          <Text style={styles.headerStyle}>Questions</Text>
          {results.questions.map(item => (
            <QuizQuestion question={item} key={item.question}/>
          ))}
        </View>
      :null}

      {/* Answer Card */}
      {results.answer ? (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            marginVertical: 5,
          }}
        >
          <View style={{padding:15}}>
            <TouchableOpacity
              onPress={() => toggleAnswer()}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.headerStyle}>Answer</Text>
              {!answerToggle ? (
                <FontAwesome5
                  name="plus"
                  color="black"
                  size={24}
                  style={{ marginHorizontal: 15, marginTop: 3 }}
                />
              ) : (
                <FontAwesome5
                  name="minus"
                  color="black"
                  size={24}
                  style={{ marginHorizontal: 15, marginTop: 3 }}
                />
              )}
            </TouchableOpacity>
          </View>
          {answerToggle
            ? results.answer.map((paragraph) => (
                <View key={paragraph.text} style={{marginBottom:10}}>
                  {paragraph.image ? (
                    <Image
                      style={{
                        width: windowWidth,
                        height: windowWidth * 0.75,
                      }}
                      resizeMode="contain"
                      imageBackgroundColor="black"
                      uri={paragraph.image}
                    />
                  ) : null}
                  <HTML
                    html={paragraph.text}
                    containerStyle={{...styles.htmlStyle, paddingHorizontal:15}}
                  />
                </View>
              ))
            : null}
        </View>
      ) : null}

      {/* References Card */}
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Text style={styles.headerStyle}>References</Text>
          {results.references
          ? results.references.map((ref, index) => (
              <TouchableOpacity
                style={{ marginHorizontal: 15, marginTop: 20, flexDirection:'row', borderBottomWidth:0.5, borderColor:'gray', padding:8}}
                key={ref.text}
                onPress={async () => {
                  const supported = await Linking.canOpenURL(ref.link)
                  if (supported){
                    await Linking.openURL(ref.link)
                  } else {
                    return;
                  }
                }}
              >
                <View style={{width:30, height:40, marginRight:10}}>
                    <MaterialCommunityIcons name="link" size={32} color="black" />
                </View> 
                <Text style={{fontSize:14, flex:1}}>{ref.text}</Text>
              </TouchableOpacity>
            ))
          : null}
        </Card.Content>
      </Card>
    </ScrollView>
  ) : null;
};
const styles = StyleSheet.create({
  headerStyle: {
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  imageHeaderStyle: {
    paddingTop:15,
    paddingHorizontal:25,
    fontSize: 24,
    fontWeight: "bold",
  },
  htmlStyle: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  nameStyle: {
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    marginTop: 5,
    resizeMode: "contain",
  },
  cardStyle: {
    marginVertical: 5,
  },
});

export default CasesDetailScreen;
