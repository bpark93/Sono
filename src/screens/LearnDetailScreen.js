import React, { useEffect, useRef } from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, TouchableOpacity, Platform, StatusBar,SafeAreaView} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';


const LearnDetailScreen = ({route, navigation}) => {
    const {id} = route.params;
    const width = useWindowDimensions().width
    const height = width*9/16;
    const playerRef = useRef(null);

    useEffect(()=> {
        navigation.addListener('blur', ()=> {
            playerRef.current.pauseAsync();
        })
    },[navigation])

    return (
        <>
            <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'black', height:70+height}}>
                <TouchableOpacity style={{flex:1}} onPress={()=> navigation.goBack()} >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="white" style={{position: 'absolute', top:50, left:15 }}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:70}}>
                {/* <YoutubePlayer
                        height={height}
                        width={width}
                        videoId={id.video}
                        play={true}
                        volume={50}
                        playbackRate={1}
                        playerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: false,
                            preventFullScreen:true,
                        }}
                /> */}
                <Video
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
            </View>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>{id.title}</Text>
                <Text style={styles.body}>{id.captionText}</Text>
                <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:20, }}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="bookmark-outline" size={30} color="gray" />
                        <Text style={styles.buttonText}>Bookmark</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="file-document-box-outline" size={30} color="gray" />
                        <Text style={styles.buttonText}>Transcript</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="download" size={30} color="gray" />
                        <Text style={styles.buttonText}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="trophy-outline" size={30} color="gray" />
                        <Text style={styles.buttonText}>Take the Quiz</Text>
                    </TouchableOpacity>
                </View>
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