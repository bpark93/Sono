import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

const ShortSummary = ({ data }) => {

  return (
      
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <View style={styles.row}>
        <Text style={styles.category}>Purpose</Text>
        <Text style={styles.text}>{data.purpose}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>Probe</Text>
        <Text style={styles.text}>{data.probe}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>Preset</Text>
        <Text style={styles.text}>{data.preset}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{`Patient\nPosition`}</Text>
        <Text style={styles.text}>{data.patient_position}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{`Probe\nPosition`}</Text>
        <Text style={styles.text}>{data.probe_position}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{`Sonographic\nLandmark`}</Text>
        <Text style={styles.text}>{data.sono_landmark}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{`Areas of\nInterest`}</Text>
        <Text style={styles.text}>{data.areas_of_interest}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{`Interpretation`}</Text>
        <Text style={styles.text}>{data.interpretation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    marginVertical:5
  },
  category: {
    color: "#C0C0C0",
    padding: 10,
    alignSelf: "flex-start",
    fontFamily: "Raleway-Bold",
    width:width*.28,
    borderRadius:10,
  },
  text: {
    alignSelf: "flex-start",
    padding: 10,
    fontFamily: "Raleway-Bold",
    color:'black',
    flex:1
  },
});

export default ShortSummary;
