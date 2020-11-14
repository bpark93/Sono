import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
// import ImageModal from 'react-native-image-modal';
import { Image } from "react-native-expo-image-cache";

const WIDTH = Dimensions.get("window").width;

const SnapCarousel = ({images}) => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          imageBackgroundColor="black"
          uri={item.url}
          style={{ height: (WIDTH - 60) * 0.75, width: WIDTH }}
        />
      </View>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <View>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
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
        containerStyle={{ backgroundColor: 'white', }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'gray'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
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
    marginVertical: 15,
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
