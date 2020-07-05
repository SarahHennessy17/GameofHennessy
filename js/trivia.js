$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * newTrivia.length);

console.log(randomNumber);

$("#question-target").html(newTrivia[randomNumber]["question"]);
$("#answer-target").html(newTrivia[randomNumber]["answer"]);

$("#answer-target").addClass("hide");

$(".get").on("click", function(){
	$("#answer-target").removeClass("hide");
	$(".get").addClass("hide");
});

});