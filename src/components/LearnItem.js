import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
// import { ProgressBar } from 'react-native-paper';

const LearnItem = ({item}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Modules', {id: item})}
                activeOpacity={0.8}
            >
                <View style={styles.moduleStyle}>
                    <Image 
                        style={styles.iconStyle}
                        source={item.thumbnail}
                    />
                    <Text style={{fontFamily:'Raleway-Regular', fontSize:18, marginLeft:20}}>{item.title}</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    moduleStyle:{
        alignItems:'center',
        // justifyContent:'space-between',
        margin: 5,
        flexDirection:'row'
    },
    iconStyle: {
        width: 65,
        height: 45,
        borderRadius: 10,
        resizeMode:'contain',
        marginBottom: 5,
    },
    container: {
        flex:1,
        paddingVertical:10,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginHorizontal:15
    }
})

export default LearnItem;