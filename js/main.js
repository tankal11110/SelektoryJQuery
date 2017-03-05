$(document).ready(function(){
		
	var first = $('div.grid.grid-12');
	first.css('background-color','red');
	
	var second = $('.nav > a[href^=http]');
	second.css('color','green');
	
	var third = $('input[type="radio"]:not(:checked), input[type="checkbox"]:not(:checked)');
	
	var forth = $('div#text p').not(":has(*)").first();
	forth.css('border','1px solid red');
	
	var fift = $(".pigination-item").not('span');
	
});