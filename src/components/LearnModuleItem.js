import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {getLearnProgress, setLearnProgress} from '../components/getLearnDatabase'

const LearnModuleItem = ({page, index, category}) => {
    const navigation = useNavigation();
    const windowWidth = useWindowDimensions().width

    const [pressed, setPressed] = useState(false);
    const handlePress = () => {
        setPressed(!pressed)
    }

    const [progress, setProgress] = useState(null);
    useEffect(() => {
        const x = async () => {
            const xx = await getLearnProgress(page.id);
            setProgress(xx)
        }
        const unsubscribe = navigation.addListener('focus', ()=> {
            x();
        })
        return () => unsubscribe();
    },[navigation])

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
                {progress === '0'?
                    <View style={{justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => navigation.replace('LearnDetail', {id: page, category})} style={styles.start}>
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quiz}>
                            <Text style={styles.buttonText}>Take Quiz</Text>
                        </TouchableOpacity>
                    </View>
                :   progress === '100'?
                    <View style={{justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => navigation.replace('LearnDetail', {id: page, category})} style={styles.done}>
                            <Text style={styles.buttonText}>Complete</Text>
                            <FontAwesome name="check-circle" size={14} color='white' style={{marginLeft:5}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.done}>
                            <Text style={styles.buttonText}>Retake Quiz</Text>
                        </TouchableOpacity>
                    </View>
                :   <View style={{justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => navigation.replace('LearnDetail', {id: page, category})} style={styles.continue}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quiz}>
                            <Text style={styles.buttonText}>Take Quiz</Text>
                        </TouchableOpacity>
                    </View>
                }
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
        width:150, 
        backgroundColor:'#2ecc71', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    quiz:{
        height:50, 
        width:150, 
        backgroundColor:'#5FC9F8', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
    continue:{
        height:50, 
        width:150, 
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