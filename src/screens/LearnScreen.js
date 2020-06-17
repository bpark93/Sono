import React from 'react'
import {View, StyleSheet, FlatList, Image, Text, ScrollView } from 'react-native'
import { learnDatabase } from '../../database'
import LearnItem from '../components/LearnItem'
import LottieView from 'lottie-react-native';
import BookmarkList from '../components/BookmarkList'

const LearnScreen = () => {

    return (
        <View style={{flex:1}}>
            <View style={styles.headerImage}>
                <Image 
                    style={styles.logoStyle}
                    source={require('../../assets/western-logo.png')}
                /> 
            </View>
            <ScrollView style={{backgroundColor:'white', flex:1}}>
                <BookmarkList />
                <Text style={styles.header}>Browse Screencasts</Text>
                {/* <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={learnDatabase}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => {
                        return (
                            <LearnItem item={item} />
                        );
                    }}
                /> */}
                <View style={{flex:1}}>
                    {learnDatabase.map(item => (
                        <LearnItem item={item} key={item.id}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    headerImage: {
        backgroundColor: '#ffffff',
        paddingVertical: 30,
        height:120
    },
    logoStyle: {
        height:100,
        width: 150, 
        resizeMode: 'contain',
        alignSelf:'center'
    },
    header:{
        fontFamily:'Raleway-Bold',
        fontSize:16,
        paddingBottom:15,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginHorizontal:15
    }
});

export default LearnScreen;