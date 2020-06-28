import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import HTML from 'react-native-render-html';

const CasesCard = ({result}) => {
    const Width = Dimensions.get("window").width;

    return (
        <View style={styles.container}>
            {result._embedded["wp:featuredmedia"][0].media_details.sizes.course_thumbnail ? 
                <Image 
                    style={{height: 270, width:Width, resizeMode:'contain'}} 
                    source={{uri: result._embedded["wp:featuredmedia"][0].media_details.sizes.course_thumbnail.source_url}}
                />
                :null
            }
            <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:12, marginBottom:10, marginTop:5}}>
                <FontAwesome5 
                    name="user-md" 
                    style={styles.iconStyle}
                />
                <Text>By {result._embedded.author[0].name}</Text>
            </View>
            <Text style={styles.title}>{result.title.rendered}</Text>
            {result.excerpt.rendered ? 
                <HTML html={result.excerpt.rendered} containerStyle={{marginHorizontal:15}}/>
                :null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginBottom:5
    },
    title: {
        fontSize:20,
        marginHorizontal:15,
        fontFamily:'Raleway-Medium'
    },
    iconStyle: {
        fontSize: 18,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal:5
    },
});

export default CasesCard;