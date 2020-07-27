import React, { useState, useRef } from 'react'
import {View, StyleSheet, Text,Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import {testDatabase} from '../../database'
import Constants from "expo-constants";
import { Video } from 'expo-av';
import Carousel from 'react-native-snap-carousel';
import {RadioButton, } from 'react-native-paper'

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const LearnTestScreen = ({route}) => {
    const {id} = route.params
    const selectedTest = testDatabase.find(item => item.id === id) 

    const [startPressed, setStartPressed] = useState(false)
    const [submitPressed, setSubmitPressed] = useState(false)
    const [questionsAnswered, setQuestionsAnswered] = useState(0)
    const increment = () => {
        setQuestionsAnswered(questionsAnswered+1);
    }

    return (
        selectedTest? (
            !startPressed? (
                <View style={styles.container}>
                    <Image source={selectedTest.image} style={{height:150, width:150, marginBottom:20}}/>
                    <Text style={styles.header}>{selectedTest.title}</Text>
                    <Text style={styles.caption}>Ready to put your new-found knowledge to the test? Click the button below to get started. </Text>
                    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setStartPressed(true)}
                    >
                        <Text style={{color:'white'}}>START</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:10}}>
                        {`Total number of questions: ${selectedTest.count}\nEstimated length: ${selectedTest.eta} minutes`}
                    </Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={selectedTest.questions}
                        renderItem={({item, index}) => {
                            return (
                                <QuizQuestions data={item} increment={() => increment()} index={index}/>
                        )}}
                        sliderWidth={Width-10}
                        itemWidth={Width-20}
                        itemHeight={Height-50}
                        layout="default"
                        ListFooterComponent={() => {
                            return (
                                <View>
                                    {/* Submit button */}
                                </View>
                        )}}
                    />
                </View>
            )
        ) : (
            <View style={styles.container}>
                <Image source={require('../../assets/crane.png')} style={{height:200, width:200, marginBottom:20}}/>
                <Text>This module test is being developed. Stay tuned!</Text>
            </View>
        )
    )
};

const QuizQuestions = ({data, index, increment}) => {
    const playerRef = useRef(null)
    const [value, setValue] = useState('first');

    return (
        <ScrollView 
            style={{backgroundColor:'#ecf0f1', borderRadius:20, }} 
            contentContainerStyle={{alignItems:'center'}}
            showsVerticalScrollIndicator={false}
        >
            <Text 
                style={{
                    fontFamily:'Raleway-Bold', 
                    fontSize:24, color:'#4f2683', 
                    margin:30
                }}
            >{`Question ${index+1}`}</Text>
            <Text 
                style={{
                    fontSize:18, 
                    marginBottom:20,
                    marginHorizontal:10
                }}
            >{data.content}</Text>
            {data.video && (
                <Video 
                    ref={playerRef}
                    source={{uri: data.video}}
                    rate={1.0}
                    volume={1.0}
                    useNativeControls={false}
                    shouldPlay={true}
                    isLooping
                    resizeMode='contain'
                    style={{
                        width:Width-20,
                        height:(Width-20)*0.75,
                        borderRadius:20
                    }}
                />
            )}
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                {data.answers.map(answer => (
                    <View key={answer} style={{backgroundColor:'white', borderRadius:20, marginVertical:10, marginHorizontal:30, padding:10, flex:1}}>
                        <RadioButton.Item 
                            value={answer}
                            label={answer}
                            style={{marginHorizontal:20}}
                        />
                    </View>
                ))}
            </RadioButton.Group>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white', 
        paddingHorizontal:10, 
        paddingTop: Constants.statusBarHeight+20,
        fontFamily:'Raleway-Regular'
    },
    header:{
        fontSize:24,
        marginBottom:20,
        marginHorizontal:20
    },
    caption:{
        fontSize:18,
        fontFamily:'Raleway-Regular',
        marginBottom:20,
        marginHorizontal:20
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:10,
        backgroundColor:'#4f2683',
    }
});

export default LearnTestScreen;