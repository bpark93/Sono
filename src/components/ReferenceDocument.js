import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image as RNImage,
  Linking,
} from "react-native";
import { TextInput, HelperText, Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TabButtons from "./TabButtons";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
  setBookmark,
  removeBookmark,
  getBookmark,
} from "../components/useBookmark";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "react-native-expo-image-cache";
import HTML from "react-native-render-html";

const { width } = Dimensions.get("window");

const ReferenceDocument = ({ page, id }) => {
  const navigation = useNavigation();

  const [bookmarked, setBookmarked] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  useEffect(() => {
    async function bookmarkChecker() {
      const temp = await getBookmark("lib");
      for (let i in temp) {
        if (temp[i] === id) {
          setBookmarked(true);
        }
      }
    }
    bookmarkChecker();
  }, [page]);

  useEffect(() => {
    navigation.setOptions({
      title: page.title,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (!bookmarked) {
              setBookmarked(true);
              setBookmark(id, "lib");
              setSnackVisible(true);
            } else {
              setBookmarked(false);
              removeBookmark(id, "lib");
            }
          }}
        >
          <MaterialCommunityIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={28}
            color={bookmarked ? "gold" : "black"}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [bookmarked, page]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonSettings, setButtonSettings] = useState([]);
  useEffect(() => {
    if (page.calculator) {
      setButtonSettings([
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
      ]);
    } else {
      setButtonSettings([
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
      ]);
      setActiveIndex(2);
    }
  }, [page]);

  return (
    <View style={styles.container}>
      <TabButtons
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        settings={buttonSettings}
      />
      <KeyboardAwareScrollView keyboardOpeningTime={0}>
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
                    <HTML
                      html={section.body}
                      containerStyle={{ flex: 1, margin: 10 }}
                      baseFontStyle={{ fontFamily: "Roboto-Regular" }}
                    />
                  </View>
                ) : (
                  <View style={styles.card}>
                    <Text style={styles.header}>{section.header}</Text>

                    {section.body.map((step, index) => (
                      <View
                        key={index}
                        style={{
                          borderBottomColor: "#E0E0E0",
                          borderBottomWidth: 0.5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 10,
                          }}
                        >
                          <Text
                            style={{
                              ...styles.paragraph,
                              alignSelf: "flex-start",
                              fontSize: 18,
                            }}
                          >
                            {index + 1}.
                          </Text>
                          <HTML
                            html={step.stepBody}
                            containerStyle={{ flex: 1 }}
                          />
                        </View>
                        {step.stepImage ? (
                          <Image
                            uri={step.stepImage}
                            style={{
                              width: width - 30,
                              height: (width - 30) * 0.75,
                              marginVertical: 20,
                            }}
                            resizeMode="contain"
                          />
                        ) : null}
                      </View>
                    ))}
                    {section.caveats ? (
                      <View style={{ marginBottom: 10 }}>
                        <Text style={{ ...styles.header, fontSize: 18 }}>
                          Caveats
                        </Text>
                        {section.caveats.map((caveat) => (
                          // <Text
                          //   key={caveat}
                          //   style={{
                          //     ...styles.paragraph,
                          //     margin: 0,
                          //     marginLeft: 10,
                          //   }}
                          // >{`\u2022 ${caveat}`}</Text>
                          <HTML
                            html={`<li>${caveat}</li>`}
                            key={caveat}
                            containerStyle={{ flex: 1, margin: 10 }}
                          />
                        ))}
                      </View>
                    ) : null}
                  </View>
                )}
              </View>
            ))
          : null}

        {/* Authors */}
        {activeIndex === 2 && page.authors ? (
          <View style={styles.card}>
            <Text style={styles.header}>Authors</Text>
            {page.authors.map((person) => (
              <Text
                key={person}
                style={{
                  fontFamily: "Roboto-Regular",
                  marginHorizontal: 20,
                  marginVertical: 5,
                  fontSize: 16,
                  color: "gray",
                }}
              >
                {person}
              </Text>
            ))}
          </View>
        ) : null}

        {/* Associated Pages */}
        {activeIndex === 2 && page.associated_pages ? (
          <View style={styles.card}>
            <Text style={styles.header}>Associated Pages</Text>
            {page.associated_pages.map((page) => (
              <TouchableOpacity
                key={page.id}
                onPress={() => navigation.push("SearchDetail", { id: page.id })}
              >
                <Text style={styles.touchable}>{page.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {/* References */}
        {activeIndex === 2 && page.references ? (
          <View style={styles.card}>
            <Text style={styles.header}>References</Text>

            {page.references?.map((ref, index) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: 15,
                  marginTop: 20,
                  flexDirection: "row",
                  borderBottomWidth: 0.5,
                  borderColor: "gray",
                  paddingBottom: 5,
                }}
                key={ref.text}
                onPress={async () => {
                  const supported = await Linking.canOpenURL(ref.pubmed);
                  if (supported) {
                    await Linking.openURL(ref.pubmed);
                  } else {
                    Alert.alert("No link exists.");
                  }
                }}
              >
                <RNImage
                  source={require("../../assets/ncbi.png")}
                  style={{ height: 40, width: 30, marginRight: 10 }}
                />
                <Text
                  style={{
                    fontFamily: "Raleway-Regular",
                    fontSize: 14,
                    flex: 1,
                  }}
                >
                  {ref.text}
                </Text>
              </TouchableOpacity>
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
                  style={{
                    width: 120,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
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
      </KeyboardAwareScrollView>
      <Snackbar
        visible={snackVisible}
        onDismiss={() => setSnackVisible(false)}
        duration={3000}
        action={{
          label: "Okay",
          onPress: () => setSnackVisible(false),
        }}
      >
        "{page.title}" added to Bookmarks
      </Snackbar>
    </View>
  );
};

const Calculator = ({ settings }) => {
  const [var1, setVar1] = useState("");
  const [multiplier1, setMultiplier1] = useState(1);

  const [var2, setVar2] = useState("");
  const [multiplier2, setMultiplier2] = useState(1);

  const [var3, setVar3] = useState("");
  const [multiplier3, setMultiplier3] = useState(1);

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

  const validateAnswer = (variable) => {
    return variable.count === "0"
      ? isFinite(formula1) && var1
        ? formula1 < variable.lowerLimit
          ? "low"
          : formula1 > variable.upperLimit
          ? "high"
          : "good"
        : "blank"
      : isFinite(formula2) && var1
      ? formula2 < variable.lowerLimit
        ? "low"
        : formula2 > variable.upperLimit
        ? "high"
        : "good"
      : "blank";
  };

  switch (settings.id) {
    case "svco":
      formula1 = (
        Math.PI *
        Math.pow((var1 * multiplier1) / 20, 2) *
        var2 *
        multiplier2
      ).toFixed(2);
      formula2 = ((formula1 * var3 * multiplier3) / 1000).toFixed(2);
      break;
    case "ci":
      formula1 = Math.sqrt(
        (var1 * multiplier1 * var2 * multiplier2) / 3600
      ).toFixed(2);
      formula2 = ((var3 * multiplier3) / formula1).toFixed(2);
      break;
    case "svri":
      formula1 = (
        (((var1 * multiplier1 - var2 * multiplier2) * 80) / var3) *
        multiplier3
      ).toFixed(2);
      break;
    case "map":
      formula1 = (
        (var1 * multiplier1) / 3 +
        (var2 * multiplier2 * 2) / 3
      ).toFixed(2);
      break;
    case "mva_pht":
      formula1 = (220 / var1).toFixed(2);
      break;
    case "mva_decel":
      formula1 = (750 / var1).toFixed(2);
      break;
    default:
      break;
  }

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.header, fontSize: 20 }}>{settings.title}</Text>

      <Image
        resizeMode="contain"
        uri={settings.formulaImage}
        style={{
          height: (width - 100) * 0.3,
          width: width - 100,
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
      {settings.variables.map((variable, index) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
          key={variable.name}
        >
          <View style={{ width: (width - 30) / 3, alignItems: "flex-end" }}>
            <Text>{variable.name}: </Text>
          </View>
          {variable.type === "measured" ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
            >
              <TextInput
                style={{
                  width: 100,
                  height: 40,
                  paddingHorizontal: 5,
                  backgroundColor: "#F7F7F7",
                  alignSelf: "center",
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
                keyboardType="decimal-pad"
              />
              {validate(index) && (
                <HelperText
                  type="error"
                  visible={validate(index)}
                  style={{ width: 120 }}
                >
                  Not A Number!
                </HelperText>
              )}
            </View>
          ) : (
            <View
              style={{
                width: 100,
                marginHorizontal: 10,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderColor:
                  validateAnswer(variable) === "high" ||
                  validateAnswer(variable) === "low"
                    ? "red"
                    : validateAnswer(variable) === "good"
                    ? "green"
                    : "gray",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {variable.count === "0"
                  ? isFinite(formula1) && var1
                    ? formula1
                    : ""
                  : variable.count === "1"
                  ? isFinite(formula2) && var1
                    ? formula2
                    : ""
                  : ""}
              </Text>
              {validateAnswer(variable) === "high" ? (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Roboto-Regular",
                    fontSize: 12,
                  }}
                >
                  High
                </Text>
              ) : validateAnswer(variable) === "low" ? (
                <Text
                  style={{
                    color: "red",
                    fontFamily: "Roboto-Regular",
                    fontSize: 12,
                  }}
                >
                  Low
                </Text>
              ) : null}
            </View>
          )}
          {variable.unit ? (
            <UnitConverter
              unitsArray={variable.unit}
              converter={
                index === 0
                  ? (multiplier) => setMultiplier1(multiplier)
                  : index === 1
                  ? (multiplier) => setMultiplier2(multiplier)
                  : (multiplier) => setMultiplier3(multiplier)
              }
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};

const UnitConverter = ({ unitsArray, converter }) => {
  const [unitIndex, setUnitIndex] = useState(0);
  const numberOfUnits = unitsArray.length;

  const handlePress = () => {
    if (unitIndex === numberOfUnits - 1) {
      converter(unitsArray[0].multiplier);
      setUnitIndex(0);
    } else {
      converter(unitsArray[unitIndex + 1].multiplier);
      setUnitIndex(unitIndex + 1);
    }
  };

  return (
    <View style={{ width: (width - 30) / 4 }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          width: (width - 30) / 6,
          flexDirection: "row",
          borderRadius: 10,
          backgroundColor: numberOfUnits === 1 ? "white" : "#F0F0F0",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Text
          style={{ fontSize: 14, fontFamily: "Roboto-Regular", marginRight: 5 }}
        >
          {unitsArray[unitIndex].name}
        </Text>
        {numberOfUnits !== 1 && (
          <FontAwesome5 name="exchange-alt" size={14} color="green" />
        )}
      </TouchableOpacity>
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
    backgroundColor: "#F0F0F0",
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
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowOpacity: 0.1,
  },
  touchable: {
    color: "#2b59a2",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default ReferenceDocument;
