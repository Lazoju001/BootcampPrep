function duplicar(num){

    return num * 2;
}

function map(arr, fn){

var array = [];

for(var i = 0; i < arr.length; i++){

array.push(fn(arr[i]));  
 }
return array;
}

var filtroPar = function(element) {
   return (element % 2 === 0)
 };

 var filtroImpar = function(element) {
   return !filtroPar(element);
 };

function filter(arr, fn){

    var array = [];
    var index = 0;

    while(index < arr.length){

        if(fn(arr[index])){
            array.push(arr[index]);
}

        index++;
    }
return array;
}

function contains(arreglo, numero){

    var arr = Object.keys(arreglo);

    for(var i = 0; i < arr.length; i++){
     
    if(arreglo[arr[i]] === numero){

        return true;
    }
    }
    return false;
}

function cuentaPalabras(str){

    var arr = str.split(' ');
    var contador = 0;

   for(var i = 0; i < arr.length; i++){

   	contador++;
   }
   return contador;
 }

var suma = function(a, b) {
    return a + b;
  };

var multiplicacion = function(a, b) {
    return a * b;
};
//////// ver la funcion reduce NO FUNCIONA!!!!!!!

function reduce(arr, a, fn) {
    if(fn===multiplicacion){
        var sum=1       
     for(var i=0; i<arr.length;i++){        
        sum= sum*arr[i];    
    }
    return fn(a,sum)
    }
        var sum = 0;
      for (var i = 0; i < arr.length; i++) {
          sum += fn(a, arr[i]);
    }
        return sum;
}

function cuentaPalabrasReduce(current, next){

 	return next.split(' ').length + current;
}


function suma(arr){
 return reduce(arr,0,function(x,y){
 		return x + y;
})
}

//////// ver la funcion reduce NO FUNCIONA!!!!!!!


var esPar = function(num) {
    return num % 2 === 0;
  };

  var pasarValor = function(i) {
    return i;
  };

function every(arr, func) {
   //Very Imp to understand "every" and "any" function here

   function iterator(current, next) {
     //we need to return boolean val that's why don't use //+ or - .
     return current && func(next); //Imp to understand  use of && operator here.
   }

   return reduce(arr, true, iterator); //"initial val" is "true" here. understand why we //used it.
 }

function any(arr, func) {
   function iterate(current, next) {
     return current || func(next);
   }
   return reduce(arr, false, iterate);
 }

















    



 







    
    
    
