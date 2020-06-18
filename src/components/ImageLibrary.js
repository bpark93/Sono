import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import ImageModal from 'react-native-image-modal';
import LibraryChip from '../components/LibraryChip'
import { FlatList } from 'react-native-gesture-handler';

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

    return (
        //Image library
        <>
        <View style={{backgroundColor:'white', padding:10, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap',}}>
            {page.options && page.options.map(item => (
                <LibraryChip name={item} handleChipPress={(name)=> handleChipPress(name)} key={item}/>
            ))}
        </View>
        {/* <ScrollView style={{flex:1, backgroundColor:'white'}}>
            {images.map((item) =>         
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
            )}
        </ScrollView> */}
        <FlatList 
            style={{flex:1, backgroundColor:'white'}}
            maxToRenderPerBatch={5}
            windowSize={5}
            data={images}
            keyExtractor={item => item.title}
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