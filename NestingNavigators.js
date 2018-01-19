import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
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
                        navigate('EditInfo', { user: 'Lucys' })
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

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state: { params }, setParams, navigate } = navigation
        const isInfo = params.mode === 'info'
        const { user } = params
        return {
            title: `Chat with ${user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => {
                        setParams({ mode: isInfo ? 'none' : 'info' })
                    }}
                />
            )
        }
    }
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

class ActivityIndicator extends Component {
    render() {
        return (
            <Button
                style={{
                    color: '#ff0000'
                }}
                title="Test"
                onPress={() => {}}
            />
        )
    }
}

class EditInfoScreen extends Component {
    constructor(props){
        super()
        const { params } = props.navigation.state
        this.state = {
            nickname: `${params.user}`
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state
        let headerRight = (
            <Button
                title="Save"
                onPress={params.handleSave ? params.handleSave : () => null}
            />
        )
        if (params.isSaving) {
            headerRight = <ActivityIndicator />
        }
        return { headerRight }
    }

    _handleSave = () => {
        // Update state, show ActivityIndicator
        this.props.navigation.setParams({ isSaving: true })
        // this.setState((prevState, props) => ({
        //     nickname: prevState.nickname + '123'
        // }))
        // Fictional function to save information in a store somewhere
        // saveInfo().then(() => {
        //     this.props.navigation.setParams({ isSaving: false })
        // })
    }

    componentDidMount() {
        // We can only set the function after the component has been initialized
        this.props.navigation.setParams({ handleSave: this._handleSave })
    }

    render() {
        return (
            <TextInput
                onChangeText={nickname => this.setState({ nickname })}
                placeholder={'Nickname'}
                value={this.state.nickname}
            />
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

class NavigatorWrappingScreen extends Component {
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
    },
    EditInfo: {
        screen: EditInfoScreen
    }
})

export default RootNavigator
