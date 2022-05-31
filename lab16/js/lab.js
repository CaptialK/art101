/*
 * Author:   Vinson Li
 * Created:   5/30/2022
 * About: This is lab13 js
 * (c) Copyright by Vincenzo.Inc.
 */


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            //cant find this API KEY where does one get this
            api_key: "",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(worked);
        var firstAPOD = data[0] ;
        console.log(firstAPOD);
        var title = firstAPOD.title;
        var descr = firstAPOD.explaintion;
        var imgURL = firstAPOD.url;
        console.log(title,descr, imgURL)
        $("#output").html(data);
        $("#output").append("img src=" + imgURL + ">" );
        $("#output").append("<p>" + descr + "</p>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Something went wrong buddy:", textStatus, errorThrown);
        	$("#output").html("Something went wrong buddy.");
    }
})
$("button").click(getAjax);
