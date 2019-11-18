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
  console.log("hi in resetall")
}
