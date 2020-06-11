import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { List, } from 'react-native-paper'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {categoryDatabase} from '../../database'
import {database} from '../../database'

const CategoriesList = () => {
  const navigation = useNavigation();

  const handleOnPress = (id) => {
    const response = database.filter((item) => item.id === id);
    navigation.navigate('SearchDetail', {id: response[0]})
  }

  return (
    <ScrollView style={{flex:1}}>
      <Text style={styles.subheaderStyle}>Categories</Text>
      {categoryDatabase.map((index) => (
        index.type==="page" ?
          <List.Item 
            key={index.id}
            style={styles.categoryStyle}
            title={index.title}
            onPress={()=> handleOnPress(index.id)}
            left={()=>  
              <Image 
                source={index.image} 
                style={styles.image}
              />
            }
            right={() => 
              <MaterialCommunityIcons name='chevron-right' size={24} style={{marginTop:30, marginRight:10}}/>
            }
          />
        :<List.Accordion 
          key={index.title}
          style={styles.categoryStyle}
          title={index.title}
          left={() => 
            <Image 
              source={index.image} 
              style={styles.image}
            />}
          >
          {/* NO reason to keep as object - change back to array? */}
          {Object.entries(index.groups).map((item) => (
            <List.Accordion
              key={item}
              style={styles.subCategoryStyle}
              title={item[0]}
              left={() => null}
            >
              {item[1].pages?
              item[1].pages.map((page) => (
                <List.Item 
                  key={page.id}
                  style={styles.listItemStyle}
                  title={page.title}
                  onPress={()=> handleOnPress(page.id)}
                  left={()=> {
                    if (page.type === 'video') {
                      return <FontAwesome name='film' size={20} style={{marginTop:5}}/>
                    } else if (page.type === 'image') {
                      return <FontAwesome name='photo' size={20} style={{marginTop:5}}/>
                    } else {
                      return <FontAwesome name='wrench' size={20} style={{marginTop:5}}/>
                    }
                  }}
                />
              )):null}
            </List.Accordion>
          ))}
        </List.Accordion>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    categoryStyle: {
      marginHorizontal: 0,
    },
    subCategoryStyle:{
      marginHorizontal:20,
    },
    listItemStyle: {
      marginHorizontal:40,
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
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
      resizeMode:'contain'
  },
});

export default CategoriesList;