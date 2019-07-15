$(document).ready(function() { // do this when the document is loaded
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();// hide the element with ID "otherElement"
});

$("#tab1btn").click(function() { // when "button_id" is clicked
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();	// hide other element
});

$("#tab2btn").click(function() { // when "button_id" is clicked
	$("#tab_2").show(); // show the element with ID "element"
	$("#tab_1").hide();
	$("#tab_3").hide();	// hide other element
});
$("#tab3btn").click(function() { // when "button_id" is clicked
	$("#tab_3").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_1").hide();	// hide other element
});

$('.digit').click (function() {
	var text = $(this).text();
	$("#dial-value").val($("#dial-value").val()+text);
});

$('.clearbtn').click (function() {
	var text = $("#dial-value").val();
	$("#dial-value").val(text.substring(0,text.length -1));
	
	
});
$('.contactclear').click(
    function(){
        $("#username").val('');
		  $("#phone").val('');
		    $("#email").val('');
    });