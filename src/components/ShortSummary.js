import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ShortSummary = ({data}) => {

    return (
        <View style={{flex:1, marginHorizontal:15}}>
            <View style={styles.row}>
                <View style={styles.topCategory}>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white'}}>Probe</Text>
                </View>
                <Text style={styles.text}>{data.probe}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white'}}>Preset</Text>
                </View>
                <Text style={styles.altText}>{data.preset}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white'}}>{`Patient\nPosition`}</Text>
                </View>
                <Text style={styles.text}>{data.patient_position}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white'}}>{`Probe\nPosition`}</Text>
                </View>
                <Text style={styles.altText}>{data.probe_position}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.bottomCategory}>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white'}}>{`Areas of\nInterest`}</Text>
                </View>
                <Text style={styles.text}>{data.areas_of_interest}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 50,        
    },
    category: {
        backgroundColor:'#4f2683',
        color: 'white',
        flex:1,
        paddingLeft:13,
        paddingTop:7,
        fontFamily:'Raleway-Bold',
    },
    topCategory: {
        backgroundColor:'#4f2683',
        color: 'white',
        flex:1,
        paddingLeft:13,
        paddingTop:7,
        borderTopLeftRadius:10,
    },
    bottomCategory: {
        backgroundColor:'#4f2683',
        color: 'white',
        flex:1,
        paddingLeft:13,
        paddingTop:7,
        fontFamily:'Raleway-Bold',
        borderBottomLeftRadius:10
    },
    text: {
        paddingLeft: 20,
        paddingTop:7,
        flex:4,
        fontFamily:'Raleway-Regular'
    },
    altText: {
        paddingLeft: 20,
        paddingTop:7,
        flex:4,
        backgroundColor:'#edf1fe',
        fontFamily:'Raleway-Regular'
    }
});

export default ShortSummary;