import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {getBookmark} from './useBookmark'
import {learnDatabase} from '../../database'

const BookmarkList = () => {
    const navigation = useNavigation();
    const [bookmark, setBookmark] = useState([])
    useEffect(() => {
        async function getData(){
            const currentBookmarkArray = await getBookmark();
            const modulesArray = learnDatabase.map(item => item.pages);
            const pagesArray = [].concat.apply([], modulesArray)
            const idArray = pagesArray.map(item => item.id)
            let finalList = [];
            for (let i=0; i<currentBookmarkArray.length;i++){
                for (let j=0; j<idArray.length;j++){
                    if (currentBookmarkArray[i] === idArray[j]){
                        finalList = [...finalList, pagesArray[j]]
                    }
                }
            }
            setBookmark(finalList);
        }
        const unsubscribe = navigation.addListener('focus', ()=> {
            getData();
        })
        return () => unsubscribe();
    },[navigation])

    const categoryList = learnDatabase.map(item => [item.title, item.id, item.thumbnail])

    return (
        <>
        <Text style={styles.header}>Bookmarks</Text>
        <ScrollView style={{marginBottom:15}} nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false}>
            {bookmark.length != 0?
            bookmark.map(item => (
                categoryList.filter(mod => mod[1].toString() === item.id.split(".")[0]).map((thing) => (
                        <TouchableOpacity 
                            style={styles.touchable}
                            key={item.id}
                            onPress={() => navigation.navigate('LearnDetail', {id:item, category:thing[0]})}
                        >
                            <ImageBackground 
                                source={thing[2]}
                                style={{
                                    height: 100,
                                    width: 130,
                                    opacity: 0.3,
                                    position: 'absolute',
                                    alignSelf:'center'
                                  }}
                                imageStyle={{
                                    resizeMode:'contain'
                                }}
                            />
                            <Text style={styles.category}>{thing[0]}</Text>
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    ))))
            :<View style={{flex:1, alignItems:'center', justifyContent:'center', width:400, height:150}}>
                <Image 
                    source={require('../../assets/write.png')}
                    style={{
                        height: 75,
                        width: 100,
                        opacity: 0.3,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{opacity:0.3}}>Add to your bookmarks for quick access</Text>
            </View>}
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        fontFamily:'Raleway-Bold',
        fontSize:16,
        paddingBottom:15,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginHorizontal:15,
        marginTop:10
    },
    text:{
        fontFamily:'Raleway-Regular',
        fontSize:14,
        marginHorizontal:10,
        marginBottom:5
    },
    touchable:{
        margin:10,
        marginLeft:15,
        flex:1,
        height:100,
        width:150,
        backgroundColor:'#fdf6e3',
        borderRadius:15,
        overflow:"hidden",
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    category:{
        fontSize:14,
        fontFamily:"Raleway-Bold",
        color:'#34aadc',
        marginHorizontal:10,
    },
})

export default BookmarkList