function generatePassword(length){
  let result = '';
  for(let i=0; i<length; i++){
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
   const index = Math.round(Math.random()* str.length);
   result += str[index];
  }
  return result;
}


const password = generatePassword(50);


console.log(`Generated password: ${password}`);