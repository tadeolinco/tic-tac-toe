import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import gameReducer from './reducers/gameReducer';
const logger = createLogger();

export default createStore(
    combineReducers({
        game: gameReducer
    }),
    {},
    applyMiddleware(logger)
);
