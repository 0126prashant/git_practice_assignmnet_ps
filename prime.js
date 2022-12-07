funnction prime(num){
  
let counter = 0
  for(let i=1;i<=num;i++){
     if(num%i==0){
      counter++
  }
}
  if (counter==2){
     return true;
 }
else return false;
 
}

for(let i=0;i<=20;i++){
  let answer = prime(i);
  
  if(ans == true){
    console.log(i,"is a prime number")
 }
  else {
      console.log(i,"is not a prime number" 
 }
}