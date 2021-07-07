let values = [8, 7, 6, 5, 4, 3, 2, 1];

function ordena(){
  let init = 0;
  let end = 8;
  let tmp;

  for(repeat = 0; repeat < 8; repeat++){
    for(position = init; position < end - 1 - repeat; position++){
      if(values[position] > values[position + 1]){
        tmp = values[position];
        values[position] = values[position + 1];
        values[position + 1] = tmp;
      }
    }
  }
}
ordena();
console.log(values);