export function playTurn(index) {
    return {
        type: 'PLAY_TURN',
        payload: {
            index
        }
    };
}
