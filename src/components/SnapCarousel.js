import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
// import ImageModal from 'react-native-image-modal';
import { Image } from "react-native-expo-image-cache";

const WIDTH = Dimensions.get("window").width;

class SnapCarousel extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          imageBackgroundColor="black"
          uri={item.url}
          style={{ height: (WIDTH - 60) * 0.75, width: WIDTH}}
        />
      </View>
    );
  };

  render() {
    return (
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={this.props.images}
        renderItem={this._renderItem}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        layout="default"
        removeClippedSubviews
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: WIDTH*0.75,
    justifyContent: "center",
    marginVertical: 15,
    backgroundColor: "black",
    overflow:"hidden"
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
