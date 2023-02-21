function descendingOrder(n){
  //turn to string, split, sort high to low, join, turn into number and return
  return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
}
