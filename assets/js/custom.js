window.addEventListener("scroll",function(){
	var header = document.querySelector('#header_item');
	header.classList.toggle('sticky', window.scrollY > 10);
});
$(document).ready(function(){
	$("#toggle_button").click(function(){
		$("#show_nav").toggleClass("show_Nav");
		$("#header_item").toggleClass("bg_nav");
	});
});