import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../store/reducers/rootReducer';
// createSagaMiddleware - connects the Sagas to the Redux Store
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../store/sagas';
import logger from 'redux-logger';

const configureStore = () => {
  // create the saga middleware and mount it on the Store
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, logger]

  const store = createStore(
    rootReducer,
    compose(
      // applyMiddleware is an enhancer
      applyMiddleware(...middleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store
}

export default configureStore;