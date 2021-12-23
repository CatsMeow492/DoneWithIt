import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>The App I Built Instead of Harrison's</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.registerText}>Register</Text>
            </View>
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
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 10,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    registerText: {
        color: 'white',
        fontSize: 'Roboto',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 10,
    },
    logo: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 70,
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
    }
})

export default WelcomeScreen;