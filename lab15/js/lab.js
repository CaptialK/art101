/*
 * Author:   Vinson Li
 * Created:   5/18/2022
 * About: This is lab13 js
 * (c) Copyright by Vincenzo.Inc.
 */

var endpoint = "http://numbersapi.com/42/";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })

  .done(function(data){
		console.log(title,descr, imgURL)
  	$("#output").html(data);
		$("#output").append("img src=" + imgURL + ">" );
		$("#output").append("<p>" + descr + "</p>");

  })
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");

  })
}

$("button").click(getAjax);
