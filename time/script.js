$(document).ready(function(){
	setInterval(function(){
  	var dateTime = new Date();
  	var thisSecond = dateTime.getSeconds();
  	var thisMinute = dateTime.getMinutes();
    var thisHour = dateTime.getHours();
  	$(".seconds").text(dateTime.getSeconds());
  	$(".minutes").text(dateTime.getMinutes());
    $(".hours").text(dateTime.getHours());
  	if(thisMinute === 30){
  		$("body").css("background-color", "#E76D83");
  	}else if (thisHour === 18 || 21 || 24){
  		$("body").css("background-color", "#B3B3DD")
  	};
  });
  });
// 	var dateTime = new Date();
// 	var thisHour = dateTime.getHours();
// 	$(".hours").text(dateTime.getHours());
// 	if(thisHour === 15){
// 		$("body").css("background-color", "#F77B88");
// 	// }else(thisHour ==12){
// 	// 	$("body").css("background-color", "#959BD8")
// 	};
// });
// },1000); 
	
// });
  



