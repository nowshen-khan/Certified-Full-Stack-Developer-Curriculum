
function repeatStringNumTimes(str, num){
  let string = "";
  if(num<=0){
    return string;
  }
  for(let i=0; i<num; i++){
    string += str;
  }
  return string;
}

console.log(repeatStringNumTimes("*", 3))
console.log(repeatStringNumTimes("abc", 3))
console.log(repeatStringNumTimes("abc", 4))
console.log(repeatStringNumTimes("abc", 1))
console.log(repeatStringNumTimes("*", 8))
console.log(repeatStringNumTimes("abc", -2))



