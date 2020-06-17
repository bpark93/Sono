import React, { useEffect, useRef, useState } from 'react'
import {View, Text, StyleSheet, Image, Modal, ScrollView, TouchableOpacity, Platform, StatusBar,SafeAreaView} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';
import LearnDetailButtons from '../components/LearnDetailButtons'
import {setLearnProgress, getLearnProgress} from '../components/getLearnDatabase'
import {Snackbar} from 'react-native-paper'

const LearnDetailScreen = ({route, navigation}) => {
    const {id, category} = route.params;
    // const width = useWindowDimensions().width
    // const height = width*9/16;
    const width = 400;
    const height = 225;
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
    const onDismissSnackbar = () => {
        setSnackVisible(false)
    }

    const [modalVisible, setModalVisible] = useState(false)
    const onRequestCloseModal = () => {
        setModalVisible(false)
    }

    const [transcriptToggled, setTranscriptToggled] = useState(false)
    const onTranscriptDismissed = () => {
        setTranscriptToggled(false)
    }

    if (id.video){
        useEffect(()=> {
            const unsubscribe = navigation.addListener('blur', ()=> {
                playerRef.current.pauseAsync();
            })
            return () => unsubscribe();
        },[navigation])
    }

    return (
        <View style={{flex:1}}>
            <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'black', height:70+height}}>
                <TouchableOpacity style={{flex:1}} onPress={()=> navigation.goBack()} >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="white" style={{position: 'absolute', top:50, left:15 }}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:70, alignItems:"center"}}>
                { id.youtube ? 
                <YoutubePlayer
                        height={225}
                        width={400}
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
                    style={{ 
                        width: width,
                        height: height,
                    }}
                />
                }
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
                onDismiss={() => onDismissSnackbar()}
                duration={3000}
                action={{
                    label:"Okay",
                    onPress: () => onDismissSnackbar()
                }}
            >"{id.title}" added to Bookmarks</Snackbar>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => onRequestCloseModal()}

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
    }
});

export default LearnDetailScreen;