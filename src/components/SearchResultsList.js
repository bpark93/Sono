import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchResultsScreen = ({results}) => {
    const navigation = useNavigation();
    return (
        <View>
            {results.map(({item}) => (
                <List.Item 
                    key={item.id}
                    style={styles.listItemStyle}
                    title={item.title}
                    description={item.category} 
                    left={() => 
                        item.type === "rapidreview"?
                            <FontAwesome5 
                                name="play-circle" 
                                style={styles.iconStyle}
                            />
                        : item.type === "image"? 
                            <FontAwesome5 
                                name="images" 
                                style={styles.iconStyle}
                            />
                        :   <FontAwesome5 
                                name="book-open" 
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
        width:40,
        marginTop: 10,
        marginRight:10,
    },
});

export default SearchResultsScreen;