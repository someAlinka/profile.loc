$(function () {
	$('select').selectBox();

	$(".main-menu__item").click(function(){
		var dataScroll = $(this).data('scroll');
		$('.main-menu').removeClass('open-menu');
		$('html, body').animate({
	        scrollTop: $("." + dataScroll).offset().top
	    }, 1000);
	});

	$('.toggle-menu').click(function(){
		$('.main-menu').toggleClass('open-menu');
	});

	$(document).mouseup(function (e) {
	    var container = $('.main-menu');
	    if (container.has(e.target).length === 0){
	        $('.main-menu').removeClass('open-menu');
	    }
	});

	$('.form__item').on("focusin focusout", function(){
		if($(this).val() == ''){
			$(this).next().removeClass("top-label");
		}else{
			$(this).next().addClass("top-label");
		}
	});

	$('.runner-img, .runner').click(function(event){
		var width = event.offsetX * 100 / $('.runner-img').width();
		if(event.target.className != "runner-img__cursor"){
			$('.runner-img__bg').css("width", width + "%");	
		}
	});
});