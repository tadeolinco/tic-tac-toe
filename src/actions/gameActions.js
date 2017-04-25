function makeMove(index) {
    return {
        type: 'MAKE_MOVE',
        payload: {
            index
        }
    };
}

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
    let move = turnCount % 2 === 0 ? 'X' : 'O';
    board.forEach((cell, index) => {
        if (cell === '') {
            let boardCopy = {};
            boardCopy.board = board.slice();
            boardCopy.board[index] = move;
            boardCopy.index = index;
            boards.push(boardCopy);
        }
    });

    return boards;
}

function maxValue(board, turnCount) {
    let  s = successors(board, turnCount);
    let returnBoard = {};
    returnBoard.m = Number.NEGATIVE_INFINITY;
    for (let boardCopy of s ){
      let copy = value(boardCopy.board, turnCount +1);
      let m = typeof copy.m === "undefined" ? copy : copy.m;
      if(returnBoard.m  > m){
        returnBoard.m = m;
        returnBoard.index = boardCopy.index ;
      }
    }
    return returnBoard;
}

function minValue(board, turnCount){
  let s = successors(board, turnCount);
  let returnBoard = {};
  returnBoard.m = Number.POSITIVE_INFINITY;
  for(let boardCopy of s){
    let copy = value(boardCopy.board, turnCount +1);
    let m = typeof copy.m === "undefined" ? copy : copy.m;
    if(returnBoard.m  < m){
      returnBoard.m = m;
      returnBoard.index = boardCopy.index ;
    }
  }
  return returnBoard;
}

function value(board, turnCount) {
    if (isTerminal(board)) {
        return utility(board);
    } else if (turnCount % 2 === 1) {
        return maxValue(board, turnCount);
    } else {
        return minValue(board, turnCount);
    }
}


function aiMove(game) {
    return makeMove(value(game.board, game.turnCount).index);
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
