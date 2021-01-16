import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Image } from "react-native-expo-image-cache";
import { Video } from "expo-av";

const WIDTH = Dimensions.get("window").width;

const SnapCarousel = ({ images }) => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {item.format === "Video" ? (
          <Video
            source={{ uri: item.url }}
            rate={1.0}
            volume={1.0}
            useNativeControls={false}
            shouldPlay={true}
            isLooping
            resizeMode="contain"
            style={{
              width: WIDTH,
              height: WIDTH * 0.75,
            }}
          />
        ) : (
          <Image
            resizeMode="contain"
            imageBackgroundColor="black"
            uri={item.url}
            style={{ height: (WIDTH - 60) * 0.75, width: WIDTH }}
          />
        )}
      </View>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <Carousel
        data={images}
        renderItem={(item) => _renderItem(item)}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        layout="default"
        removeClippedSubviews
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "white", flex:1,paddingVertical:15 }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: WIDTH * 0.75,
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "black",
    overflow: "hidden",
  },
  title: {
    marginHorizontal: 15,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Raleway-Light",
    color: "black",
  },
});

export default SnapCarousel;
