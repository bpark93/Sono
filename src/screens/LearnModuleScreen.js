import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Animated, TouchableOpacity} from 'react-native'
import LearnModuleItem from '../components/LearnModuleItem'
import QuizLink from '../components/QuizLink'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LearnModuleScreen = ({route, navigation}) => {
  const {id} = route.params;

  const HEADER_MAX_HEIGHT = 180
  const HEADER_MIN_HEIGHT = 100
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate:'clamp'
  })
  const textFontSize = scrollY.interpolate({
    inputRange:[50,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[30, 18],
    extrapolate:'clamp'
  })
  const textMarginLeft = scrollY.interpolate({
    inputRange:[50,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[15, 60],
    extrapolate:'clamp'
  })
  const textMarginBottom = scrollY.interpolate({
    inputRange:[50,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[10, 30],
    extrapolate:'clamp'
  })
    
  return (
    <View style={{flex:1}}>
      <Animated.View style={{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        backgroundColor:'#4f2683',
        height:headerHeight,
        justifyContent:'flex-end'
      }} >
          <TouchableOpacity style={{flex:1, width:100}} onPress={()=> navigation.goBack()} >
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" style={styles.backIconStyle}/> 
            {/* Not clicking when scrolled up on Android */}
          </TouchableOpacity>
          <Animated.Text style={{
            fontFamily:"Raleway-Bold",
            fontSize:textFontSize, 
            color:'white',
            marginLeft:textMarginLeft,
            marginBottom:textMarginBottom,
          }}>{id.title}</Animated.Text>
      </Animated.View>
      <ScrollView 
        style={{flex:1, marginTop:HEADER_MIN_HEIGHT, paddingTop:HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+10}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY} }}]
        )}
        scrollEventThrottle={16}
      >
        <View style={{flex:1, marginBottom:100, backgroundColor:'white'}}>
          {id.pages.map((page, index) => (
          <LearnModuleItem page={page} key={page.title} index={index+1} category={id.title}/>
          ))}
          <QuizLink name={id.title}/>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  backIconStyle:{
    position: 'absolute',
    top:45, 
    left:15, 
    zIndex:1
  }
});

export default LearnModuleScreen;