$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation(); // to stop any of its parent class from implimenting
});

$("input").on("keypress", function(event){
	if(event.which === 13){

		// var text = $(this).val
		$("ul").append("<li><span>X</span>"+ $(this).val() +"</li>");
		$(this).val("");
	}
});