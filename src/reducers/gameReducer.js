const gameReducer = (
    state = {
        turnCount: 0,
        board: ['', '', '', '', '', '', '', '', '']
    },
    action
) => {
    switch (action.type) {
        case 'PLAY_TURN':
            return {
                ...state,
                board: [
                    ...state.board.slice(0, action.payload.index),
                    state.turnCount % 2 === 0 ? 'X' : 'O',
                    ...state.board.slice(action.payload.index + 1)
                ],
                turnCount: state.turnCount + 1
            };
        default:
            return state;
    }
};

export default gameReducer;
