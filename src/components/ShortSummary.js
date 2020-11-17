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
    marginVertical:5,
    borderBottomWidth:1,
    borderColor:'#F0F0F0'
  },
  category: {
    color: "#4f2683",
    padding: 10,
    alignSelf: "flex-start",
    fontWeight:'bold',
    width:width*.32,
    borderRadius:10,
  },
  text: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    color:'black',
    flex:1
  },
});

export default ShortSummary;
