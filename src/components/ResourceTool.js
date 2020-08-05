import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  AsyncStorage,
} from "react-native";
import { ActivityIndicator, TextInput, Banner } from "react-native-paper";
import { List } from "react-native-paper";

const Width = Dimensions.get("window").width;

const ResourceTool = ({pageInfo, errorMessage}) => {

    const [bannerVisible, setBannerVisible] = useState(false);
    const dismissForever = async () => {
        await AsyncStorage.setItem("quantitative_assessment_disclaimer_dismissed", "true");
    };
    useEffect(() => {
        async function getBannerInfo() {
        const bannerInfo = await AsyncStorage.getItem(
            "quantitative_assessment_disclaimer_dismissed"
        );
        bannerInfo === "true" ? setBannerVisible(false) : setBannerVisible(true);
        }
        getBannerInfo();
    }, []);

    return (
        <ScrollView style={styles.container}>
        
        {/* Banner for Disclaimer */}
        <Banner
            visible={bannerVisible}
            icon="information"
            actions={[
                {
                    label: "Don't show again",
                    onPress: () => {
                        setBannerVisible(false);
                        dismissForever();
                    },
                },
                {
                    label: "Okay",
                    onPress: () => {
                        setBannerVisible(false);
                    },
                },
            ]}
        >
            <Text>{`Disclaimer:\n\nQuantitative measurements are generally de-emphasized for POCUS applications. When quantitative measures are used, we are more closely approximating diagnostic level echocardiographic standards and thorough training is generally required.\n\nThis resource is meant to assist the advanced critical care ultrasound clinician by providing a summary of some core normal/abnormal values, equations and review basic techniques relevant to advanced critical care ultrasonography. This resource is intended as an efficient reference and those seeking more in depth review are urged to use the references provided.`}</Text>
        </Banner>
        
        {/* Show Error message if no page data */}
        {errorMessage ? (
          <Text style={styles.titleStyle}>{errorMessage}</Text>
        ) : null}

        {/* Loading indicator while pageinfo is being fetched */}
        {pageInfo.length === 0 && !errorMessage ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          // once fetching complete:
          pageInfo.map((section) => (
            <List.Accordion
              key={section.sectionTitle}
              title={section.sectionTitle}
              titleStyle={styles.titleStyle}
              style={{ borderBottomWidth: 0.5, marginBottom: 10 }}
              titleNumberOfLines={2}
            >
              {section.image && (
                <Image
                  source={{ uri: section.image }}
                  style={{
                    height: (Width - 30) * 0.75,
                    width: Width - 30,
                    borderRadius: 10,
                    marginBottom: 10,
                    resizeMode: "contain",
                  }}
                />
              )}
              {/* Header Text  */}
              {section.text && (
                <Text style={styles.textContent}>{section.text}</Text>
              )}

              {/* Text-based table */}
              {section.table
                ? section.table.map((row) => (
                    <List.Accordion
                      title={row.rowTitle}
                      key={row.rowTitle}
                    >
                      <View
                        style={{
                          backgroundColor: "#EFEFEF",
                          borderRadius: 20,
                          overflow: "hidden",
                          marginBottom:15,
                          paddingVertical:10
                        }}
                      >
                        {Object.entries(row).map((thing) => {
                          if (thing[0] === "0. Media") {
                            return (
                              <Image
                                key={thing[1]}
                                source={{ uri: thing[1] }}
                                style={{
                                  height: (Width - 30) * 0.75,
                                  width: Width - 30,
                                  marginBottom: 10,
                                  resizeMode:'contain'
                                }}
                              />
                            );
                          } else if (thing[0].slice(3) === "Caveats") {
                            return (
                              <View key={thing[0]}>
                                <Text
                                  style={{
                                    fontSize: 16,
                                    fontFamily: "Raleway-Bold",
                                    margin: 15,
                                  }}
                                >
                                  {thing[0].slice(3)}
                                </Text>
                                {thing[1].map((caveat) => (
                                  <Text style={styles.textContent} key={caveat}>
                                    {caveat}
                                  </Text>
                                ))}
                              </View>
                            );
                          } else if (thing[0] != "rowTitle") {
                            return (
                              <View key={thing[0]}>
                                <Text
                                  style={{
                                    fontSize: 16,
                                    fontFamily: "Raleway-Bold",
                                    margin: 15,
                                  }}
                                >
                                  {thing[0].slice(3)}
                                </Text>
                                <Text
                                  style={{
                                    ...styles.textContent,
                                    // marginVertical: 10,
                                  }}
                                >
                                  {thing[1]}
                                </Text>
                              </View>
                            );
                          }
                        })}
                      </View>
                    </List.Accordion>
                  ))
                : null}
              

              {section.calculator && (
                <List.Accordion title="Calculators">
                  <Text style={{alignSelf:'center', color:'gray', fontSize:12}}>{`Rounded to 2 decimal places.\nNaN = Not a number`}</Text>
                  {section.calculator.map((calculator) => (
                    <Calculator
                      id={calculator.id}
                      formulaImage={calculator.formulaImage}
                      key={calculator.id}
                    />
                  ))}
                </List.Accordion>
              )}

              {/* Any disclaimers */}
              {section.footer &&
                section.footer.map((footerItem) => (
                  <Text
                    style={{
                      color: "gray",
                      fontSize: 12,
                      marginBottom: 5,
                      marginHorizontal: 15,
                    }}
                    key={footerItem}
                  >
                    {footerItem}
                  </Text>
                ))}
            </List.Accordion>
          ))
        )}
      </ScrollView>
    )
}

