import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppWithNavigationState from './navigators/AppNavigator'
import AppReducer from './reducers'

export default class ReduxExampleApp extends Component {
    store = createStore(AppReducer)
    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}
