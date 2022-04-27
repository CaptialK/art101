/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 *
 * (c) Copyright by Vincenzo.Inc.
 */

 // Define Variables
 myTransport = ["Toyota Rav4", "my feet", "bike", "rides from friends"];

 myMainRide = {
 make : "Toyota",
 model : "Rav4",
 color : "black",
 year : 2021,
 age : function() {
   return 2022 - age;
 }
}

//output
document.writeln("Kinds of tranportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '/t'), "</pre>");
