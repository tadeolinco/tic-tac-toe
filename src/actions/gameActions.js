function makeMove(index) {
    return {
        type: 'MAKE_MOVE',
        payload: {
            index
        }
    };
}

function checkStatus(board) {
    if (board[0] === board[1] && board[2] === board[1] && board[0] !== '')
        return board[0];
    else if (board[0] === board[4] && board[0] === board[7] && board[0] !== '')
        return board[0];
    else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '')
        return board[0];
    else if (board[1] === board[4] && board[1] === board[7] && board[0] !== '')
        return board[1];
    else if (board[2] === board[5] && board[2] === board[8] && board[0] !== '')
        return board[2];
    else if (board[3] === board[4] && board[3] === board[5] && board[0] !== '')
        return board[3];
    else if (board[6] === board[7] && board[7] === board[8] && board[0] !== '')
        return board[6];
    else if (board[2] === board[4] && board[2] === board[5] && board[0] !== '')
        return board[2];
    else if (
        board[0] !== '' &&
        board[1] !== '' &&
        board[2] !== '' &&
        board[3] !== '' &&
        board[4] !== '' &&
        board[6] !== '' &&
        board[7] !== '' &&
        board[8] !== ''
    )
        return 'draw';
    else return false;
}

function minNode(board, index, turnCount) {
    let m = Number.POSITIVE_INFINITY; // positive infinity
    // always make copy of board so previous state wont be change
    let boardCopy = board.slice();

    if (turnCount % 2 === 0) {
        boardCopy[index] = 'X';
    } else {
        boardCopy[index] = 'O';
    }

    console.log(boardCopy);
    let status = checkStatus(boardCopy);
    if (status === false) {
        for (let i = 0; i < 9; ++i) {
            //min algo
            if (boardCopy[i] === '') {
                let v = maxNode(boardCopy, i, turnCount + 1);
                m = Math.min(m, v);
            }
        }
    } else if (status === 'draw') {
        return 0;
    } else {
        console.log(status); //lacks when draw
        if (status === 'X') return -1;
        else if (status === 'O') return 1;
        else return 0;
    }

    return m;
}

function maxNode(board, index, turnCount) {
    let m = Number.NEGATIVE_INFINITY;
    let v = 0;
    // always make copy of board so previous state wont be change
    let boardCopy = board.slice();

    m = Number.NEGATIVE_INFINITY; // negative infinity

    if (turnCount % 2 === 0) {
        boardCopy[index] = 'X';
    } else {
        boardCopy[index] = 'O';
    }

    console.log(boardCopy);
    let status = checkStatus(boardCopy);
    if (status === false) {
        for (let i = 0; i < 9; ++i) {
            //max algo
            if (boardCopy[i] === '') {
                v = minNode(boardCopy, i, turnCount + 1);
                m = Math.max(m, v);
            }
        }
    } else {
        console.log(status);
        if (status === 'X') return -1;
        else if (status === 'O')
            //lacks when draw
            return 1;
        else return 0;
    }
    return m;
}

function aiMove(game, status) {
    let index = 0;
    let values = [];
    let turnCount = game.turnCount;
    let boardCopy = game.board.slice();

    for (let i = 0; i < 9; i++) {
        //main tree.
        if (boardCopy[i] === '') {
            //stores value of each sub tree to values
            values[i] = minNode(boardCopy, i, turnCount);
        }
    }

    console.log(game.board);
    for (let i = 0; i < 9; ++i) {
        //chooses the best move
        if (values[index] < values[i]) {
            if (boardCopy[i] === '') {
                index = i;
            }
        }
    }

    console.log(index);
    return makeMove(index);
}

export function playTurn(index, game) {
    return (dispatch, getState) => {
        // sends MAKE_MOVE action to gameReducer
        dispatch(makeMove(index));
        dispatch(aiMove(getState().game));
        //dispatch(copmute(getState().game));
        // compute here
    };
}
