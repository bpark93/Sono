import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image as RNImage,
  Linking,
} from "react-native";
import { TextInput, HelperText, Snackbar, DataTable } from "react-native-paper";
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
import { Picker } from "@react-native-community/picker";

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

  const [activeIndex, setActiveIndex] = useState("");
  const [buttonSettings, setButtonSettings] = useState([]);
  useEffect(() => {
    let newArray = [];
    if (page.calculator) {
      newArray.push({
        name: "Calculator",
        icon: "calculator",
      });
    }
    if (page.normalValues) {
      newArray.push({
        name: "Normal Values",
        icon: "clipboard-check-outline",
      });
    }
    if (page.content) {
      newArray.push({
        name: "Acquisition",
        icon: "account-search",
      });
    }
    if (page.terminology) {
      newArray.push({
        name: "Terminology",
        icon: "book-open-page-variant",
      });
    }
    setButtonSettings(newArray);
    if (page.activeIndex) {
      setActiveIndex(page.activeIndex);
    } else {
      setActiveIndex("Acquisition");
    }
  }, [page]);

  const [hideDisclaimerPressed, setHideDisclaimerPressed] = useState(false);

  return (
    <View style={styles.container}>
      <TabButtons
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        settings={buttonSettings}
      />
      <KeyboardAwareScrollView keyboardOpeningTime={0}>
        {/* Calculator */}
        {activeIndex === "Calculator" &&
        page.disclaimer &&
        !hideDisclaimerPressed ? (
          <View
            style={{
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              marginHorizontal: 15,
              // backgroundColor: "#B33A3A",
            }}
          >
            <Text>
              <Text style={{ fontWeight: "bold" }}>Disclaimer: </Text>
              {page.disclaimer}
            </Text>
            <TouchableOpacity
              onPress={() => setHideDisclaimerPressed(true)}
              style={{
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={24}
                color="black"
              />
              <Text style={{ fontSize: 16 }}>Got it</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {activeIndex === "Calculator" && page.calculator
          ? page.calculator.map((item, index) => (
              <Calculator key={index} settings={item} />
            ))
          : null}

        {/* Normal Values  */}
        {activeIndex === "Normal Values" && page.normalValues ? (
          <View style={styles.card}>
            <Text style={styles.header}>Normal Values</Text>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  {page.normalValuesHeaders
                    ? page.normalValuesHeaders[0]
                    : "Variable"}
                </DataTable.Title>
                <DataTable.Title numeric>
                  {page.normalValuesHeaders
                    ? page.normalValuesHeaders[1]
                    : "Value"}
                </DataTable.Title>
                <DataTable.Title numeric>
                  {page.normalValuesHeaders
                    ? page.normalValuesHeaders[2]
                    : "Unit"}
                </DataTable.Title>
              </DataTable.Header>

              {page.normalValues?.map((ref, index) => (
                <DataTable.Row key={ref.name}>
                  {/* <DataTable.Cell>{ref.name}</DataTable.Cell> */}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text>{ref.name}</Text>
                  </View>
                  <DataTable.Cell numeric style={{ flex: 1 }}>
                    {ref.value}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>{ref.unit}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
        ) : null}

        {/* Text Content */}
        {activeIndex === "Acquisition" && page.content
          ? page.content.map((section) => (
              <View key={section.header}>
                {typeof section.body === "string" ? (
                  <View style={styles.card}>
                    <Text style={styles.header}>{section.header}</Text>
                    <HTML
                      html={section.body}
                      containerStyle={{ flex: 1, margin: 10 }}
                      baseFontStyle={{ fontSize: 16 }}
                      imagesMaxWidth={width - 100}
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
                          paddingVertical: 10,
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
                              fontSize: 24,
                            }}
                          >
                            {index + 1}.
                          </Text>
                          <HTML
                            html={step.stepBody}
                            containerStyle={{ flex: 1 }}
                            baseFontStyle={{ fontSize: 16 }}
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
                      <View style={{ paddingVertical: 10 }}>
                        <Text style={{ ...styles.header, fontSize: 22 }}>
                          Caveats
                        </Text>
                        {section.caveats.map((caveat) => (
                          <HTML
                            html={`<li>${caveat}</li>`}
                            key={caveat}
                            containerStyle={{ flex: 1, margin: 10 }}
                            baseFontStyle={{ fontSize: 16 }}
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
        {activeIndex === "Acquisition" && page.authors ? (
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
        {activeIndex === "Acquisition" && page.associated_pages ? (
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
        {activeIndex === "Acquisition" && page.references ? (
          <View style={styles.card}>
            <Text style={styles.header}>References</Text>

            {page.references?.map((ref, index) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: 15,
                  marginTop: 20,
                  flexDirection: "row",
                  borderBottomWidth: 0.5,
                  borderColor: "#F0F0F0",
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
                    fontSize: 14,
                    flex: 1,
                    color: "gray",
                  }}
                >
                  {ref.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {/* Terminology */}
        {activeIndex === "Terminology" && page.terminology ? (
          <View style={styles.card}>
            <Text style={styles.header}>Terminology</Text>

            {page.terminology.map((term, index) => (
              <View
                style={{ flexDirection: "row", marginVertical: 10 }}
                key={index}
              >
                <Text
                  style={{
                    width: 100,
                    fontWeight: "bold",
                    fontFamily:
                      Platform.OS === "android" ? "Roboto-Regular" : null,
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

  const [var4, setVar4] = useState("");
  const [multiplier4, setMultiplier4] = useState(1);

  let formula1 = "";
  let formula2 = "";

  const validate = (index) => {
    if (index === 0) {
      return isNaN(var1);
    } else if (index === 1) {
      return isNaN(var2);
    } else if (index === 2) {
      return isNaN(var3);
    } else {
      return isNaN(var4);
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
    case "rvsp":
      formula1 = parseInt(4 * var1 * var1) + parseInt(var2);
      break;
    case "rap":
      if (var1 === "> 2.1 cm" && var2 === "< 50%") {
        formula1 = "15";
      } else if (var1 === "< 2.1 cm" && var2 === "> 50%") {
        formula1 = "3";
      } else {
        formula1 = "8";
      }
      break;
    case "tv_inflow":
      formula1 = (((var1 - var2) / var1) * -100).toFixed(2);
      break;
    case "mv_inflow":
      formula1 = (((var1 - var2) / var1) * 100).toFixed(2);
      break;
    case "pi":
      formula1 = ((var1 - var2) / var3).toFixed(2);
      formula2 = (formula1 * 10.93 - 1.28).toFixed(2);
      break;
    case "last":
      if (var1 === "Lidocaine") {
        if (var2 === "Without Epi") {
          formula1 = ((var4 * multiplier4 * 5) / (10 * var3.slice(0, -1))).toFixed(2);
        } else {
          formula1 = ((var4 * multiplier4 * 7) / (10 * var3.slice(0, -1))).toFixed(2);
        }
      } else if (var1 === "Bupivacaine") {
        if (var2 === "Without Epi") {
          formula1 = ((var4 * multiplier4 * 2.5) / (10 * var3.slice(0, -1))).toFixed(2);
        } else {
          formula1 = ((var4 * multiplier4 * 3) / (10 * var3.slice(0, -1))).toFixed(2);
        }
      } else if (var1 === "Mepivacaine") {
        if (var2 === "Without Epi") {
          formula1 = ((var4 * multiplier4 * 7) / (10 * var3.slice(0, -1))).toFixed(2);
        } else {
          formula1 = ((var4 * multiplier4 * 8) / (10 * var3.slice(0, -1))).toFixed(2);
        }
      } else if (var1 === "Ropivacaine") {
        formula1 = ((var4 * multiplier4 * 3) / (10 * var3.slice(0, -1))).toFixed(2);
      }
      break;
    default:
      break;
  }

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.header, fontSize: 20, paddingBottom: 20 }}>
        {settings.title}
      </Text>

      {settings.formulaImage ? (
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
      ) : null}

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
            <Text style={{ fontSize: 16 }}>{variable.name}: </Text>
          </View>

          {variable.type === "select" ? (
            <PickerElement
              valuesArray={variable.selections}
              setVar1={setVar1}
              setVar2={setVar2}
              setVar3={setVar3}
              setVar4={setVar4}
              elementIndex={index}
              arrange={variable.arrange}
            />
          ) : variable.type === "measured" ? (
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
                value={
                  index === 0
                    ? var1
                    : index === 1
                    ? var2
                    : index === 2
                    ? var3
                    : var4
                }
                onChangeText={(text) =>
                  index === 0
                    ? setVar1(text)
                    : index === 1
                    ? setVar2(text)
                    : index === 2
                    ? setVar3(text)
                    : setVar4(text)
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
                  fontFamily:
                    Platform.OS === "android" ? "Roboto-Regular" : null,
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
                  : index === 2
                  ? (multiplier) => setMultiplier3(multiplier)
                  : (multiplier) => setMultiplier4(multiplier)
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

const PickerElement = ({
  valuesArray,
  setVar1,
  setVar2,
  setVar3,
  setVar4,
  elementIndex,
  arrange,
}) => {
  const [selected, setSelected] = useState(null);

  return arrange != "picker" ? (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        flexDirection: arrange === "column" ? "column" : "row",
        flex: 1,
      }}
    >
      {valuesArray.map((value, index) => (
        <TouchableOpacity
          key={value}
          style={{
            padding: 10,
            borderWidth: 1.2,
            marginHorizontal: 5,
            marginVertical: 5,
            borderRadius: 10,
            borderColor: selected === index ? "#3b5998" : "gray",
            backgroundColor: selected === index ? "#E0E0E0" : null,
          }}
          onPress={() => {
            setSelected(index);
            if (elementIndex === 0) {
              setVar1(value);
            } else if (elementIndex === 1) {
              setVar2(value);
            } else if (elementIndex === 2) {
              setVar3(value);
            } else {
              setVar4(value);
            }
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
              color: selected === index ? "#3b5998" : "gray",
            }}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <Picker
      selectedValue={selected}
      onValueChange={(itemValue) => {
        setSelected(itemValue);
        if (elementIndex === 0) {
          setVar1(itemValue);
        } else if (elementIndex === 1) {
          setVar2(itemValue);
        } else if (elementIndex === 2) {
          setVar3(itemValue);
        } else {
          setVar4(itemValue);
        }
      }}
      style={{ flex:1, justifyContent:'flex-end' }}
      mode="dropdown"
    >
      {valuesArray.map((value) => (
        <Picker.Item label={value} value={value} key={value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null,
    fontSize: 32,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    margin: 10,
  },
  card: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 15,
    backgroundColor: "white",
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
  },
  touchable: {
    color: "#2b59a2",
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default ReferenceDocument;
