$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * newConnection.length);
console.log(randomNumber);
$("#imageDisplay").attr("src",newConnection[randomNumber]["image1"]);
$("#2imageDisplay").attr("src",newConnection[randomNumber]["image2"]);
$("#3imageDisplay").attr("src",newConnection[randomNumber]["image3"]);
$("#4imageDisplay").attr("src",newConnection[randomNumber]["image4"]);
$("#answer-display").html(newConnection[randomNumber]["answer"]);


	$("#answer-display").addClass("hide");

	$(".reveal").on("click", function(){
		$("#answer-display").removeClass("hide");
		$(".get").addClass("hide");
});

});