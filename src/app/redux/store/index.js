import { createStore,applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { RootReducer } from '../reducers/index';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    root:RootReducer
});

const persistConfig = {
    key: 'metricmanager',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {
    store,
    persistor
}
