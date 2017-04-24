function makeMove(index) {
    return {
        type: 'MAKE_MOVE',
        payload: {
            index
        }
    };
}

function checkStatus(board){
  if(board[0]===board[1] && board[2]===board[1] && board[0] !== "") return board[0];
  else if(board[0]===board[4] && board[0]===board[7] && board[0] !== "") return board[0];
  else if(board[0]===board[3] && board[0]===board[6] && board[0] !== "") return board[0];
  else if(board[1]===board[4] && board[1]===board[7] && board[0] !== "") return board[1];
  else if(board[2]===board[5] && board[2]===board[8] && board[0] !== "") return board[2];
  else if(board[3]===board[4] && board[3]===board[5] && board[0] !== "") return board[3];
  else if(board[6]===board[7] && board[7]===board[8] && board[0] !== "") return board[6];
  else if(board[2]===board[4] && board[2]===board[5] && board[0] !== "") return board[2];
  else return false;
}

function max (x, y){
  if (x>y) return x
  else return y
}

function min (x, y){
  if (x>y) return y
  else return x
}

function makeBoardCopy(board){
  var copy = [];
  for(let i = 0; i < 9; i++){
    if(board[i] === 'X') copy[i] = 'X';
    else if(board[i] === 'O') copy[i] = 'O';
    else copy[i] = '';
  }
  return copy;
}

function minNode (board, index, turnCount){
  var m, v;
  var boardCopy;
  var status;
  boardCopy = makeBoardCopy(board);         // always make copy of board so previous state wont be change
  m = 2;            // positive infinity
  if(turnCount% 2 === 0) boardCopy[index] = 'X';
  else boardCopy[index]= 'O';
  console.log(boardCopy);
  status = checkStatus(boardCopy);
  if(status === false){
    for(let i = 0; i < 9; ++i){                                     //min algo
      if(boardCopy[i] === ""){
        v = minNode(boardCopy, i, turnCount+1);
        m = min(m, v);
      }
    }
  }else{
    console.log(status);
    if(status === "X") return -1;
    else if (status ==="O") return 1;
    else return 0;
  }

  return m;

}

function maxNode (board, index, turnCount){
  var m, v;
  var boardCopy;
  var status;
  boardCopy = makeBoardCopy(board);         // always make copy of board so previous state wont be change
  m = -2;       // negative infinity
  if(turnCount% 2 === 0) boardCopy[index] = 'X';
  else boardCopy[index]= 'O';
  console.log(boardCopy);
  status = checkStatus(boardCopy);
  if(status === false){
    for(let i = 0; i < 9; ++i){                                     //max algo
      if(boardCopy[i] === ""){
        v = minNode(boardCopy, i, turnCount+1);
        m = max(m, v);
      }
    }
  }else{
    console.log(status);
    if(status === "X") return -1;
    else if (status ==="O") return 1;
    else return 0;
  }
  return m;
}




function aiMove(game, status){
  var index= 0;
  var turnCount;
  var values = [];
  var boardCopy;
  boardCopy = makeBoardCopy(game.board);
  turnCount = game.turnCount;
  for(let i = 0; i < 9; i++){
    if(boardCopy[i] === ""){
      values[i] = maxNode(boardCopy, i, turnCount);
    }
  }
  console.log(game.board);
  for(let i =0; i < 9; ++i){
    console.log(values[index] , "aksdjnaksd", values[i]);
    if(values[index] < values[i]){
      if(boardCopy[i] === ""){
        index =i;
      }
    }
  }
  console.log(index);
  return {
      type: 'MAKE_MOVE',
      payload: {
          index
      }
  };
}


export function playTurn(index, game ) {
    return (dispatch, getState) => {
        // sends MAKE_MOVE action to gameReducer
        dispatch(makeMove(index));
        dispatch(aiMove(getState().game));
        //dispatch(copmute(getState().game));
        // compute here
    };
}

/*
function makeBoardCopy(original, copy){
for(let i = 0; i < 9; ++i){
copy[i] = original[i];
}
return copy;
}

function makeMinNode(board, index){
var boardCopy = [];
boardCopy = makeBoardCopy(board, boardCopy);
var m = 2;          //positive infinity dapat
var v = 0;
boardCopy[index] = "X";
for(let i = 0; i < 9; ++i){                   //looks for all empty space and try to move there
v = makeMaxNode(boardCopy, i);
m = min(v, m);
}

return v;
}

function makeMaxNode(board, index){
var boardCopy = [];
boardCopy = makeBoardCopy(board, boardCopy);
var m = -2;                      //dapat neg infinity
var v= 0;
boardCopy[index] = "O";
for( let i =0; i < 9; ++i){
if(boardCopy[i] === ""){
v = makeMinNode(boardCopy, i);
m = max(v, m);
}
}

return{
};
}

function copmute(game){
var boardCopy = [];
boardCopy = makeBoardCopy(game.board, boardCopy);
for (let i = 0; i < 9; ++i) {
if(boardCopy[i] === ""){
makeMaxNode(boardCopy, i);
}
}
return{
type: "compute"
}
}
*/
