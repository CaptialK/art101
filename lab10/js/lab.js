/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

//The lab starts here
//What up Isola!!!!!!!!!!!
//For this function, we are going to short the letters in someone's name.
 function nameSorter(x){
 //using the User's input, add a little comment
 document.getElementById("output").innerHTML= "<b>"+x+"</b> it's very nice to meet you, That's an intresting name, it needs some fixing! <br>";
 document.getElementById("output1").innerHTML=("I'm going to fix it, okay don't worry.<br>");
 //start by making the name into an array and printing out the result
 var split = x.split('');
 document.getElementById("output2").innerHTML=("First, we got to split up the letters in your name: <b>"+split+" </b><br>");
 //then we sort the stings in that array and join them
 split.sort();
 var joined = split.join('');
 //then add another Little comment and return the value so it can print.
 document.getElementById("output3").innerHTML=("Here now it's in alphabetical order better right. . .  <br>");
 return joined;
}

var userName = document.getElementById("name").value;
document.getElementById("output4").innerHTML=("And tada! Your name is now fixed <b>"+nameSorter(userName)+"</b<br>");


console.log(nameSorter(name));

console.log(nameSorter(userName));
