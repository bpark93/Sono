import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsHelpScreen = () => {
    return (
        <View style={{flex:1}}>
            <View style={{
                position:'absolute',
                top:0,
                left:0,
                right:0,
                backgroundColor:'#9b59b6',
                height:120,
            }} >
                <Text>HI</Text>
            </View>
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