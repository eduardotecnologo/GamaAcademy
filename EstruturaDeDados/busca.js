let values = [5, 8, 10, 22, 45, 38];

function seacrh(number){
  for(i = 0; i < 7; i++){
    if(number == values[i]){
      return i;
    }
  }
  return -1;
}
console.log(seacrh(45));