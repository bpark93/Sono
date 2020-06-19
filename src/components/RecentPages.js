import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {database} from '../../database'
import { FontAwesome5 } from '@expo/vector-icons';

const RECENT = "recent_pages"
const MAX_ITEMS = 5

const RecentPages = () => {
    const navigation = useNavigation();
    const [list, setList] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;
            async function getData() {
                const temp = await getList();
                let finalList = [];
                for (let j=0; j<temp.length; j++){
                    for (let i=0; i<database.length; i++){
                        if (database[i].id === temp[j]){
                            finalList = [...finalList, database[i]]
                        }
                    }
                }
                setList(finalList);
            }
            getData();
        // const unsubscribe = navigation.addListener('focus', () => {
        //     getData()
        // })
            return () => {isActive = false};
        },[])
    )    

    return (
        <View style={{marginHorizontal:15}}>
            <Text style={styles.subheaderStyle}>Recent Pages</Text>
            {list.length !=0 ?
                list.map(page => (
                    <TouchableOpacity 
                        key={page.title} 
                        onPress={() => navigation.navigate('SearchDetail', {id:page})}
                        style={{flexDirection:'row', marginBottom:8}}    
                    >
                        {/* <View style={styles.categoryView}>
                            <Text style={styles.category} >{page.category}</Text> 
                        </View> */}
                        <PrettyTag category={page.category}/>
                        <View style={styles.pageInfo}>
                            {page.type === "rapidreview"?
                                <FontAwesome5 
                                    name="play-circle" 
                                    style={styles.iconStyle}
                                />
                            : page.type === "image"? 
                                <FontAwesome5 
                                    name="images" 
                                    style={styles.iconStyle}
                                />
                            :   <FontAwesome5 
                                    name="book-open" 
                                    style={styles.iconStyle}
                                />
                            }
                            <Text style={styles.text}>{page.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))
                :<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Image 
                        source={require('../../assets/study.png')}
                        style={{
                            height: 75,
                            width: 100,
                            opacity: 0.3,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{opacity:0.3}}>No recent pages</Text>
                </View>
            }
        </View>
    )
}

const initializeRecentPages = async () => {
    try{
        const initialized = await AsyncStorage.getItem(RECENT)
        if (initialized === null) {
            await AsyncStorage.setItem(RECENT, "empty")
            return false
        }
        return true
    } catch(e){
        console.log(e)
        return false
    }
}

const getList = async () => {
    try{
        const pagesList = await AsyncStorage.getItem(RECENT);
        if (pagesList===null){
            return [];
        }
        const listArray = pagesList.split(",");
        return listArray
    }catch(e) {
        console.log(e)
    }
}

const setList = async (id) => {
    try{
        const current = await AsyncStorage.getItem(RECENT)
        const oldListArray = current.split(",")
        const alreadyListed = oldListArray.filter(item => item===id)
        if (oldListArray.length === MAX_ITEMS && alreadyListed.length===0) {
            oldListArray.pop()
        }
        if (alreadyListed.length===0){
            oldListArray.unshift(id)
            const newListString = oldListArray.toString()
            await AsyncStorage.setItem(RECENT, newListString)
        } else{
            const newListArray = oldListArray.filter(item => item!=id)
            newListArray.unshift(id)
            const newListString = newListArray.toString();
            await AsyncStorage.setItem(RECENT, newListString)
        }
    }catch(e){
        console.log(e)
    }
}

const PrettyTag = ({category}) => {
    let picker = "#4f2683"
    switch (category) {
        case "Aorta":
            picker = "#e51c23" // Material Red
            break;
        case "Cardiac":
            picker = "#ff5722" // Material Deep Orange
            break;
        case "Lung":
            picker = "#3f51b5" // Material Indigo
            break;
        case "Abdominal":
            picker = "#5677fc" // Material Bluen
            break;
        case "Renal/GU":
            picker = "#259b24" // Material Green
            break;
        case "Procedural":
            picker = "#00bcd4" // Material Cyan
            break;
        case "Pelvic":
            picker = "#e91e63" // Material Pink
            break;
        default:
            break;
    }
    return (
        <View style={{...styles.categoryView, borderColor:picker}}>
            <Text style={{...styles.category, color:picker}}>{category}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 16,
        color: 'black',
        marginHorizontal:5,
    },
    subheaderStyle: {
        marginVertical: 15,
        fontSize: 20,
        fontFamily:'Raleway-Medium'
    },
    category:{
        fontSize:14,
        fontFamily:"Raleway-Bold",
        color:'#4f2683',       
    },
    categoryView:{
        borderColor:'#4f2683',
        borderWidth:2,
        borderRadius:5,
        // backgroundColor:'#4f2683',
        padding:5,
        width:90,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontFamily:'Raleway-Regular',
        fontSize:14,
        margin:5,
    },
    pageInfo:{
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderColor:'gray',
        marginHorizontal:10,
        flex:1,
        alignItems:'center'
    }
})

export {RecentPages, initializeRecentPages, setList}