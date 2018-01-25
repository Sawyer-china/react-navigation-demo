import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button, Image } from 'react-native'
import { NavigationActions, TabNavigator } from 'react-navigation'


const navigateAction = NavigationActions.navigate({
    routeName: 'ChatScreen',

    params: {},

    action: NavigationActions.navigate({ routeName: 'ChatScreen' })
})


class HomeScreen extends Component {
    render() {
        // console.log(this.props.navigation)//
        
        const { goBack } = this.props.navigation
        console.log()
        return (
            <View>
                <Button
                    onPress={() => goBack()}
                    title="Go back from this HomeScreen"
                />
                <Button onPress={() => goBack(null)} title="Go back anywhere" />
                <Button
                    onPress={() => goBack('screen-123')}
                    title="Go back from screen-123"
                />
                <Button
                    onPress={() => this.props.navigation.dispatch('ChatScreen')}
                    title="Go navigateAction"
                />
            </View>
        )
    }
}

class ChatScreen extends Component {
    render() {
        return (
            <View>
                <Text>fdsafasf dsa </Text>
            </View>
        )
    }
}



const tabNavigator = TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Chat: {
        screen: ChatScreen
    }
})

export default tabNavigator
