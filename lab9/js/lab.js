/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

//The lab starts here
//create a new div element "output"
var outputEl = document.getElementById("output");
outputEl.style.backgroundColor = "beige";
outputEl.style.border = "double 15px azure";

//create a new element, give it some style
var new1El = document.createElement("p");
new1El.innerHTML = "Hi this says something";
new1El.style.color = "Indigo" ;
new1El.style.textAlign = "center";
new1El.style.textDecoration = "underline";

//add another element, give it some style
var new2El = document.createElement("p");
new2El.innerHTML = "This says something else";
new2El.style.color = "Indigo" ;
new2El.style.textAlign = "center";
new2El.style.textDecoration = "underline";

//Add the elements to the "output"
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Bonus
var xBonus = document.createElement("P")
xBonus.innerHTML = "Bonus: Add something to the top";
xBonus.style.color = "coral";
xBonus.style.textAlign = "center";
outputEl.insertbefore(xBonus, outputEl.children[0]);
