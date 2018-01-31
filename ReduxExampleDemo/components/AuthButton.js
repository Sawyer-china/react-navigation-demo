import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => {
    return (
        <Button
            title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
            onPress={isLoggedIn ? () => {logout('sdf')} : loginScreen}
        />
    )
}

AuthButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logout(a) {
        console.log(a)
        dispatch({ type: 'Logout' })
    },
    loginScreen: () =>
        dispatch(NavigationActions.navigate({ routeName: 'Login' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)
