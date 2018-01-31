import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction
    // tempNavState
)

function nav(state = initialNavState, action) {
    let nextState = null
    switch (action.type) {
        case 'Login':
            console.log('state')
            console.log(state)
            console.log('state')
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            )
            break
        case 'Logout':
            console.log('Logout')
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            )
            break
        case 'Profile':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            )
            break
        default:
            console.log('default')
            nextState = AppNavigator.router.getStateForAction(action, state)
            console.log(nextState)
            break
    }
    console.log('nav next state')
    console.log(nextState)

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
}

const initialAuthState = { isLoggedIn: false }

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            console.log('authLogon')
            return { ...state, isLoggedIn: true }
        case 'Logout':
            return { ...state, isLoggedIn: false }
        default:
            return state
    }
}

export default combineReducers({
    nav,
    auth
})
