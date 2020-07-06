import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {getLearnProgress} from '../components/getLearnDatabase'
import { ProgressBar } from 'react-native-paper';

const LearnModuleItem = ({page, index, category}) => {
    const navigation = useNavigation();
    const windowWidth = useWindowDimensions().width

    const [pressed, setPressed] = useState(false);
    const handlePress = () => {
        setPressed(!pressed)
        updateProgress();
    }

    const [progress, setProgress] = useState(null);
    const updateProgress = async () => {
        const learnProgressStorage = await getLearnProgress(page.id);
        setProgress(learnProgressStorage)
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', ()=> {
            updateProgress();
        })
        return () => unsubscribe();
    },[navigation])
    const percentage = parseInt(progress)/100

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => handlePress()}
                // activeOpacity={0.8}
            >
                <View style={styles.moduleStyle}>
                    <Text style={{fontFamily:'Raleway-Light', fontSize:14, width:50}}>{index}. </Text>
                    <Text style={{fontFamily:'Raleway-Regular', fontSize:18, width:windowWidth-100}}>{page.title}</Text>
                    {progress === '100'?
                        <FontAwesome name="check-circle" size={18} color='green'/>
                    :   progress === '0'?
                        <FontAwesome name="play-circle" size={18} color='gray'/>
                    :   <FontAwesome name="play-circle" size={18} color='#2980b9'/>
                    }
                </View>
            </TouchableOpacity>
            
            {pressed? 
                <>
                <Text style={styles.shortText} numberOfLines={5}>{page.captionText}</Text>
                <View style={{justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
                    <ProgressBar progress={percentage} color="#4f2683" style={{width:150}}/>
                    <Text style={{color:'gray', fontSize:14, fontFamily:'Raleway-Regular'}}>{progress}%</Text>
                    <TouchableOpacity 
                        onPress={() => navigation.replace('LearnDetail', {id: page, category})} 
                        style={progress==='0'? styles.start : progress==='100'? styles.done : styles.continue}
                    >
                        <Text style={styles.buttonText}>{progress==='0'? "Start" : progress==='100'? "Complete" : "Continue"}</Text>
                    </TouchableOpacity>
                </View>
                </>
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    moduleStyle:{
        alignItems:'center',
        margin: 15,
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    container: {
        flex:1,
        borderBottomWidth:0.5,
    },
    start:{
        height:50, 
        width:100, 
        backgroundColor:'#2ecc71', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    quiz:{
        height:50, 
        width:100, 
        backgroundColor:'#5FC9F8', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    continue:{
        height:50, 
        width:100, 
        backgroundColor:'#2980b9', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    done:{
        height:50, 
        width:150, 
        backgroundColor:'#FECB2E', 
        borderRadius:30, 
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    buttonText:{
        fontFamily:"Raleway-Bold",
        color:'white'
    },
    shortText:{
        fontFamily:"Raleway-Regular",
        color:'gray',
        marginHorizontal:15
    }
})

export default LearnModuleItem;