import React, { useState, useRef, useEffect } from 'react'
import {View, StyleSheet, Text,Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import {testDatabase} from '../../database'
import Constants from "expo-constants";
import { Video } from 'expo-av';
import Carousel from 'react-native-snap-carousel';
import {RadioButton, Button, Portal, Dialog} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const LearnTestScreen = ({route}) => {
    const navigation = useNavigation();
    
    const {id} = route.params
    const selectedTest = testDatabase.find(item => item.id === id) 

    const [startPressed, setStartPressed] = useState(false)
    const [submitPressed, setSubmitPressed] = useState(false)
    const [reviewPressed, setReviewPressed] = useState(false)

    const [questionsAnswered, setQuestionsAnswered] = useState(0)
    const increment = () => {
        setQuestionsAnswered(questionsAnswered+1);
    }

    const [numberCorrect, setNumberCorrect] = useState(0)
    const increaseScore = () => {
        setNumberCorrect(numberCorrect+1)
    }
    const decreaseScore = () => {
        setNumberCorrect(numberCorrect-1)
    }

    const [warningVisible, setWarningVisible] = useState(false)

    return (
        selectedTest? (
            !startPressed? (
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={{
                            position:'absolute',
                            top:45,
                            left:15,
                        }}
                        onPress={()=> navigation.goBack()} 
                    >
                        <MaterialCommunityIcons name="arrow-left" size={24} color="black"/> 
                        {/* Not clicking when scrolled up on Android */}
                    </TouchableOpacity>
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
                    {!submitPressed ? (
                        <View>
                            <Text 
                                style={{
                                    fontFamily:'Raleway-Regular', 
                                    fontSize:18
                            }}>
                                {questionsAnswered}/{selectedTest.count} Questions Answered
                            </Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                    mode='text'
                                    icon='exit-run'
                                    color='red'
                                    style={{
                                        marginHorizontal:10
                                    }}
                                    onPress={() => setWarningVisible(true)}
                                >Quit test</Button>

                                {questionsAnswered === selectedTest.count ? (
                                    <Button
                                        mode='contained'
                                        color='green'
                                        icon='thumb-up-outline'
                                        style={{
                                            marginHorizontal:10
                                        }}
                                        onPress={() => setSubmitPressed(true)}
                                    >Submit</Button>
                                    ):null
                                }
                            </View>
                        </View>
                        ):(
                            <View>
                                <Text 
                                    style={{
                                        fontFamily:'Raleway-Regular', 
                                        fontSize:28,
                                        alignSelf:'center',
                                        marginBottom: reviewPressed ? 5 : 20
                                }}>
                                    Your score is {Math.floor(numberCorrect/selectedTest.count*100)}%
                                </Text>
                                <View style={{flexDirection:'row'}}>
                                    <Button
                                        mode='text'
                                        icon='exit-run'
                                        color='red'
                                        style={{
                                            marginHorizontal: 10,
                                        }}
                                        onPress={() => navigation.goBack()}
                                    >Exit</Button>
                                    {!reviewPressed && (
                                    <Button
                                        mode='contained'
                                        color='blue'
                                        icon='book-open-page-variant'
                                        style={{
                                            marginHorizontal:10
                                        }}
                                        onPress={() => setReviewPressed(true)}
                                    >Review Questions</Button>
                                    )}
                                </View>
                            </View>
                        )
                    }
                    {submitPressed && reviewPressed || !submitPressed&&!reviewPressed ? 
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={selectedTest.questions}
                        renderItem={({item, index}) => {
                            return (
                                <QuizQuestions 
                                    data={item} 
                                    increment={() => increment()}
                                    increaseScore={() => increaseScore()}
                                    decreaseScore={() => decreaseScore()}
                                    index={index}
                                    reviewPressed={reviewPressed}
                                />
                        )}}
                        sliderWidth={Width-10}
                        itemWidth={Width-20}
                        itemHeight={Height-50}
                        layout="default"
                        color='#4f2683'
                    />:null}

                    <Portal>
                        <Dialog visible={warningVisible} onDismiss={() => setWarningVisible(false)}>
                        <Dialog.Title>Are you sure you want to quit the test?</Dialog.Title>
                        <Dialog.Content>
                            <Text>Your progress will not be saved.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setWarningVisible(false)}>Cancel</Button>
                            <Button onPress={() => {
                                navigation.goBack()
                                setWarningVisible(false)
                            }}>Quit</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
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

const QuizQuestions = ({data, index, increment, increaseScore, decreaseScore, reviewPressed}) => {
    const playerRef = useRef(null)
    const [value, setValue] = useState('');
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)

    // Set answered to true if user picks an answer
    useEffect(() => {
        if (value.length != 0){
            setAnswered(true);
        }
        if (value === data.correct){
            setCorrect(true)
        } else{
            setCorrect(false)
        }
    },[value])

    // Increment the total # of answered questions if user picks an answer
    useEffect(() => {
        if (answered){
            increment();
        }
    },[answered])

    // Calculate whether user picked correct answer; increment score if yes
    useEffect(() => {
        if (answered && correct){
            increaseScore();
        } else if (answered && !correct) {
            decreaseScore();
        }
    },[correct])
    

    return (
        <ScrollView 
            style={{
                backgroundColor:'white',
                borderColor:'#eeeeee',
                borderWidth:1,
                borderRadius:20, 
                elevation:2, 
                margin:5, 
            }} 
            contentContainerStyle={{alignItems:'center'}}
            showsVerticalScrollIndicator={false}
        >
            <Text 
                style={{
                    fontFamily:'Raleway-Bold', 
                    fontSize:24, color:'#4f2683', 
                    marginVertical:20
                }}
            >{`Question ${index+1}`}</Text>
            <Text 
                style={{
                    fontSize:16, 
                    marginBottom:20,
                    marginHorizontal:20
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
                        borderRadius:20,
                        marginBottom:10
                    }}
                />
            )}
            {!reviewPressed ?
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                {data.answers.map(answer => (
                    // <View key={answer} style={{borderRadius:20, marginTop:20, marginHorizontal:30, padding:10, elevation:2}}>
                        <View 
                            key={answer} 
                            style={{
                                width:Width-80,  
                                borderRadius:20, 
                                backgroundColor:'#F5F5F5',
                                marginBottom:10,
                                overflow:'hidden'
                            }}
                        >
                            <RadioButton.Item 
                                value={answer}
                                label={answer}
                                labelStyle={{width:Width-150}}
                            />
                        </View>
                ))}
            </RadioButton.Group>
            : (
                <>
                <RadioButton.Group onValueChange={value => setValue(value)} value={data.correct}>
                    {data.answers.map(answer => (
                        // <View key={answer} style={{borderRadius:20, marginTop:20, marginHorizontal:30, padding:10, elevation:2}}>
                            <View 
                                key={answer} 
                                style={{
                                    width:Width-80,  
                                    borderRadius:20, 
                                    backgroundColor:'#F5F5F5',
                                    marginBottom:10,
                                    overflow:'hidden'
                                }}
                            >
                                <RadioButton.Item 
                                    value={answer}
                                    label={answer}
                                    labelStyle={{width:Width-150}}
                                    disabled
                                />
                            </View>
                    ))}
                </RadioButton.Group>
                <Text 
                    style={{
                        fontFamily:'Raleway-Bold', 
                        fontSize:24, color:'#4f2683', 
                        marginVertical:20
                    }}
                >Explanation</Text>
                <Text
                    style={{
                        fontSize:16, 
                        marginBottom:20,
                        marginHorizontal:20
                    }}
                >
                    {data.explanation}
                </Text>
                </>
            )}
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