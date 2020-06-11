import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'

import { ActivityIndicator } from 'react-native-paper'
import wpServer from '../api/wpServer';
import CasesCard from '../components/CasesCard'

const CasesScreen = ({navigation}) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getCases = async () => {
        try {
            setLoading(true);
            const url = `/posts?page=${page}`
            const response = await wpServer.get(url, {
                params: {
                    categories: 195,
                    _fields: 'id,title,excerpt,slug,acf,_embedded,_links',
                    _embed: 'replies,wp:featuredmedia,author',
                    per_page:5,
                }
            })
            if (response.data.status === 400) {return} // No more entries
            setResults(results.concat(response.data));
            setLoading(false);
        } catch (e) {
            setErrorMessage('Something went wrong! Try again')
        }
    } 

    useEffect(()=> {
        getCases();
    },[page]);

    const handleLoadMore = () => {
        setPage(page => page+1)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={results}
                keyExtractor={item => item.slug}
                renderItem={ ({item}) => 
                    <TouchableOpacity
                            onPress={() => navigation.navigate('CasesDetail', {id: item})}
                            activeOpacity={0.8}
                        >
                        <CasesCard result={item} />
                    </TouchableOpacity>
                }
                initialNumToRender={2}
                ListFooterComponent={() => {
                    return loading ? 
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator // UPGRADE TO SOMETHING FANCIER
                                animating={true}
                                color='purple'
                                size='large'
                                style={{paddingTop:15}}
                            />
                            <Text style={{paddingVertical: 20}}>Loading...</Text>
                        </View>
                    :<View style={{alignItems:'flex-end', marginHorizontal:15}}>
                        <TouchableOpacity onPress={() => handleLoadMore()} activeOpacity={0.8} style={styles.next}>
                            <Text>Next Page ></Text>
                        </TouchableOpacity>
                    </View>

                }}
            />
        </View>
    )
}; // DOUBLE SCROLL EFFECT IS CLUMSILY FIXED 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    headerStyle: {
        fontSize: 26,
        fontWeight:'bold',
        marginLeft:15
    },
    loadingContainer: {
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    next:{
        height:50, 
        width:150, 
        borderWidth:0.5,
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
});

export default CasesScreen;
