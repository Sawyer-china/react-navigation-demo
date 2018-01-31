import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

const LoginScreen = (o) => {
    console.log('00000000000000000000000')
    console.log(o)
    console.log('00000000000000000000000')
    const { navigation } = o
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Screen A</Text>
            <Text style={{ fontSize: 20 }}>This is great</Text>
            <Button
                onPress={() => {
                    navigation.dispatch({ type: 'Login' }) // 分发一个动作给navigator
                    // navigation.navigate('Main')
                }}
                title="Log in"
            />
        </View>
    )
}


LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

LoginScreen.navigationOptions = {
    title: 'Log In'
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})


export default connect(mapStateToProps)(LoginScreen)