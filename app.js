var ids = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
var size = 3;
var board = [];
var count = 0;
var toggle = 0;

window.onload = () => {
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
      check(id, 'X');
      element.value = 'X';
      toggle = 1;
    } else{
      element.value = 'O';
      check(id, 'O');
      toggle = 0;
    }
  }
}

var resetAll = () => {
  count = 0;

  ids.map((id, key) => {
    var element = document.getElementById(id);
    element.value = ' ';
  })
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

var check = (id, value) => {
  var loc = point(id);
  
  if(!rowCheck(loc, value)||!colCheck(loc, value) ||!diagonalCheck(value)){
    return false;
  }
  return true;
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
  for(var i = 0; i < size; i++){
    if(board[i][i] !== value){
      return false;
    }
  }

  var i = 2;
  var j = 0;
  while(j < size){
    if(board[i][j] !== value){
      return false;
    }
    i--; 
    j++;
  }
  
  return true;
}
