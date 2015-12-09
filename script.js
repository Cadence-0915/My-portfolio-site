$(document).ready(function(){
	$("form").submit(function(){
		if($("#fname").val() == ""){
			alert("Your first name cannot be blank!");
			return false;
		}else if($("#lname").val() == ""){
			alert("Your last name cannot be blank!");
			return false;
		}else if($("#email").val() == ""){
			alert("Please enter your email!");
			return false;
		}else{
			alert("Thank you for signing up!");
			return false;
		}
	})
});