import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {setBookmark, removeBookmark, getBookmark} from '../components/useBookmark'

const LearnDetailButtons = ({progress, pageInfo, snackToggle, modalToggle, transcriptToggle}) => {
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

    const [downloadPressed, setDownloadPressed] = useState(false);
       
    return (
            <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:20, }}>
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

                <TouchableOpacity style={styles.touchable} onPress={() => transcriptToggle()}>
                    <MaterialCommunityIcons name="file-document-box-outline" size={30} color="gray" />
                    <Text style={styles.buttonText}>Transcript</Text>
                </TouchableOpacity>

                {downloadPressed?
                <TouchableOpacity style={styles.touchable} onPress={() => setDownloadPressed(false)}>
                    <MaterialCommunityIcons name="check-bold" size={30} color="green" />
                    <Text style={styles.buttonText}>Downloaded</Text>
                </TouchableOpacity>
                :<TouchableOpacity style={styles.touchable} onPress={() => setDownloadPressed(true)}>
                    <MaterialCommunityIcons name="download" size={30} color="gray" />
                    <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>
                }

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