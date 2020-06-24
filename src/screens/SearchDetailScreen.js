import React, {useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import RapidReviews from '../components/RapidReviews'
import ImageLibrary from '../components/ImageLibrary'
import {setList} from '../components/RecentPages'

const SearchDetailScreen = ({route}) => {
    const {id} = route.params;

    useEffect(() => {
        async function setRecent(){
            await setList(id.id)
        }
        setRecent();
    },[])
    
    if (id.type === 'resource') { 
        return (
            <WebView 
                source={{ uri: id.pageURL }}
                renderLoading={() => (
                    <View style={{flex:1, alignItems: 'center', /*justifyContent:'center',*/ backgroundColor:'#FFFFFF'}}>
                        <ActivityIndicator
                            animating={true} 
                            size='large'  
                        />
                        <Text style={{marginTop:20}}>Loading Resource...</Text>
                    </View>
                )}
                startInLoadingState={true}
            />
        )        
    }

    return (
        // Rapid Reviews
        id.type==='rapidreview'?
        <RapidReviews page={id}/>
        :
        //Image library
        <ImageLibrary page={id} />
    )
};

const styles = StyleSheet.create({});

export default SearchDetailScreen;