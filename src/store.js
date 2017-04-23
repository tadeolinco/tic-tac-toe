import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer';
const logger = createLogger();

export default createStore(
    combineReducers({
        game: gameReducer
    }),
    {},
    applyMiddleware(ReduxThunk, logger)
);
