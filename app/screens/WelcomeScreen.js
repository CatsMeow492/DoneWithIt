import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/background.jpg')}>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

export default WelcomeScreen;