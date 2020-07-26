import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const QuizLink = ({name, id}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', width:300, alignItems:'center'}}>
                <MaterialCommunityIcons name="crown" size={24} style={{marginRight:10}} />
                <Text style={styles.text}>{name}: Module Test</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Test', {id: id})}>
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
        borderRadius:30,
        backgroundColor:'#2980b9',
        alignItems:'center',
        justifyContent:'center',
        margin:15
    },
    text:{
        fontFamily:'Raleway-Regular',
        fontSize:20,
    },
    buttonText:{
        fontFamily:'Raleway-Bold',
        fontSize:20,
        color:'white'
    }
});

export default QuizLink;