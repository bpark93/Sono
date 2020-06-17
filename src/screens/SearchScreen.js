import React, { useState } from 'react'
import {View, StyleSheet, FlatList, TouchableOpacity, Text, Keyboard} from 'react-native'
import { Searchbar, List } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import useResults from '../components/useResults';
import SearchResultsList from '../components/SearchResultsList';
import CategoriesList from '../components/CategoriesList'

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.container}>
            <Searchbar 
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={(text)=> {
                    searchApi(text);
                    setTerm(text);
                }}
                icon={() => 
                    term ? (
                    <FontAwesome 
                        name="arrow-left" 
                        style={styles.iconStyle} 
                    />):(
                    <FontAwesome 
                        name="search" 
                        style={styles.iconStyle} 
                    />)
                }
                onIconPress={() => {
                    Keyboard.dismiss();
                    setTerm('')
                }}
                inputStyle={styles.inputStyle}
                style={styles.barStyle}
                clearIcon={() => (
                    <FontAwesome 
                        name="remove" 
                        style={styles.iconStyle} 
                    />
                )}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {term ? 
                <SearchResultsList 
                    results={results}
                /> :
                <CategoriesList 
                />
            }
        </View>
    )
};

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 25,
        flex: 1,
        color: 'gray',
        paddingTop: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    barStyle: {
        marginHorizontal: 20,
        height: 60,
        borderRadius: 10,
    },
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop:40,
    },
    textStyle: {
        fontSize: 18,
        color: 'black'
    }
});

export default SearchScreen;