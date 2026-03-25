

function mutation(arr){
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();

for(let letter of secondStr){
  if(!firstStr.includes(letter)){
    return false;
  }
}
return true;
}

console.log(mutation(["hello", "Hello"]))
console.log(mutation(["hello", "hey"]))
console.log(mutation(["Alien", "line"]))



