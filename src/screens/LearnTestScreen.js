import React from 'react'
import {View, StyleSheet, Text,Image } from 'react-native'

const LearnTestScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/crane.png')} style={{height:200, width:200, marginBottom:20}}/>
            <Text>Under Construction</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
});

export default LearnTestScreen;