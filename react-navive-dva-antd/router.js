import React, { PureComponent } from 'react'
import {
    BackHandler,
    Animated,
    Easing,
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation'

import { connect } from 'react-redux'

import Home from './containers/Home'
import User from './containers/User'

const Loading = () =>
    <View style={styles.container}>
        <ActivityIndicator />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const HomeNavigator = TabNavigator(
    {
        Home: { screen: Home },
        User: { screen: User }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: true
    }
)
@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
    render() {
        const { dispatch, app, router } = this.props
        console.log(app, router)
        if (app.loading) return <Loading />
        const navigation = addNavigationHelpers({ dispatch, state: router })
        return <HomeNavigator navigation={navigation} />
    }
}

export function routerReducer(state, action = {}) {
    return HomeNavigator.router.getStateForAction(action, state)
}

export default Router
