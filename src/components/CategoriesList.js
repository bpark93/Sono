import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { List, } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons';
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
      <Text style={styles.subheaderStyle}>Find images, videos, and tools</Text>
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
              <FontAwesome5 name='chevron-right' size={14} style={{marginTop:10, marginRight:15, color:'#673ab7'}}/>
            }
          />
        :<ListAccordion index={index} handleOnPress={(param) => handleOnPress(param)} key={index.title}/>
      ))}
    </ScrollView>
  );
}

const ListAccordion = ({index, handleOnPress}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <List.Accordion 
          style={{backgroundColor: expanded? '#F4F4F4': 'white'}}
          titleStyle={{fontFamily: expanded? "Raleway-Bold":"Raleway-Regular"}}
          key={index.title}
          title={index.title}
          left={() => 
            <Image 
              source={index.image} 
              style={styles.image}
            />}
          onPress={() => setExpanded(!expanded)}
          >

          {/* <View style={{backgroundColor: expanded? '#FAFAFA': 'white'}}> */}
          {Object.entries(index.groups).map((item) => (
            item[1].pages?
              <List.Accordion
                key={item}
                style={{...styles.subCategoryStyle, backgroundColor: expanded? '#FAFAFA': 'white'}}
                title={item[0]}
                left={() => <FontAwesome5 name='folder' size={16}/>} 
              >
                {item[1].pages.map((page) => (
                  <List.Item 
                    key={page.id}
                    style={{...styles.listItemStyle, backgroundColor: expanded? '#FAFAFA': 'white' }}
                    title={page.title}
                    onPress={()=> handleOnPress(page.id)}
                    left={()=> {
                      if (page.type === 'video') {
                        return <FontAwesome5 name='play-circle' size={16} style={{marginTop:7}}/>
                      } else if (page.type === 'image') {
                        return <FontAwesome5 name='images' size={16} style={{marginTop:7}}/>
                      } else {
                        return <FontAwesome5 name='tools' size={16} style={{marginTop:7}}/>
                      }
                    }}
                    right={() => 
                      <FontAwesome5 name='chevron-right' size={14} style={{marginTop:10, marginRight:15, color:'#673ab7'}}/>
                    }
                  />
                ))}
              </List.Accordion>
            :<List.Item 
                  key={item[0]}
                  style={{...styles.subCategoryStyle, backgroundColor: expanded? '#FAFAFA': 'white'}}
                  title={item[0]}
                  onPress={()=> handleOnPress(item[1])}
                  left={()=> {
                    if (item[1].type === 'video') {
                      return <FontAwesome5 name='play-circle' size={16} style={{marginTop:7}}/>
                    } else if (item[1].type === 'image') {
                      return <FontAwesome5 name='images' size={16} style={{marginTop:7}}/>
                    } else {
                      return <FontAwesome5 name='tools' size={16} style={{marginTop:7}}/>
                    }
                  }}
                  right={() => 
                    <FontAwesome5 name='chevron-right' size={14} style={{marginTop:10, marginRight:15, color:'#673ab7'}}/>
                  }
            />
          ))}
          {/* </View> */}
        </List.Accordion>
  )
}

const styles = StyleSheet.create({
    categoryStyle: {
      marginHorizontal: 0,
    },
    subCategoryStyle:{
      paddingLeft:40,
      height:55
    },
    listItemStyle: {
      paddingLeft:55,
      height:50
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
    },
    subheaderStyle: {
      marginLeft: 20,
      marginVertical: 15,
      fontSize: 18,
      fontFamily:'Raleway-Medium'
    },
    image: {
      width: 60,
      height: 30,
      resizeMode:'contain'
  },
});

export default CategoriesList;