import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import * as ScreenOrientation from 'expo-screen-orientation';

const SettingsHelpScreen = () => {

    return (
        
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
            <Image source={require('../../assets/crane.png')} style={{height: 200, width:200, marginBottom:20}}/>
            <Text>Under construction</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignContent: 'space-around'
    },
})

export default SettingsHelpScreen;