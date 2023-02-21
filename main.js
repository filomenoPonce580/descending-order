function descendingOrder(n){
  //split, sort high to low, join, turn into number and return
  return Number(n.split('').sort((a,b)=>b-a).join(''))
}
