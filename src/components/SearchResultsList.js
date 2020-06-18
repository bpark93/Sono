import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

const SearchResultsScreen = ({results}) => {
    const navigation = useNavigation();
    return (
        <View>
            {/* <FlatList
                data={results}
                keyExtractor={() => JSON.stringify(Math.floor(Math.random()*10000))}
                renderItem={({item}) => {
                    return (
                        <List.Item 
                            style={styles.listItemStyle}
                            title={item.item.title}
                            description={item.item.category} 
                            left={() => 
                                item.item.video?
                                <FontAwesome 
                                    name="film" 
                                    style={styles.iconStyle}
                                />
                                :<FontAwesome 
                                    name="image" 
                                    style={styles.iconStyle}
                                />
                            }
                            onPress={() => navigation.navigate('SearchDetail', {id: item.item})}
                        />
                    )
                }}
            /> */}
            {results.map(({item}) => (
                <List.Item 
                    key={item.id}
                    style={styles.listItemStyle}
                    title={item.title}
                    description={item.category} 
                    left={() => 
                        item.video?
                        <FontAwesome 
                            name="film" 
                            style={styles.iconStyle}
                        />
                        :<FontAwesome 
                            name="image" 
                            style={styles.iconStyle}
                        />
                    }
                    onPress={() => navigation.navigate('SearchDetail', {id: item})}
                />
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    listItemStyle: {
        marginLeft: 10,
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        marginRight:10,
    },
});

export default SearchResultsScreen;