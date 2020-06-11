import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsAuthScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SettingsAuthScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignContent: 'space-around'
    },
})

export default SettingsAuthScreen;