import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import * as ScreenOrientation from 'expo-screen-orientation';

const SettingsHelpScreen = () => {
    const [height, setHeight] = useState(200)
    const [fullscreen, setFullscreen] = useState(false)
    async function changeOrientation() {
        setFullscreen(!fullscreen);
        // await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
    useEffect(() => {
        height===200&&fullscreen===false?
            setHeight(400)
            :setHeight(200)
    },[fullscreen])

    return (
        
        <>
        {console.log(fullscreen)}
        <View>
            <VideoPlayer
                videoProps={{
                    shouldPlay:true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
                }}
                inFullscreen={fullscreen}
                height={height}
                switchToLandscape={() => changeOrientation()}
                switchToPortrait={() => changeOrientation()}

            />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', borderWidth:3, borderColor:"red"}}>
            <Text>Hi</Text>
        </View>
        </>
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