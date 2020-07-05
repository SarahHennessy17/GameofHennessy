$(document).ready(function() {

console.log("check");


var randomNumber = Math.floor(Math.random() * 56);
// console.log(randomNumber);
$("#question").html(newSuperlatives[randomNumber]["superlatives"]);
$(".1display").html(newSuperlatives[randomNumber]["1name"]);
$(".1points").html(newSuperlatives[randomNumber]["1points"]);
$(".2display").html(newSuperlatives[randomNumber]["2name"]);
$(".2points").html(newSuperlatives[randomNumber]["2points"]);
$(".3display").html(newSuperlatives[randomNumber]["3name"]);
$(".3points").html(newSuperlatives[randomNumber]["3points"]);
$(".4display").html(newSuperlatives[randomNumber]["4name"]);
$(".4points").html(newSuperlatives[randomNumber]["4points"]);
$(".5display").html(newSuperlatives[randomNumber]["5name"]);
$(".5points").html(newSuperlatives[randomNumber]["5points"]);
$(".6display").html(newSuperlatives[randomNumber]["6name"]);
$(".6points").html(newSuperlatives[randomNumber]["6points"]);
$(".7display").html(newSuperlatives[randomNumber]["7name"]);
$(".7points").html(newSuperlatives[randomNumber]["7points"]);
$(".8display").html(newSuperlatives[randomNumber]["8name"]);
$(".8points").html(newSuperlatives[randomNumber]["8points"]);

var fifthName = parseInt(newSuperlatives[randomNumber]["5points"]);
var sixthName = parseInt(newSuperlatives[randomNumber]["6points"]);
var seventhName = parseInt(newSuperlatives[randomNumber]["7points"]);
var eigthName = parseInt(newSuperlatives[randomNumber]["8points"]);
console.log(eigthName);

if(fifthName == "0"){
	$(".an5").hide();
}
if(sixthName == "0"){
	$(".an6").hide();
}
if(seventhName == "0"){
	$(".an7").hide();
}
if(eigthName == "0"){
	$(".an8").hide();
}

$(".1points").addClass("hide");
$(".2points").addClass("hide");
$(".3points").addClass("hide");
$(".4points").addClass("hide");
$(".5points").addClass("hide");
$(".6points").addClass("hide");
$(".7points").addClass("hide");
$(".8points").addClass("hide");
$(".1display").addClass("hide");
$(".2display").addClass("hide");
$(".3display").addClass("hide");
$(".4display").addClass("hide");
$(".5display").addClass("hide");
$(".6display").addClass("hide");
$(".7display").addClass("hide");
$(".8display").addClass("hide");

$(".an1").on("click", function(){
	$(".cat1").addClass("hide");
	$(".1points").removeClass("hide");
	$(".1display").removeClass("hide");
});

$(".an2").on("click", function(){
	$(".cat2").addClass("hide");
	$(".2points").removeClass("hide");
	$(".2display").removeClass("hide");
});

$(".an3").on("click", function(){
	$(".cat3").addClass("hide");
	$(".3points").removeClass("hide");
	$(".3display").removeClass("hide");
});

$(".an4").on("click", function(){
	$(".cat4").addClass("hide");
	$(".4points").removeClass("hide");
	$(".4display").removeClass("hide");
});

$(".an5").on("click", function(){
	$(".cat5").addClass("hide");
	$(".5points").removeClass("hide");
	$(".5display").removeClass("hide");
});

$(".an6").on("click", function(){
	$(".cat6").addClass("hide");
	$(".6points").removeClass("hide");
	$(".6display").removeClass("hide");
});

$(".an7").on("click", function(){
	$(".cat7").addClass("hide");
	$(".7points").removeClass("hide");
	$(".7display").removeClass("hide");
});

$(".an8").on("click", function(){
	$(".cat8").addClass("hide");
	$(".8points").removeClass("hide");
	$(".8display").removeClass("hide");
});


$(".refresh").on("click", function(){
	randomNumber++;
	console.log(randomNumber);
	if( randomNumber == 58){
		randomNumber = 0;
	}

	$("#question").html(newSuperlatives[randomNumber]["superlatives"]);
	$(".1display").html(newSuperlatives[randomNumber]["1name"]);
	$(".1points").html(newSuperlatives[randomNumber]["1points"]);
	$(".2display").html(newSuperlatives[randomNumber]["2name"]);
	$(".2points").html(newSuperlatives[randomNumber]["2points"]);
	$(".3display").html(newSuperlatives[randomNumber]["3name"]);
	$(".3points").html(newSuperlatives[randomNumber]["3points"]);
	$(".4display").html(newSuperlatives[randomNumber]["4name"]);
	$(".4points").html(newSuperlatives[randomNumber]["4points"]);
	$(".5display").html(newSuperlatives[randomNumber]["5name"]);
	$(".5points").html(newSuperlatives[randomNumber]["5points"]);
	$(".6display").html(newSuperlatives[randomNumber]["6name"]);
	$(".6points").html(newSuperlatives[randomNumber]["6points"]);
	$(".7display").html(newSuperlatives[randomNumber]["7name"]);
	$(".7points").html(newSuperlatives[randomNumber]["7points"]);
	$(".8display").html(newSuperlatives[randomNumber]["8name"]);
	$(".8points").html(newSuperlatives[randomNumber]["8points"]);
	$(".1points").addClass("hide");
	$(".2points").addClass("hide");
	$(".3points").addClass("hide");
	$(".4points").addClass("hide");
	$(".5points").addClass("hide");
	$(".6points").addClass("hide");
	$(".7points").addClass("hide");
	$(".8points").addClass("hide");
	$(".1display").addClass("hide");
	$(".2display").addClass("hide");
	$(".3display").addClass("hide");
	$(".4display").addClass("hide");
	$(".5display").addClass("hide");
	$(".6display").addClass("hide");
	$(".7display").addClass("hide");
	$(".8display").addClass("hide");
	$(".cat1").removeClass("hide");
	$(".cat2").removeClass("hide");
	$(".cat3").removeClass("hide");
	$(".cat4").removeClass("hide");
	$(".cat5").removeClass("hide");
	$(".cat6").removeClass("hide");
	$(".cat7").removeClass("hide");
	$(".cat8").removeClass("hide");
	$(".an5").show();
	$(".an6").show();
	$(".an7").show();
	$(".an8").show();

});



});