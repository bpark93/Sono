import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ImageModal from 'react-native-image-modal';

const WIDTH = Dimensions.get('window').width;

class SnapCarousel extends Component {
    
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <ImageModal 
                    resizeMode="contain"
                    imageBackgroundColor="black"
                    source={{uri: item.source_url}}
                    style={{height:275, width:WIDTH-60}}
                />
                <View style={{height:60, backgroundColor:'white', borderWidth:0.5, borderBottomLeftRadius:15, borderBottomRightRadius:15, justifyContent:'center'}} >
                    <Text style={styles.title}>{item.title.rendered.replace("_",". ").replace(/_/g, " ")}</Text>
                </View>
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
                />
                {/* <Pagination
                    dotsLength={this.props.images.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                /> */}
            </>
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:1,
        height:350,
        justifyContent:'flex-end',
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