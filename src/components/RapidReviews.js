import React, {useRef} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import ShortSummary from '../components/ShortSummary'
import {database} from '../../database'
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const RapidReviews = ({page}) => {
    const navigation = useNavigation();
    const playerRef = useRef(null);
    
    const width = useWindowDimensions().width
    const height = width*9/16;

    const handleOnPress = (id) => {
        const response = database.filter((item) => item.id === id);
        const pushAction = StackActions.push('SearchDetail',{id: response[0]})
        navigation.dispatch(pushAction)
    }

    return (
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            {/* Youtube Video embedded */}
            {page.video? 
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
                    preventFullScreen:true,
                }}
            /> :null}

            {/* Links to Images */}
            {/* <View style={{marginLeft:15, marginVertical:15}}>
                <TouchableOpacity>
                    <Text style={styles.touchable}>Standard Images - Longitudinal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                >
                    <Text style={styles.touchable}>Standard Images - Transverse</Text>
                </TouchableOpacity>
            </View> */}

            {/* Table */}
            {page.orientation? 
            <View style={{margin: 15, borderWidth:0.5, borderColor:'white'}}>
                <ShortSummary data={page.orientation}/>
            </View>: null}

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
    )
};

const styles = StyleSheet.create({
    touchable: {
        color: '#2b59a2',
        fontSize:14,
    },
    header: {
        fontSize: 20,
        marginLeft:15,
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