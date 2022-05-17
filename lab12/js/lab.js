/*
 * Author:   Vinson Li
 * Created:   5/16/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

 //return Hobbit, Elf, Dwarf, Human, and Orc
//depending on length mod 5
function sortingMiddleEarth(str){
  len = str.length;
  mod =len % 5;
  if (mod == 0) {
    return " Hobbit"
  }
  else if (mod == 1) {
    return " Human"
  }
  else if (mod == 2) {
    return " Elf"
  }
  else if (mod == 3) {
    return " Dwarf"
  }
  else if (mod == 4) {
    return " SOrc"
  }
}

var myButton = document.getElementById ("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById ("input").value;
  var middleEarth = sortingMiddleEarth(name);
  newText = "<p>Middle Earth has sorted you into" + middleEarth + "</p>";
  document.getElementById('output').innerHTML = newText;
})
