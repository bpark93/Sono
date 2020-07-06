import React, { useEffect, useRef, useState } from 'react'
import {View, Text, StyleSheet, Image, Modal, ScrollView,TouchableOpacity, Dimensions} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';
import {learnDatabase} from '../../database'
import LearnDetailButtons from '../components/LearnDetailButtons'
import {setLearnProgress, getLearnProgress} from '../components/getLearnDatabase'
import {Snackbar, TextInput, Button} from 'react-native-paper'
import * as ScreenOrientation from 'expo-screen-orientation';
import Constants from 'expo-constants';

const LearnDetailScreen = ({route, navigation}) => {
    const {id, category} = route.params;
    const videoRef = useRef(null);
    const youtubeRef = useRef(null);

    // Progress
    const [progress, setProgress] = useState(null)
    useEffect(() => {
        const checkProgress = async () => {
            const pageprogress = await getLearnProgress(id.id)
            if (pageprogress === "0"){
                setLearnProgress(id.id, "1");
            }
            setProgress(pageprogress)
        }
        checkProgress();

        const updateProgress = async () => {
            const duration = await youtubeRef.current.getDuration()
            const currentTime = await youtubeRef.current.getCurrentTime()
            const percentage = Math.floor(currentTime/duration*100)
            const temp = await getLearnProgress(id.id)
            const progressInt = parseInt(temp)

            if (percentage > progressInt){
                setLearnProgress(id.id, percentage.toString())
            }
        }
        const unsubscribe = navigation.addListener('blur', ()=> {
            updateProgress();
        })
        return () => unsubscribe();
    },[])

    

    // Orientation manipulation
    const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height;
    const [OrientationMode, setOrientationMode] = useState({
        width: Width,
        height: Width*9/16
    });
    const landscape = () => {
        setOrientationMode({ width: Height, height: Width });
    };
    const portrait = () => {
        setOrientationMode({ width: Width, height: Width*9/16 });
    };
    const handleFullscreenVideo = async (event) => {
        if (event.fullscreenUpdate === 0){
            try{
                landscape();
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            } catch (error){
                console.log(error)
            }
        } else if (event.fullscreenUpdate === 2){
            try{
                portrait();
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            } catch (error){
                console.log(error)
            }
        }
    }
    const handleFullScreenYoutube = async (status) => {
        if (status === true){
            try{
                landscape();
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            } catch (error){
                console.log(error)
            }
        } else if (status === false){
            try{
                portrait();
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            } catch (error){
                console.log(error)
            }
        }
    }

    // Set up for navigation to Modules 
    const categoryId = id.id.split(".")[0]
    const moduleParams = learnDatabase.filter(item => item.id.toString() === categoryId)
    
    // States for Buttons
    const [snackVisible, setSnackVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [transcriptToggled, setTranscriptToggled] = useState(false)
    const [noteVisible, setNoteVisible] = useState(false)

    // To pause video once clicking away
    if (id.video){
        useEffect(()=> {
            const unsubscribe = navigation.addListener('blur', ()=> {
                videoRef.current.pauseAsync();
            })
            return () => unsubscribe();
        },[navigation])
    }

    // Notes 
    const [text, setText] = useState('');
    const textinputRef = useRef(null)


    return (
        <View style={{flex:1}}>
            <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'black', height:20+Height}}></View>
           
            
            <View style={{alignItems:"center", backgroundColor:'black', marginTop: Constants.statusBarHeight}}>
                <View>
                { id.youtube ? 
                <YoutubePlayer
                        ref={youtubeRef}
                        height={OrientationMode.height}
                        width={OrientationMode.width}
                        videoId={id.youtube}
                        play={true}
                        volume={50}
                        playbackRate={1}
                        onFullScreenChange={status => handleFullScreenYoutube(status)}
                        playerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: false,
                        }}
                        
                />
                :<Video
                    ref={videoRef}
                    source={{ uri: id.video}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    useNativeControls
                    onFullscreenUpdate={event => handleFullscreenVideo(event)}
                    style={{ 
                        width: OrientationMode.width,
                        height: OrientationMode.height,
                    }}
                />
                }
                </View>
            </View>
            {!transcriptToggled? 
            <ScrollView style={styles.container} containerStyle={{justifyContent:'space-between', flex:1}}>
                <View style={styles.categoryTouchable}  >
                    <TouchableOpacity 
                        style={{flexDirection:'row', alignItems:'center'}}
                        onPress={()=> navigation.replace('Modules', {id:moduleParams[0]})}
                    >
                        <MaterialCommunityIcons name="chevron-left" size={30} color="#4f2683"/>
                        <Text style={styles.category}>{category}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>{id.title}</Text>
                <LearnDetailButtons 
                    progress={progress} 
                    pageInfo={id} 
                    snackToggle={() => setSnackVisible(true)}
                    modalToggle={() => setModalVisible(true)}
                    transcriptToggle={() => setTranscriptToggled(true)}
                    noteToggle={() => setNoteVisible(!noteVisible)}
                />
                <Text style={styles.body}>{id.captionText}</Text>

                {noteVisible? 
                    <View style={{margin:15, flex:1}}>
                        <Text style={{fontSize:18, fontFamily:'Raleway-Bold', marginBottom:5}}>Notes</Text>
                        <TextInput 
                            ref={textinputRef}
                            mode="outlined"
                            label="Add a new note"
                            value={text}
                            onChangeText={text => setText(text)}
                            multiline={true}
                            numberOfLines={3}
                        />
                        <Button
                            mode="text"
                            onPress={() => {

                                textinputRef.current.clear()
                            }}
                        >Submit</Button>
                    </View>
                    :null
                }
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
        margin:15,
        fontFamily:'Raleway-Regular',
    },
    category:{
        marginHorizontal:10,
        fontSize:20,
        fontFamily:"Raleway-Regular",
        color:'#4f2683',
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
    categoryTouchable:{
        flexDirection:'row',
        marginHorizontal:15,
        marginTop:10,
    }
});

export default LearnDetailScreen;