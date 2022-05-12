/*
 * Author:   Vinson Li
 * Created:   4/24/2022
 * About: This is lab7 js, hopefully I learn how to make a function properly
 * (c) Copyright by Vincenzo.Inc.
 */

//The lab starts here, added a button
//Added a popup text for problems
$(document).ready(function () {
    $("#change-text2").click(function () {
        $("#toggle-text2").fadeOut(function () {
            $("#toggle-text2").text(($("#toggle-text2").text() == 'Show Text') ? 'Hide Div' :
            'The Problems with these labs are that their so open ended so you bascially can do this lab over 50 different ways').fadeIn();
        })
    })
});

//Added popup text for Challneges
$(document).ready(function () {
    $("#change-text1").click(function () {
        $("#toggle-text1").fadeOut(function () {
            $("#toggle-text1").text(($("#toggle-text1").text() == 'Show Text') ? 'Hide Div' :
            'The Challenegs was to use jQuery and see how its libary can be used to hide and show text').fadeIn();
        })
    })
});

//Added popup tet for Results
$(document).ready(function () {
    $("#change-text3").click(function () {
        $("#toggle-text3").fadeOut(function () {
            $("#toggle-text3").text(($("#toggle-text3").text() == 'Show Text') ? 'Hide Div' :
             'The results can be see by this webpage and how the buttons can be used to display text though the text keeps on fading in and out').fadeIn();
        })
    })
});
