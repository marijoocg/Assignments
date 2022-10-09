/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/


var sieve = function () {
    "use strict";

    var array = [], primes = [];
    let p=2; // comienzo
    let answer= document.getElementById("answer"); // donde se imprime
    let n= parseInt(document.getElementById("num").value); // entrada

    for ( let index=2; index<n+1; index++){
        array.push(index); // creas arreglo del 2 - n 
    }

    array.forEach(element =>{
        if(element!=0){
            p=element;
        }
        for ( let index = p; index<n+1;index++){
            if(array[index]%p===0){ // == igual valor, === igual valor y tipo // checa si es divisible
                array[index]=0;
            }
        }
    }); 

    array.forEach(element => {
        if(element!=0){
            primes.push(element);
        }
    });

    console.log(array); // imprime en f12
    answer.innerHTML= primes; //imprie en html ( innerHTML )
    return primes;
};

console.log(sieve(1000000));