import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const LearnDetailButtons = ({progress}) => {
    return (
            <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:20, }}>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="bookmark-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="file-document-box-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Transcript</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="download" size={30} color="gray" />
                    <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>
                {progress === "100"? 
                <TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="trophy-outline" size={30} color="#f1c40f" />
                    <Text style={{...styles.buttonText, color:"#f1c40f"}}>Quiz Complete!</Text>
                </TouchableOpacity>
                :<TouchableOpacity style={styles.touchable}>
                    <MaterialCommunityIcons name="trophy-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Take the Quiz</Text>
                </TouchableOpacity>
                }
            </View>
    )
}

const styles = StyleSheet.create({
    buttonText:{
        color:'gray',
        fontSize:12
    },
    touchable: {
        alignItems:'center',
        // width:100
    }
});

export default LearnDetailButtons;