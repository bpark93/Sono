import React, {useRef, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, ScrollView, Platform } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import ShortSummary from '../components/ShortSummary'
import {database} from '../../database'
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {Checkbox } from 'react-native-paper'

const RapidReviews = ({page}) => {
    const navigation = useNavigation();
    const playerRef = useRef(null);
    
    // USING WINDOW DIMENSIONS SEEMS TO BREAK FULLSCREEN -- HARD CODE FOR NOW
    const width = useWindowDimensions().width
    const height = width*9/16
    // const height = 225;
    // const width = 400;

    // STILL BREAKS - go to Cases, come back, fullscreen, error persists

    const handleOnPress = (id) => {
        const response = database.filter((item) => item.id === id);
        const pushAction = StackActions.push('SearchDetail',{id: response[0]})
        navigation.dispatch(pushAction)
    }

    return (
        <>
        {/* Youtube Video embedded */}
        {page.video? 
            <View style={{backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
                <YoutubePlayer
                    ref={playerRef}
                    height={height}
                    width={width}
                    videoId={page.video}
                    play={true}
                    volume={50}
                    playbackRate={1}
                    playerParams={{
                        cc_lang_pref: "us",
                        showClosedCaptions: false,
                    }}
                />
            </View> :null}
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            
            {/* Materials */}
            
            {page.materials? 
                <View>
                    <Text style={styles.header}>Required Materials</Text>
                    {page.materials.map(item => 
                        <MaterialsItem material={item} key={item}/>
                    )}
                </View>
                :null
            }
            

            {/* Table */}
            {page.orientation? 
            <>
            <Text style={styles.header}>Quick Summary</Text>
            <View style={{marginHorizontal: 15, borderWidth:0.5, borderColor:'white'}}>
                <ShortSummary data={page.orientation}/>
            </View>
            </>: null}

            {/* Text Content */}
            {page.body? 
                page.body.map((item) => (
                    <View key={item.content}>
                        {item.header?
                        <Text style={styles.header}>{item.header}</Text>
                        :null}
                        {item.image?
                        <Image source={item.image} style={{width:useWindowDimensions.width, height:300, resizeMode:'contain'}} />
                        :null}
                        {item.content.map((paragraph) => 
                            <Text style={styles.body} key={paragraph}>{paragraph}</Text>
                        )}
                    </View>
                )):null}


            {/* Associated Pages */}
            {page.associated_pages?
            <View 
                style={{marginLeft:15, marginTop:15}}
            >
                <Text style={{fontWeight:'bold', marginBottom:5}}>Associated Pages</Text>
                {page.associated_pages.map((index) => (
                    <TouchableOpacity 
                        key={index.id}
                        onPress={() => handleOnPress(index.id)}
                    >
                        <Text style={styles.touchable}>{index.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>:null}
            {/* CLICKING NEEDS TO REFRESH */}
            
        </ScrollView>
        </>
    )
};

const MaterialsItem = ({material}) => {
    const [checked, setChecked] = useState(false)
    return (
        <View style={{flexDirection:'row', marginHorizontal:20}} key={material} >
            <View style={{
                borderWidth: Platform.OS === 'ios'? 1: 0,  // No box in iOS 
                borderRadius:10,
                marginBottom:5
            }}>
                <Checkbox 
                    status={checked? 'checked':'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color="#4f2683"
                />
            </View>
            <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
                <Text style={{
                    ...styles.body,
                    textDecorationLine: checked? 'line-through' : 'none',
                    width:200
                }}>{material}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        color: '#2b59a2',
        fontSize:14,
    },
    header: {
        fontSize: 20,
        marginHorizontal:15,
        marginTop:15,
        marginBottom:15,
        fontFamily:'Raleway-Medium'
    },
    body:{
        marginHorizontal:15,
        marginTop:10,
        fontFamily:'Raleway-Light'
    }
});

export default RapidReviews;