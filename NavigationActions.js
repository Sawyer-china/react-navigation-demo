import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button, Image } from 'react-native'
import {
    NavigationActions,
    TabNavigator,
    StackNavigator
} from 'react-navigation'

class HomeScreen extends Component {
    render() {
        console.log(this.props.navigation.params)
        const navigateAction = NavigationActions.navigate({
            // 跳转到指定的chat
            routeName: 'Chat',
            params: {
                // 带的参数
                title: 'test'
            },
            // action 如果想跳转到指定路由 chat 的子 屏幕路由 请使用该方式 请参考下面的案例
            action: NavigationActions.navigate({ routeName: 'ChatScreen' })
        })
        return (
            <View>
                <Button
                    onPress={() =>
                        this.props.navigation.dispatch(navigateAction)}
                    title="Go back from this HomeScreen"
                />
            </View>
        )
    }
}

class ChatScreen extends Component {
    render() {
        const backAction = NavigationActions.back({
            //返回上一屏幕并关闭当前屏幕。返回( back )动作创建者具有一个可选参数：
            key: 'Chat' //  可选 - 如果设置，导航将从给定的键返回。如果为空，导航将返回任何地方.
        })
        const setParamsAction = NavigationActions.setParams({
            // 当发送SetParams动作时，路由器将产生一个新的状态，该状态改变了特定路由的参数，由密钥标识
            params: {
                // 带的参数
                test: 'Hello'
            },
            key: 'Chat' // 路由 key 应该得到新的参数
        })
        const resetAction = NavigationActions.reset({
            // 重置堆栈式导航的路由顺序
            index: 1, // 到哪个索引的路由中去
            actions: [
                NavigationActions.navigate({ routeName: 'Chat' }),
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        })

        return (
            <View>
                <Text>fdsafasf dsa </Text>
                <Button
                    onPress={() => this.props.navigation.dispatch(backAction)}
                    title="back"
                />
                <Button
                    onPress={() => {
                        return this.props.navigation.dispatch(setParamsAction)
                    }}
                    title="setParams"
                />
                <Button
                    onPress={() => {
                        console.log(this.props.navigation)
                    }}
                    title="update Params"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.dispatch(resetAction)
                    }}
                    title="resetActive"
                />
            </View>
        )
    }
}

const StackHome = ({ navigation }) => {
    return (
        <View>
            <Text>stackHome</Text>
            <Button
                onPress={() => {
                    navigation.navigate('Chat1')
                }}
                title="go to StackChat"
            />
        </View>
    )
}
const StackChat = ({ navigation }) => {
    const navigateAction = NavigationActions.navigate({
        // 跳转到指定的chat
        routeName: 'Chat',
        params: {
            // 带的参数
            title: 'test'
        },
        action: NavigationActions.navigate({ routeName: 'Home1' })
    })
    return (
        <View>
            <Text>stackChat</Text>
            <Button
                onPress={() => {
                    navigation.dispatch(navigateAction)
                }}
                title="navigatea action"
            />
        </View>
    )
}

const stackNavigator = StackNavigator({
    Home1: {
        screen: StackHome,
        navigationOptions: {
            headerTitle: 'Stack首页'
        }
    },
    Chat1: {
        screen: StackChat,
        navigationOptions: {
            headerTitle: 'StackChat'
        }
    }
})

const tabNavigator = TabNavigator({
    Home: {
        screen: stackNavigator
    },
    Chat: {
        screen: stackNavigator
    }
})

export default tabNavigator
