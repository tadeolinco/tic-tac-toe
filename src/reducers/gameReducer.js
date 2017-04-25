const gameReducer = (
    state = {
        playing: false,
        turnCount: 0,
        board: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    },
    action
) => {
    switch (action.type) {
        case 'MAKE_MOVE':
            return {
                ...state,
                board: [
                    ...state.board.slice(0, action.payload.index),
                    state.turnCount % 2 === 0 ? 'X' : 'O',
                    ...state.board.slice(action.payload.index + 1)
                ],
                turnCount: state.turnCount + 1
            };
        case 'AI_FIRST':
            return {
                ...state,
                turnCount: 1,
                playing: true,
                board: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
            };
        case 'PLAYER_FIRST':
            return {
                ...state,
                turnCount: 0,
                playing: true,
                board: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
            };
        case 'STOP_GAME':
            return {
                ...state,
                playing: false
            };
        default:
            return state;
    }
};

export default gameReducer;
