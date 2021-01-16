import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import {Chip} from 'react-native-paper'

const LibraryChip = ({name, handleChipPress}) => {

    const [pressed, setPressed] = useState(false)
    return (
        <Chip 
            mode="flat"
            selected={pressed}
            // icon="video-vintage"
            onPress={() => {
                setPressed(!pressed)
                handleChipPress(name)
            }}
            style={{marginVertical:2.5, marginHorizontal:2.5}}
            textStyle={{fontWeight: pressed? 'bold' : 'normal',  }}
        >
            {name}
        </Chip>
    )
}
const styles = StyleSheet.create({})

export default LibraryChip