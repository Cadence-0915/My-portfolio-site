$(document).ready(function(e){
   $("form").submit(function(e){
		e.preventDefault();
		// console.log($("input").val());
		var $newItem = $("#newTask").val();
	$("ul").append("<li>"+ $newItem +"</li>" );
	$("#newTask").val('');
$('li').on('click', function(){
	$(this).remove();
	});
	});
});

$("#one").on("click", function(){
	// console.log($(this).text())
	$("#dinosaur").remove();
});	

$("#two").on("click", function(){
	// console.log($(this).text())
	$("#dinosaur").remove();
});	

$("#three").on("click", function(){
	
	$("#dinosaur").remove();
});	

$("#four").on("click", function(){
	// console.log($(this).text())
	$("#dinosaur").remove();
});	

$("#five").on("click", function(){
	// console.log($(this).text())
	$("#dinosaur").remove();
});	


