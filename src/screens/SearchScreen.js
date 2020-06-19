import React, { useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Keyboard, ScrollView} from 'react-native'
import { Searchbar} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import useResults from '../components/useResults';
import SearchResultsList from '../components/SearchResultsList';
import CategoriesList from '../components/CategoriesList'
import {RecentPages} from '../components/RecentPages'
import Constants from 'expo-constants';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const searchbarRef = useRef(null);

    return (
        <View style={styles.container}>
            <Searchbar 
                ref={searchbarRef}
                // autoFocus
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
                    // searchbarRef.current.blur()
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
            <ScrollView>
                {term ? 
                    <SearchResultsList 
                        results={results}
                    /> :
                    <>
                    <RecentPages />
                    <CategoriesList/>
                    </>
                }
            </ScrollView>
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
        paddingTop:Constants.statusBarHeight+10,
    },
    textStyle: {
        fontSize: 18,
        color: 'black'
    }
});

export default SearchScreen;