import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import LoginScreen from '../components/LoginScreen'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen'

export const AppNavigator = StackNavigator({
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen }
})

const AppWithNavigationState = ({ dispatch, nav }) => {
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
                dispatch,
                state: nav
            })}
        />
    )
}

const mapStateToProps = state => ({
    nav: state.nav,
    auth: state.auth
})

export default connect(mapStateToProps)(AppWithNavigationState)
