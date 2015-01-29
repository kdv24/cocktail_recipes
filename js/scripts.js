//Hide underage part
//Add a prompt for user to enter age

//$("button").click(function(){

	$('#entry-area').click(function() {	
				var age = $("#entry-area").val();
				if (age =="") {
					alert("Please enter your age");
					$('#entry-area').click(function() {
					$("#entry-area").val('');
					});
				}
				else if (age < "21") {
					alert("you're too young");
				}
				else {
					alert("woopdeedoo!");
				}
	});

});	

/*
$(function() {
	$("#entry-area").submit(function(event) {
		var userInput = $("input#entry-area").val();
		if (userInput >= 21) {
		$("#liquor-preference").show();
	} else {
		$("#underage").show().
	}
});
});






$("#liquors").slideDown();
//When prompt answered 
	//3.0 get rid of button
$("button").click(function(){
	$("#entry-area").show();
	//$(this).remove();
	//3.1 show the age 21
	// OR
	//3.2 show the recipes
});

*/



//prevent minors from viewing recipes




//reveal recipes to those who are over 21
//$(".liquor-preference").hide();
