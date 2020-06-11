import React from 'react'
import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { List, } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';
import {popularDatabase} from '../../database'

const PopularSearchList = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex:1}}>
      <Text style={styles.subheaderStyle}>Popular Searches</Text>
      <FlatList
          data={popularDatabase}
          keyExtractor={(data) => data.title}
          renderItem={({item}) => {
              return (
                <List.Item 
                  style={styles.listItemStyle}
                  title={item.title}
                  description={item.category}
                  left={() => 
                    item.images ? 
                    <Image 
                      source={item.images} 
                      style={styles.image}
                    />: 
                    <FontAwesome 
                        name="clock-o" 
                        style={styles.iconStyle}
                    />}
                  onPress={() => navigation.navigate('SearchDetail', {id: item})}
                />
              )
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    listItemStyle: {
      marginHorizontal: 10,
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        marginTop: 10
    },
    subheaderStyle: {
      marginLeft: 20,
      marginVertical: 15,
      fontSize: 20,
      fontFamily:'Raleway-Medium'
    },
    image: {
      width: 100,
      height: 75,
      borderRadius: 10,
      borderWidth:1,
      borderColor:'gray'
  },
});

export default PopularSearchList;