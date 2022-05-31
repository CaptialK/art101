/*
 * Author:   Vinson Li
 * Created:   5/30/2022
 * About: This is lab13 js
 * (c) Copyright by Vincenzo.Inc.
 */


// Using the core $.ajax() method
  URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"
function getAjax() {
      $.ajax({
          // The URL for the request (ENDPOINT)
          url: URL,
          // The data to send (will be converted to a query string)
          // data: { api_key: RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry},
          // Whether this is a POST or GET request
          type: "GET",
          // The type of data we expect back
          // dataType : "json",
      })
      // If the request succeeds
      .done(function(data) {
          console.log(data);
          // make our JSON data printable
          var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
          // put data in webpage
          // $("#output").append("<p>" + JSON.stringify(data));
          // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
          // $("#output").append(printableData);
          // $("#output").append("<p>The most stable smart man in the room says: <b>" + data.quote);
          $("#title").html(data.title)
          $("#output").append("<img src=" + data.url + ">");
          $("#output").append("<p>" + data.explanation);

      })

    // What we do if the api call fails
    .fail(function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Something went wrong buddy:", textStatus, errorThrown);
        	$("#output").html("Something went wrong buddy.");
    });
  };

$("button").click(getAjax);
