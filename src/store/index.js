import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
