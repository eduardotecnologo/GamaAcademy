let elementos = [];
let topo      = -1;
const MAX     = 10;

function push(num){
  if(topo < MAX){
    topo++;
    elementos[topo] = num;
  }else{
    console.log("Pilha cheia!!!");
  }
}

function estaVazia(){
  return topo == -1;
}

function pop(){
  if(topo != -1){
    let num = elementos[topo];
    topo--;
    return num;
  }else{
    console.log("A pilha está vazia!");
  }
}

push(10);
push(20);
push(30);
push(40);

console.log(elementos);

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());