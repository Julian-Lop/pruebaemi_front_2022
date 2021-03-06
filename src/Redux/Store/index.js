import {legacy_createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../Reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(persistedReducer,composeEnhancer(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store
