export function utility(board, count) {
    if (
        (board[0] === board[1] && board[2] === board[1] && board[0] === 'O') ||
        (board[3] === board[4] && board[3] === board[5] && board[3] === 'O') ||
        (board[6] === board[7] && board[6] === board[8] && board[6] === 'O') ||
        (board[0] === board[3] && board[0] === board[6] && board[0] === 'O') ||
        (board[1] === board[4] && board[1] === board[7] && board[1] === 'O') ||
        (board[2] === board[5] && board[2] === board[8] && board[2] === 'O') ||
        (board[0] === board[4] && board[0] === board[8] && board[0] === 'O') ||
        (board[2] === board[4] && board[2] === board[6] && board[2] === 'O')
    )
        return 1;
    else if (
        (board[0] === board[1] && board[2] === board[1] && board[0] === 'X') ||
        (board[3] === board[4] && board[3] === board[5] && board[3] === 'X') ||
        (board[6] === board[7] && board[6] === board[8] && board[6] === 'X') ||
        (board[0] === board[3] && board[0] === board[6] && board[0] === 'X') ||
        (board[1] === board[4] && board[1] === board[7] && board[1] === 'X') ||
        (board[2] === board[5] && board[2] === board[8] && board[2] === 'X') ||
        (board[0] === board[4] && board[0] === board[8] && board[0] === 'X') ||
        (board[2] === board[4] && board[2] === board[6] && board[2] === 'X')
    )
        return -1;

    return 0;
}

export function isTerminal(board) {
    if (utility(board)) return true;
    for (let cell of board) {
        if (cell === '-') {
            return false;
        }
    }
    return true;
}

function successors(board, turnCount) {
    let boards = [];
    let move = turnCount % 2 === 0 ? 'X' : 'O';
    board.forEach((cell, index) => {
        if (cell === '-') {
            let boardCopy = {};
            boardCopy.board = board.slice();
            boardCopy.board[index] = move;
            boardCopy.index = index;
            boards.push(boardCopy);
        }
    });

    return boards;
}

function maxValue(board, turnCount, alpha, beta) {
    let s = successors(board, turnCount);
    let returnBoard = {};
    returnBoard.m = Number.NEGATIVE_INFINITY;
    for (let boardCopy of s) {
        let copy = value(boardCopy.board, turnCount + 1, alpha, beta);
        let m = typeof copy.m === 'undefined' ? copy : copy.m;
        if (m > returnBoard.m) {
            returnBoard.m = m;
            returnBoard.index = boardCopy.index;
        }
        alpha = Math.max(alpha, returnBoard.m);
        if (beta <= alpha) {
            break;
        }
    }
    return returnBoard;
}

function minValue(board, turnCount, alpha, beta) {
    let s = successors(board, turnCount);
    let returnBoard = {};
    returnBoard.m = Number.POSITIVE_INFINITY;
    for (let boardCopy of s) {
        let copy = value(boardCopy.board, turnCount + 1, alpha, beta);
        let m = typeof copy.m === 'undefined' ? copy : copy.m;
        if (m < returnBoard.m) {
            returnBoard.m = m;
            returnBoard.index = boardCopy.index;
        }
        beta = Math.min(beta, returnBoard.m);
        if (beta <= alpha) {
            break;
        }
    }
    return returnBoard;
}

export function value(board, turnCount, alpha, beta) {
    if (isTerminal(board)) {
        return utility(board, turnCount);
    } else if (turnCount % 2 === 1) {
        return maxValue(board, turnCount, alpha, beta);
    } else {
        return minValue(board, turnCount, alpha, beta);
    }
}
