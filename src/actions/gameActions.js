import { value, isTerminal } from './helper';

function makeMove(index) {
    return {
        type: 'MAKE_MOVE',
        payload: {
            index
        }
    };
}

function aiMove(game) {
    return makeMove(value(game.board, game.turnCount).index);
}

export function playerFirst() {
    return {
        type: 'PLAYER_FIRST'
    };
}

export function aiFirst() {
    return {
        type: 'AI_FIRST'
    };
}

function stopGame() {
    return {
        type: 'STOP_GAME'
    };
}

export function aiPlayTurn() {
    return (dispatch, getState) => {
        dispatch(aiFirst());
        dispatch(aiMove(getState().game));
        if (isTerminal(getState().game.board)) {
            dispatch(stopGame());
        }
    };
}

export function playTurn(index) {
    return (dispatch, getState) => {
        dispatch(makeMove(index));
        if (isTerminal(getState().game.board)) {
            dispatch(stopGame());
        } else {
            dispatch(aiMove(getState().game));
            if (isTerminal(getState().game.board)) {
                dispatch(stopGame());
            }
        }
    };
}
