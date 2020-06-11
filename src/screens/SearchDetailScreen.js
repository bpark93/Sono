import React, {useRef, useState, useEffect} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import ShortSummary from '../components/ShortSummary'
import ImageModal from 'react-native-image-modal';
import {database} from '../../database'
import { StackActions } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'

const SearchDetailScreen = ({route, navigation}) => {
    const {id} = route.params;
    const playerRef = useRef(null);
    
    const width = useWindowDimensions().width
    const height = width*9/16;

    const handleOnPress = (id) => {
        const response = database.filter((item) => item.id === id);
        const pushAction = StackActions.push('SearchDetail',{id: response[0]})
        navigation.dispatch(pushAction)
    }

    if (id.type === 'resource') { 
        const [webViewLoading, setWebViewLoading] = useState(true)
        return (
            <>
                {webViewLoading ? (
                    <View style={{flex:1, alignItems: 'center', justifyContent:'center', backgroundColor:'#FFFFFF'}}>
                        <ActivityIndicator
                            animating={true} 
                            size='large'  
                        />
                    </View>
                ) : null}
                <WebView 
                    source={{ uri: id.pageURL }}
                    onLoadEnd={() => setWebViewLoading(false)}
                />
            </>               
        )        
    }

    return (
        // Rapid Reviews
        id.type==='rapidreview'?
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>

            {/* Youtube Video embedded */}
            {id.video? 
            <YoutubePlayer
                ref={playerRef}
                height={height}
                width={width}
                videoId={id.video}
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
            {id.orientation? 
            <View style={{margin: 15, borderWidth:0.5, borderColor:'white'}}>
                <ShortSummary data={id.orientation}/>
            </View>: null}

            {/* Text Content */}
            {id.body? 
                id.body.map((item) => (
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
            {id.associated_pages?
            <View 
                style={{marginLeft:15, marginTop:15}}
            >
                <Text style={{fontWeight:'bold', marginBottom:5}}>Associated Pages</Text>
                {id.associated_pages.map((index) => (
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
        :
        //Image library
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}  >
            {id.images.map((item) => (
                <View key={item.title}>
                    <Text style={styles.header}>{item.title}</Text>
                    <ImageModal 
                        swipeToDismiss={true}
                        resizeMode="contain"
                        imageBackgroundColor="#000000"
                        style={{
                        width: width,
                        height: width,
                        }}
                        source={{uri:item.url}}
                    />
                    <Text style={styles.body}>{item.caption}</Text>
                    <Text style={styles.body}>Contributed by {item.contributor}</Text>
                </View>
            ))}
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

export default SearchDetailScreen;