var ids = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
var size = 3;
var board = [];
var count = 0;
var toggle = 0;

window.onload = () => {initialized();}

var initialized = () => {
  for(var i = 0; i < size; i++){
    var row = [];
    for(var j= 0; j < size; j++){
      row.push('');
    }
    board.push(row);
  }
}

var increasCount = () => {
  count = count + 1;

  if(count > 8){
    alert(`It's a Draw!`);
    resetAll();
  }
}

var eleValue = (id) => {
  var element = document.getElementById(id);

  if(element.value !== ' '){
    alert(`Try Again`);
    return;
  } 
  
  else{
    increasCount();
    if(toggle === 0){
      if(updateBoard(id, 'X')){
        alert(`X`);
      }
      toggle = 1;
    } 
    
    else{
      if(updateBoard(id, 'O')){
        alert(`O`);
      }
      toggle = 0;
    }
  }
}

var resetAll = () => {
  count = 0;
  board = [];
  initialized();
  ids.map((id, key) => {
    var element = document.getElementById(id);
    element.value = ' ';
  })
}

var updateBoard = (id, value) => {
  let element = document.getElementById(id);
  element.value = value;

  let {row, col} = point(id);
  board[row][col] = value;
  var passed = check({row, col}, value);
  return passed;
}

var point = (id) => {
  var num = Number(id[1]);

  if(num < 3){
    return {row: 0, col: num};
  }
  else if(num < 6 && num >= 3){
    return {row: 1, col: (num-size)};
  }
  else{
    return {row: 2, col: (num-(size * 2))};
  }
}

var check = (loc, value) => {
  if(rowCheck(loc, value)||colCheck(loc, value) ||diagonalCheck(value)){
    return true;
  }
  return false;
}

var rowCheck = (loc, value) => {
  var r = loc.row;

  if(board[r][0] === value && board[r][1] === value && board[r][2] === value){
    return true;
  }
  return false;
}

var colCheck = (loc, value) => {
  var c = loc.col;

  if(board[0][c] === value && board[1][c] === value && board[2][c] === value){
    return true;
  }
  return false;
}

var diagonalCheck = (value) => {  
  var arr = [];

  for(var i = 0; i < size; i++){
    if(board[i][i] === value || board[2-i][i] === value){
      arr.push(true);
    } else{
      arr.push(false);
    }
  }

  return (arr[0] && arr[1] && arr[2]);
}