const Calculator = ({ id, formulaImage }) => {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");

  let var1Name = "";
  let var2Name = "";
  let var3Name = "";
  let formula = "";
  let label = "";

  switch (id) {
    case "SV":
      label = "Estimation of Stroke Volume"
      var1Name = "LVOT Radius (cm)";
      var2Name = "LVOT VTI (cm)";
      var3Name = "SV (mL)";
      formula = (Math.PI * Math.pow(var1, 2) * var2).toFixed(2);
      break;
    case "CO":
      label = "Estimation of Cardiac Output"
      var1Name = "HR (bpm)";
      var2Name = "SV (mL)";
      var3Name = "CO (L/min)";
      formula = ((var1 * var2) / 1000).toFixed(2);
      break;
    case "BSA":
      label = "Estimation of Body Surface Area"
      var1Name = "Weight (kg)";
      var2Name = "Height (cm)";
      var3Name = "BSA (m\u00B2)";
      formula = Math.sqrt((var1 * var2) / 3600).toFixed(2);
      break;
    case "CI":
      label = "Estimation of Cardiac Index"
      var1Name = "CO (L/min)";
      var2Name = "BSA (m\u00B2)";
      var3Name = "CI (L/min/m\u00B2)";
      formula = (var1 / var2).toFixed(2);
      break;
    case "RVSP":
      label = "Estimation of Right Ventricular Systolic Pressure"
      var1Name = "V (m/s)";
      var2Name = "RAP (mmHg)";
      var3Name = "RVSP (mmHg)";
      formula = (4*Math.pow(var1, 2) + parseInt(var2));
      break;
    default:
      break;
  }

  return (
    <View
      style={{
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <Text style={{fontSize:16, fontFamily:"Raleway-Medium", marginTop:15}}>
          {label}
      </Text>
      <Image
        source={{ uri: formulaImage }}
        style={{
          height: 50,
          width: 300,
          resizeMode: "contain",
          marginVertical:10
        }}
      />
      <TextInput
        mode="outlined"
        label={var1Name}
        value={var1}
        onChangeText={(number) => setVar1(number)}
        style={{ width: 200 }}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label={var2Name}
        value={var2}
        onChangeText={(number) => setVar2(number)}
        style={{ width: 200 }}
        keyboardType="numeric"
      />
      <Text style={{ fontSize: 18, marginVertical: 15 }}>
        {`${var3Name} = ${var1 && var2 ? formula : "0"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontFamily: "Raleway-Bold",
  },
  titleStyle: {
    fontSize: 18,
    fontFamily: "Raleway-Medium",
  },
  textContent: {
    fontFamily: "Raleway-Regular",
    fontSize: 14,
    marginHorizontal: 15,
    marginBottom: 5,
  },
});

export default ResourceTool;
