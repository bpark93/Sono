import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, useWindowDimensions} from 'react-native'
import ContentLoader, { Rect, Circle } from "react-content-loader/native"
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

    const width = useWindowDimensions().width
    const height = useWindowDimensions().height

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
                        // <View style={styles.loadingContainer}>
                        //     <ActivityIndicator // UPGRADE TO SOMETHING FANCIER
                        //         animating={true}
                        //         color='purple'
                        //         size='large'
                        //         style={{paddingTop:15}}
                        //     />
                        //     <Text style={{paddingVertical: 20}}>Loading...</Text>
                        // </View>
                        <ContentLoader 
                            speed={1.2}
                            width={width}
                            height={height}
                            viewBox={`0 0 ${width} ${height}`}
                            backgroundColor="#f5f6f7"
                            foregroundColor="#eeeeee"
                        >
                            <Circle cx="40" cy="285" r="8"/>
                            <Rect x="55" y="280" rx="5" ry="5" width="140" height="10" /> 
                            <Rect x="25" y="300" rx="5" ry="5" width={width-50} height="20" /> 
                            <Rect x="25" y="330" rx="5" ry="5" width={width-50} height="10" /> 
                            <Rect x="25" y="345" rx="5" ry="5" width={width-50} height="10" /> 
                            <Rect x="25" y="360" rx="5" ry="5" width={width-50} height="10" /> 
                            <Rect x="15" y="0" rx="10" ry="10" width={width-30} height="250" />
                            <Rect x="15" y="390" rx="10" ry="10" width={width-30} height="250" />
                        </ContentLoader>
                        
                    :<View style={{alignItems:'flex-end', marginHorizontal:15}}>
                        <TouchableOpacity onPress={() => handleLoadMore()} activeOpacity={0.8} style={styles.next}>
                            <Text style={{fontFamily:"Raleway-Regular", color:"#4f2683"}}>Load More</Text>
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
        width:120, 
        // borderWidth:0.5,
        // borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:10
    },
});

export default CasesScreen;
