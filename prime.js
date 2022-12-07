let factors =  0;
function checkPrime(number)
{
 for(i=1; i<=number; i++){
  if(number%i===0){
     factors++;
   }
}
if(factors===2){
 return true
}else{
  return false
}
}

let answer = checkPrime(23)

if(answer===true){
  console.log("It is a Prime Number");
}else{
  console.log("It is not a Prime Number");
}