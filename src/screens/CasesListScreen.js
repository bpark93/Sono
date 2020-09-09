import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import wpServer from "../api/wpServer";
import { useNavigation } from "@react-navigation/native";

const CasesListScreen = ({ route }) => {
  const { alreadyLoaded } = route.params;
  const navigation = useNavigation();
  const [results, setResults] = useState(alreadyLoaded);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const getCases = async () => {
    try {
      setLoading(true);
      const url = `/posts?page=${page}`;
      const response = await wpServer.get(url, {
        params: {
          categories: 195,
          _fields: "id,title,excerpt,slug,acf,_embedded,_links",
          _embed: "replies,wp:featuredmedia,author",
          per_page: 5,
        },
      });
      if (response.data.status === 400) {
        return;
      } // No more entries
      setResults(results.concat(response.data));
      setLoading(false);
    } catch (e) {
      setErrorMessage("Something went wrong! Try again");
    }
  };

  useEffect(() => {
    getCases();
  }, [page]);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CasesDetail", { id: item })}
            style={{
              marginLeft: 15,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
            }}
          >
            <Avatar.Image
              source={{
                uri:
                  item._embedded["wp:featuredmedia"][0].media_details.sizes
                    .course_thumbnail.source_url,
              }}
              style={{
                backgroundColor: "#E0E0E0",
                marginRight: 15,
                overflow: "hidden",
              }}
              size={45}
            />
            <View>
              <Text style={{ fontFamily: "Raleway-Bold", fontSize: 16 }}>
                {item.title.rendered}
              </Text>
              <Text
                style={{
                  fontFamily: "Raleway-Regular",
                  fontSize: 12,
                  color: "gray",
                  flexWrap: "wrap",
                  width: width*0.75,
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.excerpt.rendered
                  .replace("<p>", "")
                  .replace("</p>", "")
                  .replace("&#8217;", "'")}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        initialNumToRender={5}
        ListFooterComponent={() => {
          return loading ? (
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <ActivityIndicator size="large" />
              <Text
                style={{
                  fontFamily: "Raleway-Regular",
                  fontSize: 12,
                  marginTop: 15,
                }}
              >
                Loading More Cases...
              </Text>
            </View>
          ) : (
            <View style={{ alignItems: "flex-end", marginHorizontal: 15 }}>
              <TouchableOpacity
                onPress={() => handleLoadMore()}
                activeOpacity={0.8}
                style={styles.next}
              >
                <Text
                  style={{ fontFamily: "Raleway-Regular", color: "#4f2683" }}
                >
                  Load More
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headerStyle: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  next: {
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default CasesListScreen;
