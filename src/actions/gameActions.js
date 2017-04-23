function makeMove(index) {
    return {
        type: 'MAKE_MOVE',
        payload: {
            index
        }
    };
}

export function playTurn(index) {
    return dispatch => {
        // sends MAKE_MOVE action to gameReducer
        dispatch(makeMove(index));
        // compute here
    };
}
