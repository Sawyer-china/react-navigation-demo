import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

const MainScreen = ({ logout, loginScreen, isLoggedIn, goP }) => {
    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
            {isLoggedIn ? <Button onPress={goP} title="Profile" /> : null}

            <Button
                title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
                onPress={isLoggedIn ? logout : loginScreen}
            />
        </View>
    )
}

MainScreen.navigationOptions = {
    title: 'Main'
}

MainScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch({ type: 'Logout' })
    },
    loginScreen: () => {
        dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    },
    goP: () => {
        dispatch(NavigationActions.navigate({ routeName: 'Profile' }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
