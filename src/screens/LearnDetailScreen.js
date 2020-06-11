import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const LearnDetailScreen = ({route}) => {
    const {id} = route.params;
    const width = useWindowDimensions().width
    const height = width*9/16;

    return (
        <>
            <YoutubePlayer
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
            />
            <ScrollView style={styles.container}>
                <Text style={styles.header}>{id.title}</Text>
                <Text style={styles.body}>{id.captionText}</Text>
                <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:10, }}>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="bookmark-outline" size={30} color="gray" />
                        <Text color='gray'>Bookmark</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <MaterialCommunityIcons name="file-document-box-outline" size={30} color="gray" />
                        <Text color='gray'>Transcript</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>Next Up</Text>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.link}>Next Unit goes here</Text>
                </TouchableOpacity>
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
    }
});

export default LearnDetailScreen;