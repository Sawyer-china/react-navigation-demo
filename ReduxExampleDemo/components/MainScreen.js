import React from 'react'
import { StyleSheet, View } from 'react-native'

import LoginStatusMessage from './LoginStatusMessage'
import AuthButton from './AuthButton'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

class MainScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            a: 'test'
        }
    }
    render() {
        console.log('MainScreenc !!!!')
        console.log(this.props.navigation)
        console.log('MainScreenc !!!!')
        return (
            <View style={styles.container}>
                <LoginStatusMessage />
                <AuthButton />
            </View>
        )
    }
}

MainScreen.navigationOptions = {
    title: 'Home Screen'
}

export default MainScreen
