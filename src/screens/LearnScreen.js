import React from 'react'
import {View, StyleSheet, FlatList, Image, Text, ScrollView } from 'react-native'
import { learnDatabase } from '../../database'
import LearnItem from '../components/LearnItem'
import LottieView from 'lottie-react-native';
import BookmarkList from '../components/BookmarkList'
import Constants from 'expo-constants';

const LearnScreen = () => {

    return (
        <View style={{flex:1, backgroundColor:'white', paddingTop:Constants.statusBarHeight+15}}>
            <Image 
                style={styles.logoStyle}
                source={require('../../assets/western-logo.png')}
            /> 
            <ScrollView style={{flex:1}}>
                <BookmarkList />
                <Text style={styles.header}>Browse Screencasts</Text>
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
        paddingBottom: 30,
        paddingTop:1,
        height:120
    },
    logoStyle: {
        height:70,
        width: 150, 
        resizeMode: 'contain',
        alignSelf:'center'
    },
    header:{
        fontFamily:'Raleway-Bold',
        fontSize:22,
        marginHorizontal:15
    }
});

export default LearnScreen;