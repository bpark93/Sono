import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {Subheading, Headline, Text, Caption} from 'react-native-paper'

const SettingsAboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/western-logo.png')}/>
            <View style={styles.textBox}>
                <Headline>Credits</Headline>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>Brian Park</Text><Caption style={{}}> MD 2023 Candidate</Caption>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>Frank Myslik</Text><Caption> MD, CCFP-EM</Caption>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>Robert Arntfield</Text><Caption> MD, FRCPC</Caption>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text>Derek Wu</Text><Caption> MD 2021 Candidate</Caption>
                </View>
                <Text>Icons made by Freepik from www.flaticon.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems:'center',
    },
    textBox:{
        marginTop:15,
        alignItems:'flex-start'
    }
})

export default SettingsAboutScreen;