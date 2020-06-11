import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ShortSummary = ({data}) => {

    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.topCategory}>Probe</Text>
                <Text style={styles.text}>{data.probe}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.category}>Preset</Text>
                <Text style={styles.altText}>{data.preset}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.category}>{`Patient\nPosition`}</Text>
                <Text style={styles.text}>{data.patient_position}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.category}>{`Probe\nPosition`}</Text>
                <Text style={styles.altText}>{data.probe_position}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.bottomCategory}>{`Areas of\nInterest`}</Text>
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
        backgroundColor:'#715696',
        color: 'white',
        flex:1,
        paddingLeft:13,
        paddingTop:7,
        fontFamily:'Raleway-Bold',
    },
    topCategory: {
        backgroundColor:'#715696',
        color: 'white',
        flex:1,
        paddingLeft:13,
        paddingTop:7,
        fontFamily:'Raleway-Bold',
        borderTopLeftRadius:10
    },
    bottomCategory: {
        backgroundColor:'#715696',
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