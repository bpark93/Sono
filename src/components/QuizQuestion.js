import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const QuizQuestion = ({ question }) => {
  const [selected, setSelected] = useState("");
  const [submitPressed, setSubmitPressed] = useState(false);
  const [correct, setCorrect] = useState(false);

  return !submitPressed ? (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <RadioButton.Group
        onValueChange={(value) => setSelected(value)}
        value={selected}
      >
        {question.answers.map((item) => (
          <View key={item} style={{ alignItems: "center", marginTop: 5 }}>
            <RadioButton.Item
              value={item}
              label={item}
              labelStyle={{ fontSize: 14 }}
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
        onPress={() => setSubmitPressed(true)}
        disabled={selected.length != 0 ? false : true}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <RadioButton.Group
        onValueChange={(value) => setSelected(value)}
        value={selected}
      >
        {question.answers.map((item) => (
          <View key={item} style={{ alignItems: "center", marginTop: 5 }}>
            <RadioButton.Item
              value={item}
              label={item}
              labelStyle={{ fontSize: 14 }}
              disabled
              style={{
                borderWidth:
                  item === question.correct || item === selected ? 2 : 0,
                borderColor:
                  item === question.correct || item === selected
                    ? item === question.correct
                      ? "green"
                      : "red"
                    : null,
                borderRadius: 20,
              }}
            />
          </View>
        ))}
      </RadioButton.Group>
      <Text
        style={{
          alignSelf: "center",
          color: selected === question.correct ? "green" : "red",
          marginVertical:10,
          fontSize:16
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
  },
});

export default QuizQuestion;
