import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <View style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    loginText: {
        color: 'white',
        fontSize: 'Roboto',
        justifyContent: 'center'
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logo: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 70,
        justifyContent: 'center',
    }
})

export default WelcomeScreen;