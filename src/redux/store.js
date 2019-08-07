import { createStore, combineReducers, applyMiddleware } from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './reducers/auth_reducer'
import prodReducer from './reducers/product_reducer'

const reducers = combineReducers({
    auth: authReducer,
    products: prodReducer
})

const persistConfig = {
    key:'sho',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)


export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware))
export const persistor = persistStore(store)
