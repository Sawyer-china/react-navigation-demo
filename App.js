import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        )
    }
}

// StackNavigator
// const HomeScreen = ({ navigation }) =>
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button onPress={() => {navigation.navigate('Details')}} title="go to details"/>
//     </View>

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HomePage'
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Home Screen</Text>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('Chat')
                    }}
                    title="go to details"
                />
            </View>
        )
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy'
    }
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        )
    }
}

const DetailsScreen = () =>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

// StackNavigator
const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Chat: {
        screen: ChatScreen
    }
})

// TabNavigator 底部导航切换
// const RootNavigator = TabNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             drawerLabel: 'Home',
//             drawerIcon: ({ tintColor, focused }) =>
//                 <Ionicons
//                     name={focused ? 'ios-home' : 'ios-home-outline'}
//                     sise={20}
//                     style={{ color: tintColor }}
//                 />
//         }
//     },
//     Profile: {
//         screen: DetailsScreen,
//         navigationOptions: {
//             drawerLabel: 'Profile',
//             drawerIcon: ({ tintColor, focused }) =>
//                 <Ionicons
//                     name={focused ? 'ios-person' : 'ios-person-outline'}
//                     sise={20}
//                     style={{ color: tintColor }}
//                 />
//         }
//     }
// })

// 左侧抽屉式导航
// const RootNavigator = DrawerNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             drawerLabel: 'HomePage'
//         }
//     },
//     Details: {
//         screen: DetailsScreen,
//         navigationOptions: {
//             drawerLabel: 'DetailsPage'
//         }
//     }
// })

export default RootNavigator
