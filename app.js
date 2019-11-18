var count = 0;
var toggle = 0;

var increasCount = () => {
  count = count + 1;

  if(count === 9){
    alert(`It's a Draw!`);
    count= 0;
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
      element.value = 'X';
      toggle = 1;
    } else{
      element.value = 'O';
      toggle = 0;
    }
  }
}

var resetAll = () => {
  var ids = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  ids.map((id, key) => {
    var element = document.getElementById(id);
    element.value = ' ';
  })
}
