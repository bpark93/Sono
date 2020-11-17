import React from 'react'
import {View, StyleSheet, ScrollView, Animated, TouchableOpacity, Text,} from 'react-native'
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
        justifyContent:'flex-end',
        zIndex:1
      }} >
          <TouchableOpacity style={{flex:1, width:100}} onPress={()=> navigation.navigate("LearnMain")} >
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
        style={{flex:1, marginTop:HEADER_MIN_HEIGHT, paddingTop:HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+10, backgroundColor:'white'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY} }}],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={{flex:1, marginBottom:100, backgroundColor:'white'}}>
          {id.description ? (
            <Text style={{paddingHorizontal:15, color:'gray', fontFamily:'Raleway-Regular', borderBottomWidth:0.5, borderBottomColor:'#E0E0E0', paddingBottom:10}}>{id.description}</Text> 
          ): null}
          {Object.entries(id.pages).map((section) => (
            <View key={section[0]} style={{marginVertical:15}}>
              {section[0] ? <Text style={{fontWeight:'bold', fontSize:24, marginHorizontal:15, marginVertical:10, }}>{section[0]}</Text>:null}
              {section[1].map((item, index) => (
                <LearnModuleItem page={item} index={index+1} category={id.title} key={item.title}/>
              ))}
            </View>
          ))}
          <QuizLink name={id.title} id={id.id}/>
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