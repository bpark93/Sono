import React from 'react'
import {View, StyleSheet, FlatList, Image, Text } from 'react-native'
import { learnDatabase } from '../../database'
import LearnItem from '../components/LearnItem'

const LearnScreen = () => {

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logoStyle}
                source={require('../../assets/western-logo.png')}
            /> 
            <Text style={styles.header}>Browse Screencasts</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={learnDatabase}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    return (
                        <LearnItem item={item} />
                    );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 30,
    },
    logoStyle: {
        height:100,
        width: 150, 
        resizeMode: 'contain',
        alignSelf:'center'
    },
    header:{
        fontFamily:'Raleway-Regular',
        fontSize:16,
        paddingBottom:15,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginHorizontal:15
    }
});

export default LearnScreen;