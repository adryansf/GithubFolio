import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

// RootReducer
import rootReducer from './modules/rootReducer';

// Persist configured
import persistReducers from './persistReducer';

const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
