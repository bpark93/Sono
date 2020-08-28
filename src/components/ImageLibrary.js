import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import ImageModal from 'react-native-image-modal';
import LibraryChip from '../components/LibraryChip'
import { useNavigation } from "@react-navigation/native";


const SearchDetailScreen = ({page}) => {
    
    const width = useWindowDimensions().width

    const [viewing, setViewing] = useState([])
    const handleChipPress = (name) => {
        const alreadyInList = viewing.filter(item => item===name)
        if (alreadyInList.length === 0){
            setViewing([name, ...viewing])
        } else{
            const removed = viewing.filter(item => item!=name)
            setViewing(removed)
        }
    }

    const [images, setImages] = useState([])
    useEffect(() => {
        const viewToggleHandler = () => {
            if (viewing.length === 0) {
                setImages(page.images)
                return;
            } else{
                let temp = []
                for (let i = 0; i<viewing.length; i++){
                    for (let j=0; j<page.images.length;j++){
                        if (viewing[i] === page.images[j].option){
                            temp.push(page.images[j])
                        }
                    }
                }
                setImages(temp)
            }
        }
        viewToggleHandler();
    },[viewing])

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ title: page.title })
    },[])

    return (
        //Image library
        <>
        <View style={{backgroundColor:'white', padding:10, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap',}}>
            {page.filter_options && page.filter_options.map(item => (
                <LibraryChip name={item.text} handleChipPress={(name)=> handleChipPress(name)} key={item.text}/>
            ))}
        </View>
        <FlatList 
            style={{flex:1, backgroundColor:'white'}}
            maxToRenderPerBatch={5}
            windowSize={5}
            data={images}
            keyExtractor={item => item.title}
            ListHeaderComponent={() => (
                <View style={{backgroundColor:'white', paddingHorizontal:15}}>
                    <Text style={{fontSize:20, fontFamily:'Raleway-Medium', marginVertical:5}}>Key Features</Text>
                    {page.key_features? 
                        page.key_features.map(tip => (
                            <Text key={tip.text} style={{marginVertical:2}}>{`\u2022 ${tip.text}`}</Text>
                        ))
                    :null}
                </View>
            )}
            renderItem={({item}) => (
                <View>
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
            )}
        />
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