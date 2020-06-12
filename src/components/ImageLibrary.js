import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import ImageModal from 'react-native-image-modal';
import {Chip} from 'react-native-paper'

const SearchDetailScreen = ({page}) => {
    
    const width = useWindowDimensions().width

    return (
        //Image library
        <>
        <View>
            {/* Add Chips for the different Views */}
        </View>
        <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}  >
            {page.images.map((item) => (
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
        </>
    )
};

const styles = StyleSheet.create({
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