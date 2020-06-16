import React, {useState, useEffect} from 'react'
import {ScrollView, View, Text, StyleSheet, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import wpServer from '../api/wpServer';
import {Card, List, ActivityIndicator} from 'react-native-paper'
import HTML from 'react-native-render-html';
import { FontAwesome5 } from '@expo/vector-icons'; 
import ImageModal from 'react-native-image-modal';
import SnapCarousel from '../components/SnapCarousel'


const CasesDetailScreen = ({route}) => {
    const {id} = route.params;

    const [imageUrls, setImageUrls] = useState(null);
    // const [imageInfo, setImageInfo] = useState(null);
    const [answerToggle, setAnswerToggle] = useState(false);

    const windowWidth = useWindowDimensions().width;

    const getImages = async (id) => {
        const response = await wpServer.get('/media', {
            params: {
                parent: id,
                _fields: 'source_url,id,title',
                orderby: 'id',
                order: 'asc'
            }
        })
        // const conserved = response.data.map((item) => item.source_url.replace("gif", "webp"));
        // console.log(JSON.stringify(conserved));
        setImageUrls(response.data)
        // setImageInfo(response.data)
    }
    useEffect(()=> {
        getImages(id.id);
    },[])

    const toggleAnswer = () => {
        setAnswerToggle(!answerToggle)
    }

    return (
        <ScrollView style={{flex:1}}> 

            {/* Title Card */}
            <Card style={styles.cardStyle}>
                <Card.Content>
                    <Text
                        style={styles.headerStyle}
                    >
                        To start off
                    </Text>
                    <HTML 
                        html={id.excerpt.rendered}
                        containerStyle={styles.htmlStyle}
                    />
                </Card.Content>
            </Card>
            
            {/* Images Card */}
            <View style={{backgroundColor:'white', borderRadius:15, marginVertical:5}}> 
                <Text style={styles.imageHeaderStyle}>Images</Text> 
                {imageUrls ?
                <SnapCarousel images={imageUrls}/>
                : (
                    <View style={{height:windowWidth*13/16, width:windowWidth, justifyContent:'center', alignItems:'center'}}>
                        <ActivityIndicator // UPGRADE TO SOMETHING FANCIER
                            animating={true}
                            color='purple'
                            size='large'
                            style={{paddingTop:15}}
                        />
                        <Text style={{paddingTop: 10}}>Loading...</Text>
                    </View>
                )}
            </View>

            {/* Answer Card */}
            {id.acf.answers ?
                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <View >
                            <TouchableOpacity 
                                onPress={()=> toggleAnswer()}
                                style={{flexDirection:'row', justifyContent:'space-between'}}
                            >
                                <Text
                                    style={styles.headerStyle}
                                >
                                    Answer
                                </Text>
                                {!answerToggle?
                                    <FontAwesome5 name='plus' color='black' size={24} style={{marginHorizontal: 15, marginTop:3}} />
                                    :<FontAwesome5 name='minus' color='black' size={24} style={{marginHorizontal: 15, marginTop:3}} />
                                }
                            </TouchableOpacity>
                        </View>
                        {answerToggle ? 
                            <HTML 
                                html={id.acf.answers}
                                containerStyle={styles.htmlStyle}
                            />
                            : null
                        }
                    </Card.Content>
                </Card>
            :null}

            {/* Comments Card */}
            <Card style={styles.cardStyle}>
                <Card.Content>
                    <Text
                        style={styles.headerStyle}
                    >
                        Comments
                    </Text>
                    {id._embedded.replies ?
                        id._embedded.replies[0].map( item => (
                            <View key={item.link}>
                                <Text style={styles.nameStyle}>{item.author_name}</Text>
                                <HTML 
                                    html={item.content.rendered} 
                                    containerStyle={styles.htmlStyle}
                                />
                            </View>
                        ))                        
                    : <Text style={styles.htmlStyle}>Nothing here!</Text>
                    }
                </Card.Content>
            </Card>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    headerStyle: {
        marginHorizontal: 15,
        fontSize: 24,
        fontWeight:'bold',
        flex:1,
        fontFamily:"Raleway-Bold"
    },
    imageHeaderStyle: {
        marginHorizontal: 30,
        marginTop:10,
        fontSize: 24,
        fontWeight:'bold',
    },
    htmlStyle: {
        marginHorizontal: 15,
    },
    nameStyle: {
        fontSize: 16,
        marginHorizontal: 15,
        marginTop: 10,
        fontWeight:'bold'
    },
    image: {
        flex:1,
        marginTop: 5, 
        resizeMode:'contain',
    },
    cardStyle: {
        marginVertical: 5,
    },
    darkCardStyle: {
        marginVertical: 15,
        backgroundColor:'#8e8e93',
        alignSelf:'stretch'
    }

});

export default CasesDetailScreen;