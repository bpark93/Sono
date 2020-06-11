import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import LearnModuleItem from '../components/LearnModuleItem'
import QuizLink from '../components/QuizLink'


const LearnModuleScreen = ({route, navigation}) => {
  const {id} = route.params;
    
  return (
    <ScrollView style={{flex:1, backgroundColor:'white'}}>
      {id.pages.map((page, index) => (
       <LearnModuleItem page={page} key={page.title} index={index+1}/>
      ))}
      <QuizLink name={id.title}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({});

export default LearnModuleScreen;