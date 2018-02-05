import { createAction, NavigationActions, delay } from '../utils'
export default {
    namespace: 'app',
    state: {
        login: false,
        loading: true,
        fetching: false
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {
        *loadStorage(action, { call, put }) {
            // const login = yield call(Storage.get, 'login', false)
            yield call(delay, 2500)
            yield put(createAction('updateState')({ loading: false }))
        }
    },
    subscriptions: {
        setup(o) {
            const { history, dispatch } = o
            dispatch({ type: 'loadStorage' })
        }
    }
}
