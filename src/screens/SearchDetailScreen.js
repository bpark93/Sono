import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import RapidReviews from '../components/RapidReviews'
import ImageLibrary from '../components/ImageLibrary'

const SearchDetailScreen = ({route}) => {
    const {id} = route.params;
    
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
        <RapidReviews page={id}/>
        :
        //Image library
        <ImageLibrary page={id} />
    )
};

const styles = StyleSheet.create({});

export default SearchDetailScreen;