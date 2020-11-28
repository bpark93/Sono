import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import {Image} from "react-native-expo-image-cache"
import {Video} from 'expo-av'

const QuizQuestion = ({ question, checker, answered, index }) => {
  const [selected, setSelected] = useState("");
  const [submitPressed, setSubmitPressed] = useState(false);
  const [correct, setCorrect] = useState(false);
  const {width} = Dimensions.get('window')

  return !submitPressed ? (
    <View style={styles.container}>
      <Text style={{alignSelf:'center', fontSize:18}}>{`Question ${index+1}`}</Text>
      <Text style={styles.question}>{question.question}</Text>
      {question.image? 
        <Image 
          uri={question.image}
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: width-50,
            height: (width-50) * 0.75,
            marginVertical:5
          }}
        />
      :null}
      {question.video?
        <Video
          source={{ uri: question.video }}
          rate={1.0}
          volume={1.0}
          useNativeControls={false}
          shouldPlay={true}
          isLooping
          resizeMode="contain"
          style={{
            width: width-50,
            height: (width-50) * 0.75,
          }}
        />
      :null}
      <RadioButton.Group
        onValueChange={(value) => setSelected(value)}
        value={selected}
      >
        {question.answers.map((item) => (
          <View key={item.text} style={{ alignItems: "center", marginTop: 5, backgroundColor:'#F0F0F0' }}>
            <RadioButton.Item
              value={item.text}
              label={item.text}
              labelStyle={{ fontSize: 14, width:width-120}}
              style={{width:width-60}}
            />
            {/* <Text>{item}</Text> */}
          </View>
        ))}
      </RadioButton.Group>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: selected.length != 0 ? "#4f2683" : "#E0E0E0",
        }}
        onPress={() => {
          setSubmitPressed(true)
          answered();
          if (checker && selected === question.correct){
            checker();
          }
        }}
        disabled={selected.length != 0 ? false : true}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.image? 
        <Image 
          uri={question.image}
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: width-50,
            height: (width-50) * 0.75,
            marginVertical:5
          }}
        />
      :null}
      {question.video?
        <Video
          source={{ uri: question.video }}
          rate={1.0}
          volume={1.0}
          useNativeControls={false}
          shouldPlay={true}
          isLooping
          resizeMode="contain"
          style={{
            width: width-50,
            height: (width-50) * 0.75,
          }}
        />
      :null}
      <RadioButton.Group
        onValueChange={(value) => setSelected(value)}
        value={selected}
      >
        {question.answers.map((item) => (
          <View key={item.text} style={{ alignItems: "center", marginTop: 5, backgroundColor:'#F0F0F0' }}>
            <RadioButton.Item
              value={item.text}
              label={item.text}
              labelStyle={{ fontSize: 14, width:width-120 }}
              disabled
              style={{
                borderWidth:
                  item.text === question.correct || item.text === selected
                    ? 2
                    : 0,
                borderColor:
                  item.text === question.correct || item.text === selected
                    ? item.text === question.correct
                      ? "green"
                      : "red"
                    : null,
                borderRadius: 20,
                width:width-60
              }}
            />
          </View>
        ))}
      </RadioButton.Group>
      <Text
        style={{
          alignSelf: "center",
          color: selected === question.correct ? "green" : "red",
          marginVertical: 10,
          fontSize: 16,
        }}
      >
        {selected === question.correct ? "Correct!" : "Incorrect"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    width: 80,
  },
  container: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 0.2,
  },
  question: {
    fontSize: 16,
    alignSelf: "center",
    marginHorizontal: 10,
    marginVertical:10
  },
});

export default QuizQuestion;
