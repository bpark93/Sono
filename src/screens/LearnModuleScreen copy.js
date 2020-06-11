import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Animated} from 'react-native'
import LearnModuleItem from '../components/LearnModuleItem'
import QuizLink from '../components/QuizLink'

HEADER_MAX_HEIGHT = 180
HEADER_MIN_HEIGHT = 70

const LearnModuleScreen = ({route, navigation}) => {
  const {id} = route.params;

  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
    outputRange:[HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT]
  })
    
  return (
    <View style={{flex:1}}>
      <Animated.View style={{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        backgroundColor:'#9b59b6',
        height:headerHeight,
      }} >

      </Animated.View>
      <ScrollView 
        style={{flex:1, backgroundColor:'white', marginTop:HEADER_MAX_HEIGHT}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffet: {y: scrollY} }}]
        )}
      >
        {id.pages.map((page, index) => (
        <LearnModuleItem page={page} key={page.title} index={index+1}/>
        ))}
        <QuizLink name={id.title}/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({});

export default LearnModuleScreen;