import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ShortSummary = ({ data }) => {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      {data.purpose ? (
        <Row rowName="Purpose" rowContent={data.purpose} />
      ) : null}
      {data.probe ? <Row rowName="Probe" rowContent={data.probe} /> : null}
      {data.preset ? <Row rowName="Preset" rowContent={data.preset} /> : null}
      {data.patient_position ? (
        <Row rowName={`Patient\nPosition`} rowContent={data.patient_position} />
      ) : null}
      {data.probe_position ? (
        <Row rowName={`Probe\nPosition`} rowContent={data.probe_position} />
      ) : null}
      {data.sono_landmark ? (
        <Row
          rowName={`Sonographic\nLandmark`}
          rowContent={data.sono_landmark}
        />
      ) : null}
      {data.areas_of_interest ? (
        <Row
          rowName={`Areas of\nInterest`}
          rowContent={data.areas_of_interest}
          format={Array.isArray(data.areas_of_interest) ? "array" : null}
        />
      ) : null}
      {data.interpretation ? (
        <Row
          rowName="Interpretation"
          rowContent={data.interpretation}
          format={Array.isArray(data.interpretation) ? "array" : null}
        />
      ) : null}
    </View>
  );
};

const Row = ({ rowName, rowContent, format }) => (
  <View style={styles.row}>
    <Text style={styles.category}>{rowName}</Text>
    {format === "array" ? (
      <View style={{ flex: 1, paddingBottom:10 }}>
        {rowContent.map((page) => (
          <Text style={{...styles.text, paddingTop:10, paddingBottom:0, fontSize:14}} key={page.text}>
            {`\u2023 ${page.text}`}
          </Text>
        ))}
      </View>
    ) : (
      <Text style={styles.text}>{rowContent}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },
  category: {
    color: "#4f2683",
    padding: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
    width: width * 0.32,
    borderRadius: 10,
    fontSize: 14,
  },
  text: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 16,
    color: "black",
    flex: 1,
  },
});

export default ShortSummary;
