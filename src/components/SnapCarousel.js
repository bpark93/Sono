import React, {Component} from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import ImageModal from 'react-native-image-modal';

const WIDTH = Dimensions.get('window').width;

class SnapCarousel extends Component {
    
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <ImageModal 
                    resizeMode="contain"
                    imageBackgroundColor="black"
                    source={{uri: item.source_url, cache:"force-cache"}}
                    style={{height:(WIDTH-60)*0.75, width:WIDTH-60}}
                />
                {/* <View style={{height:60, backgroundColor:'white', borderWidth:0.5, borderBottomLeftRadius:15, borderBottomRightRadius:15, justifyContent:'center'}} >
                    <Text style={styles.title}>{item.title.rendered.replace("_",". ").replace(/_/g, " ")}</Text>
                </View> */}
            </View>
        );
    }

    render(){
        return (
            <>
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={this.props.images}
                    renderItem={this._renderItem}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH-60}
                    layout="default"
                    removeClippedSubviews
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:1,
        height:350,
        justifyContent:'center',
        marginVertical:15,
        backgroundColor:'black',
        borderRadius:15
    },
    title:{
        marginHorizontal: 15,
        alignSelf:'center',
        fontSize: 20,
        fontFamily:"Raleway-Light",
        color:'black'
    }
});

export default SnapCarousel;