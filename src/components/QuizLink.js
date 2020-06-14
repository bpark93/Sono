import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuizLink = ({name}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', width:300, alignItems:'center'}}>
                <MaterialCommunityIcons name="crown" size={24} style={{marginRight:10}} />
                <Text style={styles.text}>{name}: Module Test</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:15
    },
    button:{
        height:50,
        width:150,
        borderWidth:0.5,
        borderRadius:30,
        borderColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        margin:15
    },
    text:{
        fontFamily:'Raleway-Regular',
        fontSize:20,
        
    },
    buttonText:{
        fontFamily:'Raleway-Regular',
        fontSize:20,
    }
});

export default QuizLink;