
/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

 //For this function, we are going to short the letters in someone's name.
  function nameSorter(x){
  //using the User's input, add a little comment
  document.writeln("<b>"+x+"</b> it's very nice to meet you, That's an intresting name, it needs some fixing! <br>");
  document.writeln("I'm going to fix it, okay don't worry.<br>");
  //start by making the name into an array and printing out the result
  var split = x.split('');
  document.writeln("First, we got to split up the letters in your name: <b>"+split+" </b><br>");
  //then we sort the stings in that array and join them
  split.sort();
  var joined = split. join('');
  //then add another Little comment and return the value so it can print.
  document.writeln("Here now it's in alphabetical order better right. . .  <br>");
  return joined;
  }
  //Get the user's inout
  var userName = window.prompt ("What's your name?");
  //Call the function and add the user input
  document.writeln("And tada! Your name is now <b>"+nameSorter(userName)+"</b<br>");

   document.getElementById("my-button").addEventListener.outputEl("my-button", myFunction);

 function myFunction() {
   document.getElementById("user-name").innerHTML = "Hello World";
 }
