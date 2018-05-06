function factorialIterativo(num) {
   var factorial = 1;

   while (num > 1) {
     factorial *= num;
     num--;    
   }
   return factorial;
 }
 function factorial(n) {
  
   if (n === 0) {
     return 1;
   }
   return n * factorial(n - 1);
 }

 function fib(n) {
       if (n === 0 || n === 1) {
         return 1;
       }
       return fib(n - 1) + fib(n - 2);
}

function factores(n){
  array=[];
  if(!n){
    return [];
  }else{
  for(var i=2;i<n;i++){
    if(n%i===0){
      var estado=false
    }
  }
}
  if(estado=false){
  return [n].concat(factores(n-1))
}
}
  


     