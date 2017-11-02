$("form#form-one").submit(function(event){
	event.preventDefault();
	var morning = $("#morning").val();
	var midmorning = $("#midmorning").val();
	var lunch = $("#lunch").val();
	var afternoon = $("#afternoon").val();
	var evening = $("#evening").val();
	var date = $("#date").val();
	var time = $("#time").val();

	var combine = function(first,second,third){

		$("#output ul").append("<li>"+first+" "+second+" "+third+"</li>");

	
	};

	combine(morning,date,time);
	
});
