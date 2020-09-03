import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Divider, TextInput, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TabButtons from "./TabButtons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ReferenceDocument = ({ page }) => {
  const navigation = useNavigation();

  const [bookmarked, setBookmarked] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: page.title,
      headerRight: () => (
        <TouchableOpacity onPress={() => {
            setBookmarked(!bookmarked)
            }}>
          <MaterialCommunityIcons
            name={bookmarked ? "star" : "star-outline"}
            size={28}
            color={bookmarked ? "gold" : "black"}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [bookmarked]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <TabButtons
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        settings={[
          {
            name: "Calculator",
            icon: "calculator",
          },
          {
            name: "Normal Values",
            icon: "clipboard-check-outline",
          },
          {
            name: "Acquisition",
            icon: "account-search",
          },
          {
            name: "Terminology",
            icon: "book-open-page-variant",
          },
        ]}
      />

      {activeIndex === 0 && page.calculator
        ? page.calculator.map((item, index) => (
            <Calculator key={index} settings={item} />
          ))
        : null}

      {/* Normal Values  */}
      {activeIndex === 1 && page.normalValues ? (
        <View style={styles.card}>
          <Text style={styles.header}>Normal Values</Text>

          {page.normalValues?.map((ref, index) => (
            <View
              style={{ ...styles.paragraph, flexDirection: "row" }}
              key={ref.name}
            >
              <View
                style={{
                  width: 150,
                  alignItems: "flex-end",
                  marginRight: 20,
                }}
              >
                <Text>{ref.name}: </Text>
              </View>
              <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular" }}>
                {ref.value}
              </Text>
            </View>
          ))}
        </View>
      ) : null}

      {/* Text Content */}
      {activeIndex === 2 && page.content
        ? page.content.map((section) => (
            <View key={section.header}>
              {typeof section.body === "string" ? (
                <View style={styles.card}>
                  <Text style={styles.header}>{section.header}</Text>

                  <Text style={styles.paragraph}>{section.body}</Text>
                </View>
              ) : (
                <View style={styles.card}>
                  <Text style={styles.header}>{section.header}</Text>

                  {section.body.map((step, index) => (
                    <View key={index}>
                      {step.stepImage ? (
                        <Image
                          source={{ uri: step.stepImage }}
                          style={{
                            width: width - 30,
                            height: (width - 30) * 0.75,
                            marginVertical: 20,
                          }}
                          resizeMode="contain"
                        />
                      ) : null}
                      <Text style={styles.paragraph}>
                        {index + 1}. {step.stepBody}
                      </Text>
                    </View>
                  ))}
                  {section.caveats ? (
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ ...styles.header, fontSize: 18 }}>
                        Caveats
                      </Text>
                      {section.caveats.map((caveat) => (
                        <Text
                          key={caveat}
                          style={{
                            ...styles.paragraph,
                            margin: 0,
                            marginLeft: 10,
                          }}
                        >{`\u2022 ${caveat}`}</Text>
                      ))}
                    </View>
                  ) : null}
                </View>
              )}
            </View>
          ))
        : null}

      {/* References */}
      {activeIndex === 2 && page.references ? (
        <View style={styles.card}>
          <Text style={styles.header}>References</Text>

          {page.references?.map((ref, index) => (
            <View
              style={{
                ...styles.paragraph,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
              key={ref.text}
            >
              <Text>{index + 1}. </Text>
              <Text>{ref.text}</Text>
            </View>
          ))}
        </View>
      ) : null}

      {/* Terminology */}
      {activeIndex === 3 && page.terminology ? (
        <View style={styles.card}>
          <Text style={styles.header}>Terminology</Text>

          {page.terminology.map((term, index) => (
            <View
              style={{ flexDirection: "row", marginVertical: 10 }}
              key={index}
            >
              <Text
                style={{ width: 120, fontWeight: "bold", marginHorizontal: 10 }}
              >
                {term.name}
              </Text>
              <View style={{ flex: 1 }}>
                <Text style={{ marginBottom: 10 }}>{term.definition}</Text>
                <Text>{term.explanation}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

const Calculator = ({ settings }) => {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [var3, setVar3] = useState("");

  let formula1 = "";
  let formula2 = "";

  const validate = (index) => {
    if (index === 0) {
      return isNaN(var1);
    } else if (index === 1) {
      return isNaN(var2);
    } else {
      return isNaN(var3);
    }
  };

  switch (settings.id) {
    case "svco":
      formula1 = (Math.PI * Math.pow(var1 / 20, 2) * var2).toFixed(2);
      formula2 = ((formula1 * var3) / 1000).toFixed(2);
      break;
    case "ci":
      formula1 = Math.sqrt((var1 * var2) / 3600).toFixed(2);
      formula2 = (var3 / formula1).toFixed(2);
    default:
      break;
  }

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.header, fontSize: 20 }}>{settings.title}</Text>

      <Image
        source={{ uri: settings.formulaImage }}
        style={{
          height: (width - 100) * 0.3,
          width: width - 100,
          resizeMode: "contain",
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
      {settings.variables.map((variable, index) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            marginBottom: 5,
          }}
          key={variable.name}
        >
          <View style={{ width: (width - 30) / 2, alignItems: "flex-end" }}>
            <Text>{variable.name}: </Text>
          </View>
          {variable.type === "measured" ? (
            <View>
              <TextInput
                style={{
                  width: 120,
                  height: 40,
                  paddingHorizontal: 5,
                  backgroundColor: "#F7F7F7",
                }}
                value={index === 0 ? var1 : index === 1 ? var2 : var3}
                onChangeText={(text) =>
                  index === 0
                    ? setVar1(text)
                    : index === 1
                    ? setVar2(text)
                    : setVar3(text)
                }
                error={validate(index)}
                keyboardType="phone-pad"
              />
              <HelperText
                type="error"
                visible={validate(index)}
                style={{ width: 120 }}
              >
                Not A Number!
              </HelperText>
            </View>
          ) : (
            <View style={{ width: 120, height: 40, justifyContent: "center" }}>
              <Text
                style={{
                  marginHorizontal: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {var1 && var2
                  ? variable.count === "0"
                    ? formula1
                    : variable.count === "1" && var3
                    ? formula2
                    : ""
                  : ""}
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Raleway-Bold",
    fontSize: 24,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  paragraph: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    margin: 10,
  },
  card: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "#FDFDFD",
    elevation: 3,
  },
});

export default ReferenceDocument;
