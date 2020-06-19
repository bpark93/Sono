import React, { useEffect, useRef, useState } from 'react'
import {View, Text, StyleSheet, Image, Modal, ScrollView,useWindowDimensions,TouchableOpacity, Platform, SafeAreaView} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import LearnDetailButtons from '../components/LearnDetailButtons'
import {setLearnProgress, getLearnProgress} from '../components/getLearnDatabase'
import {Snackbar} from 'react-native-paper'
import * as ScreenOrientation from 'expo-screen-orientation';

const LearnDetailScreen = ({route, navigation}) => {
    const {id, category} = route.params;
    const width = useWindowDimensions().width
    const height = width*9/16;
    const playerRef = useRef(null);
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        const checkProgress = async () => {
            const pageprogress = await getLearnProgress(id.id)
            if (pageprogress === "0"){
                setLearnProgress(id.id, "10");
            }
            setProgress(pageprogress)
        }
        checkProgress();
    },[])

    const [snackVisible, setSnackVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [transcriptToggled, setTranscriptToggled] = useState(false)


    if (id.video){
        useEffect(()=> {
            const unsubscribe = navigation.addListener('blur', ()=> {
                playerRef.current.pauseAsync();
            })
            return () => unsubscribe();
        },[navigation])
    }

    const handleFullscreen = async (event) => {
        if (event.fullscreenUpdate === 0){
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            console.log("HELLO")
        } else if (event.fullscreenUpdate === 2){
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            console.log("FUCK YOU")
        }
    }

    return (
        <View style={{flex:1}}>
            {/* <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'black', height:70+height}}></View> */}
            {/* <StatusBar style="light" translucent/> 
                FOR SOME REASON PERSISTS ON OTHER SCREENS on Android
            */}
            <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()} >
                <MaterialCommunityIcons name="arrow-left" size={24} color="white"/>
            </TouchableOpacity>
            <View style={{alignItems:"center", backgroundColor:'black'}}>
                <View style={{marginTop:30}}>
                { id.youtube ? 
                <YoutubePlayer
                        height={height}
                        width={width}
                        videoId={id.youtube}
                        play={true}
                        volume={50}
                        playbackRate={1}
                        playerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: false,
                        }}
                        
                />
                :<Video
                    ref={playerRef}
                    source={{ uri: id.video}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    useNativeControls
                    onFullscreenUpdate={event => handleFullscreen(event)}
                    style={{ 
                        width: width,
                        height: height,
                    }}
                />
                }
                </View>
            </View>
            {!transcriptToggled? 
            <ScrollView style={styles.container} containerStyle={{justifyContent:'space-between', flex:1}}>
                <View style={{flex:1}}>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.header}>{id.title}</Text>
                    <Text style={styles.body}>{id.captionText}</Text>
                    <LearnDetailButtons 
                        progress={progress} 
                        pageInfo={id} 
                        snackToggle={() => setSnackVisible(true)}
                        modalToggle={() => setModalVisible(true)}
                        transcriptToggle={() => setTranscriptToggled(true)}
                    />
                </View>
                {/* <View>
                    <Text style={styles.header}>Next Up</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Next Unit goes here</Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
            :<View style={{...styles.container, alignItems:'flex-end'}}>
                <TouchableOpacity style={styles.transcriptButton} onPress={() => setTranscriptToggled(false)}>
                    <MaterialCommunityIcons name="close" size={24} color="black"/>
                </TouchableOpacity>
                <ScrollView>
                    <Text style={styles.body}>{id.transcript}</Text>
                </ScrollView>
            </View>
            }
            <Snackbar 
                visible={snackVisible}
                onDismiss={() => setSnackVisible(false)}
                duration={3000}
                action={{
                    label:"Okay",
                    onPress: () => setSnackVisible(false)
                }}
            >"{id.title}" added to Bookmarks</Snackbar>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}

            >
                <View style={styles.modalView}>
                    <Text style={styles.header}>{id.title}: Lesson Quiz</Text>
                    <TouchableOpacity style={{...styles.modalButton, backgroundColor:'#2ecc71'}} >
                        <Text style={{color:'white', fontFamily:'Raleway-Bold'}}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.modalButton, backgroundColor:'#2980b9'}} onPress={() => setModalVisible(false)}>
                        <Text style={{color:'white', fontFamily:'Raleway-Bold'}}>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        marginHorizontal:15,
        marginBottom:5,
        fontSize:22,
        fontFamily:'Raleway-Bold'
    },
    body:{
        marginHorizontal:15,
        fontFamily:'Raleway-Regular',
    },
    category:{
        marginHorizontal:15,
        fontSize:16,
        fontFamily:"Raleway-Light",
        color:'gray',
        marginTop:20,
    },
    container:{
        flex:1, 
        backgroundColor:'#FFFFFF'
    },
    link:{
        marginHorizontal:15,
        fontFamily:'Raleway-Regular',
        color:'#3498db'
    },
    buttonText:{
        color:'gray',
        fontSize:12
    },
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modalButton:{
        height:50, 
        width:100, 
        borderRadius:20, 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:15
    },
    transcriptButton:{
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    },
    backButton:{
        position:'absolute', 
        top:40, 
        left:15, 
        width:30, 
        height:30,
        zIndex:1
    }
});

export default LearnDetailScreen;