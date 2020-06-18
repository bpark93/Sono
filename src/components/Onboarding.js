import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from "lottie-react-native";

const slides = [
    {
      key: '1',
      title: 'Learn Ultrasound',
      text: 'Learn the tool that is revolutionizing\ncare in nearly every medical and\nsurgical specialty',
      image: require('../../assets/carousel1.png'),
      animation: require('../../assets/lottie/phonetest.json'),
      backgroundColor: '#FFFFFF',
    },
    {
      key: '2',
      title: 'Solve Cases',
      text: 'Work your way through realistic and\ncomprehensive teaching cases with\ndetailed answer keys',
      image: require('../../assets/carousel2.png'),
      animation: require('../../assets/lottie/workingOffice.json'),
      backgroundColor: '#FFFFFF',
    },
    {
      key: '3',
      title: 'Quickly find images',
      text: 'Access a vast library of normal and\npathologic findings',
      image: require('../../assets/carousel3.png'),
      animation: require('../../assets/lottie/video.json'),
      backgroundColor: '#FFFFFF',
    }
];

const _renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <LottieView source={item.animation} style={{width:400, height:400}} autoPlay loop/> */}
        <Image source={item.image} style={{width:250, height:250}}/>
        <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome
        name="chevron-right"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );
};

const _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome
          name="chevron-left"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
};

const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome
        name="check"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:80
  },
  title: {
    paddingBottom:30,
    fontSize: 30,
    fontFamily:'Raleway-Medium'
  },
  text: {
    paddingTop:60,
    fontFamily:'Raleway-Light'
  }
});

export default Onboarding = ({onDoneClick}) => {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderPrevButton={_renderPrevButton} // DOESN'T WORK
        activeDotStyle={{backgroundColor: '#000000'}}
        onDone={() => onDoneClick(false)} //FIX BACK TO FALSE WHEN DONE
      />
    );
}
