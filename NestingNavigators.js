import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class RecentChatsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}>Home Screen</Text>
                <Button
                    onPress={() => {
                        navigate('Chat', { user: 'Lucys' })
                    }}
                    title="Chat with Lucys"
                />
            </View>
        )
    }
}

class AllContactsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}> AllPage </Text>
                <Button
                    onPress={() => {
                        navigate('Chat', { user: 'Sawyer' })
                    }}
                    title="Chat with Sawyer"
                />
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: {
        screen: AllContactsScreen,
        navigationOptions: {
            headerTitle: 'All Page'
        }
    }
})

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    })
    render() {
        const { params } = this.props.navigation.state
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}>
                    Chat with {params.user}
                </Text>
            </View>
        )
    }
}

class NavigatorWrappingScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>公共组件</Text>
                <MainScreenNavigator navigation={this.props.navigation} />
            </View>
        )
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router

const RootNavigator = StackNavigator({
    Home: {
        screen: NavigatorWrappingScreen,
        navigationOptions: {
            title: 'HomePage'
        }
    },
    Chat: {
        screen: ChatScreen
    }
})

export default RootNavigator
