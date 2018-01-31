import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../navigators/AppNavigator'

console.log(AppNavigator)

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const setempNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Profile')
)
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction,
    // tempNavState
)



// console.log('firstAction')
// console.log(firstAction)
// console.log('tempNavState')
// console.log(tempNavState)
console.log('jfklsdafjals;')
console.log(AppNavigator.router.getPathAndParamsForState(setempNavState))

console.log(initialNavState)
function nav(state = initialNavState, action) {
    let nextState
    switch (action.type) {
        case 'Login':
        
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            )
            break
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            )
            break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
            break
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
}

const initialAuthState = { isLoggedIn: false }

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true }
        case 'Logout':
            return { ...state, isLoggedIn: false }
        default:
            return state
    }
}

const AppReducer = combineReducers({
    nav,
    auth
})

export default AppReducer
