import React from 'react';
import { Image, StyleSheet } from 'react-native';

function ViewImageScreen(props) {
    return (
        <Image style={} source={require('../assets/chair.jpg')}></Image>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;