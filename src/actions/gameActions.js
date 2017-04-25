import { value, isTerminal, utility } from './helper';

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

function stopGame(winner) {
    return {
        type: 'STOP_GAME',
        payload: {
            winner
        }
    };
}

export function aiPlayTurn() {
    return (dispatch, getState) => {
        dispatch(aiFirst());
        dispatch(aiMove(getState().game));
    };
}

export function playTurn(index) {
    return (dispatch, getState) => {
        dispatch(makeMove(index));
        if (isTerminal(getState().game.board)) {
            if (utility(getState().game.board) === 0) {
                dispatch(stopGame('DRAW'));
            } else {
                dispatch(stopGame('PLAYER WINS'));
            }
        } else {
            dispatch(aiMove(getState().game));
            if (isTerminal(getState().game.board)) {
                if (utility(getState().game.board) === 0) {
                    dispatch(stopGame('DRAW'));
                } else {
                    dispatch(stopGame('AI WINS'));
                }
            }
        }
    };
}
