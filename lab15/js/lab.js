

var endpoint = "http://numbersapi.com/42/";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })
  .done(function(data){
  	$("#output").html(data);
  })
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");
  })
}

$("button").click(getAjax);
