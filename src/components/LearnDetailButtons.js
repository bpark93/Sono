import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {setBookmark, removeBookmark, getBookmark} from '../components/useBookmark'

const LearnDetailButtons = ({progress, pageInfo, snackToggle, modalToggle, transcriptToggle, noteToggle}) => {
    const [savePressed, setSavePressed] = useState(false);
    useEffect(() => {
        async function bookmarkChecker() {
            const temp = await getBookmark();
            for (let i in temp){
                if (temp[i] === pageInfo.id){
                    setSavePressed(true)
                } 
            }
        }
        bookmarkChecker();
    },[])

    const [notePressed, setNotePressed] = useState(false);
       
    return (
            <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:20, }}>

                {/* Save/Bookmark Button */}
                {savePressed? 
                <TouchableOpacity 
                    style={styles.touchable} 
                    onPress={async () => {
                        await removeBookmark(pageInfo.id);
                        setSavePressed(!savePressed);
                    }}>
                    <MaterialCommunityIcons name="bookmark" size={30} color="#f1c40f" />
                    <Text style={styles.buttonText}>Saved</Text>
                </TouchableOpacity>
                :<TouchableOpacity 
                    style={styles.touchable} 
                    onPress={async () => {
                        await setBookmark(pageInfo.id);
                        setSavePressed(!savePressed);
                        snackToggle();
                    }}>
                    <MaterialCommunityIcons name="bookmark-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                }

                {/* Transcript Button */}
                <TouchableOpacity style={styles.touchable} onPress={() => {
                    transcriptToggle()
                    noteToggle();
                }}>
                    <MaterialCommunityIcons name="file-document-box-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Transcript</Text>
                </TouchableOpacity>

                {/* Note Button */}
                {notePressed?
                <TouchableOpacity style={styles.touchable} onPress={() => {
                    setNotePressed(!notePressed);
                    noteToggle();
                }}>
                    <MaterialCommunityIcons name="notebook-outline" size={30} color="red" />
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
                :<TouchableOpacity style={styles.touchable} onPress={() => {
                    setNotePressed(!notePressed)
                    noteToggle();
                }}>
                    <MaterialCommunityIcons name="notebook-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Notes</Text>
                </TouchableOpacity>
                }

                {/* Quiz Button */}
                {progress === "100"? 
                <TouchableOpacity style={styles.touchable} onPress={() => modalToggle()}>
                    <MaterialCommunityIcons name="trophy" size={30} color="#f1c40f" />
                    <Text style={{...styles.buttonText, color:"#f1c40f"}}>Quiz Complete!</Text>
                </TouchableOpacity>
                :<TouchableOpacity style={styles.touchable} onPress={() => modalToggle()}>
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
        width:100
    }
});

export default LearnDetailButtons;