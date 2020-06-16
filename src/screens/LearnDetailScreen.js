import React, { useEffect, useRef, useState } from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, TouchableOpacity, Platform, StatusBar,SafeAreaView} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import LearnDetailButtons from '../components/LearnDetailButtons'
import {setLearnProgress, getLearnProgress} from '../components/getLearnDatabase'


const LearnDetailScreen = ({route, navigation}) => {
    const {id} = route.params;
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
    })

    if (id.video){
        useEffect(()=> {
            const unsubscribe = navigation.addListener('blur', ()=> {
                playerRef.current.pauseAsync();
            })
            return () => unsubscribe();
        },[navigation])
    }

    return (
        <>
            <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'black', height:70+height}}>
                <TouchableOpacity style={{flex:1}} onPress={()=> navigation.goBack()} >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="white" style={{position: 'absolute', top:50, left:15 }}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:70}}>
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
                            preventFullScreen:true,
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
            <ScrollView style={styles.container}>
                <Text style={styles.header}>{id.title}</Text>
                <Text style={styles.body}>{id.captionText}</Text>
                <LearnDetailButtons progress={progress}/>
                <View style={{alignItems:'flex-end', marginTop:15}}>
                    <Text style={styles.header}>Next Up</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Next Unit goes here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    header:{
        marginHorizontal:15,
        marginTop:20,
        marginBottom:5,
        fontSize:20,
        fontFamily:'Raleway-Bold'
    },
    body:{
        marginHorizontal:15,
        fontFamily:'Raleway-Regular',
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
    }
});

export default LearnDetailScreen;