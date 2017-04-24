const gameReducer = (
    state = {
        turnCount: 0,
        board: ['', '', '', '', '', '', '', '', '']
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
        case 'compute':
        console.log(state.board);
          return {
            ...state,
            turnCount: state.turnCount+ 1
          };
        default:
            return state;
    }
};

export default gameReducer;
