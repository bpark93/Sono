import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

const ShortSummary = ({ data }) => {

  return (
      
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      {data.purpose ? <View style={styles.row}>
        <Text style={styles.category}>Purpose</Text>
        <Text style={styles.text}>{data.purpose}</Text>
      </View>:null}
      {data.probe ? <View style={styles.row}>
        <Text style={styles.category}>Probe</Text>
        <Text style={styles.text}>{data.probe}</Text>
      </View>:null}
      {data.preset ? <View style={styles.row}>
        <Text style={styles.category}>Preset</Text>
        <Text style={styles.text}>{data.preset}</Text>
      </View>:null}
      {data.patient_position ? <View style={styles.row}>
        <Text style={styles.category}>{`Patient\nPosition`}</Text>
        <Text style={styles.text}>{data.patient_position}</Text>
      </View>:null}
      {data.probe_position ? <View style={styles.row}>
        <Text style={styles.category}>{`Probe\nPosition`}</Text>
        <Text style={styles.text}>{data.probe_position}</Text>
      </View>:null}
      {data.sono_landmark ? <View style={styles.row}>
        <Text style={styles.category}>{`Sonographic\nLandmark`}</Text>
        <Text style={styles.text}>{data.sono_landmark}</Text>
      </View>:null}
      {data.areas_of_interest ? <View style={styles.row}>
        <Text style={styles.category}>{`Areas of\nInterest`}</Text>
        <Text style={styles.text}>{data.areas_of_interest}</Text>
      </View>:null}
      {data.interpretation ? <View style={styles.row}>
        <Text style={styles.category}>{`Interpretation`}</Text>
        <Text style={styles.text}>{data.interpretation}</Text>
      </View>:null}
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
    fontSize:14
  },
  text: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize:16,
    color:'black',
    flex:1
  },
});

export default ShortSummary;
