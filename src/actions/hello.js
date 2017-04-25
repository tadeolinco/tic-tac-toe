function utility(board) {
    if (
        (board[0] === board[1] && board[2] === board[1] && board[0] === 'O') ||
        (board[0] === board[4] && board[0] === board[7] && board[0] === 'O') ||
        (board[0] === board[3] && board[0] === board[6] && board[0] === 'O') ||
        (board[1] === board[4] && board[1] === board[7] && board[0] === 'O') ||
        (board[2] === board[5] && board[2] === board[8] && board[0] === 'O') ||
        (board[3] === board[4] && board[3] === board[5] && board[0] === 'O') ||
        (board[6] === board[7] && board[7] === board[8] && board[0] === 'O') ||
        (board[2] === board[4] && board[2] === board[5] && board[0] === 'O')
    )
        return 1;
    else if (
        (board[0] === board[1] && board[2] === board[1] && board[0] === 'X') ||
        (board[0] === board[4] && board[0] === board[7] && board[0] === 'X') ||
        (board[0] === board[3] && board[0] === board[6] && board[0] === 'X') ||
        (board[1] === board[4] && board[1] === board[7] && board[0] === 'X') ||
        (board[2] === board[5] && board[2] === board[8] && board[0] === 'X') ||
        (board[3] === board[4] && board[3] === board[5] && board[0] === 'X') ||
        (board[6] === board[7] && board[7] === board[8] && board[0] === 'X') ||
        (board[2] === board[4] && board[2] === board[5] && board[0] === 'X')
    )
        return -1;

    return 0;
}

function isTerminal(board) {
    for (let cell of board) {
        if (cell !== '') {
            return false;
        }
    }
    return true;
}
function successors(board, turnCount) {
    let boards = [];
    let move = turnCount % 2 == 0 ? 'X' : 'O';
    board.forEach((cell, index) => {
        if (cell === '') {
            let boardCopy = board.slice();
            boardCopy[index] = move;
            boards.push(boardCopy);
        }
    });

    return boards;
}

function maxValue(board, turnCount) {
    let m = Number.NEGATIVE_INFINITY;
    let  s = successors(board, turnCount);
    for (let m of s ){
      m  = Math.max(m, value(board, turnCount));
    }
    return m;
}

function minValue(board, turnCount){
  let m = Number.POSITIVE_INFINITY;
  let s = successors(board, turnCount);
  for(let m of s){
    m = Math.min(m, value(board, turnCount));
  }
  return m;
}

function value(board, turnCount) {
    if (isTerminal(board)) {
        return utility(board);
    } else if (turnCount % 2 == 1) {
        return maxValue(board, turnCount);
    } else {
        return minValue(board, turnCount);
    }
}
