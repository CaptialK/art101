/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

 function isMath(x) {
   return (x % 2 ==0);
 }

//test function
console.log("Is 1 even? ", isMath(1));
console.log("Is 2 even? ", isMath(2));

array = [10, 12, 14, 89, 763, 1, 4, 18823];
console.log("My array", array);

var results = array.map(isMath);
//should return [true, false, true, Idk really]
console.log("Test of eveness of array:", results);

var results = array.map(function(x) {
  return x ** 0.5;
})

// should return [10, 9, 2, 4, 6 idk]

console.log("Squareroot of array:", results);
