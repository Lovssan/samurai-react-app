import {dialogsReducer} from './dialogs.reducer'
import {profileReducer} from './profile.reducer'
import {sideBarReducer} from './sidebar.reducer'
import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import { usersReducer } from './users.reducer'
import { authReducer } from './auth.reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app.reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store
export default store