import * as $ from 'jquery'

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
		var $target = $(target);
		 $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-85
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('.nav').on('click', 'li', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
});
});

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('#navbar ul li').each(function () {
//             $(this).removeClass('active');
//         });
//         $(this).addClass('active');
      
//         var target = this.hash,
//             li = target;
//         var $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top-85
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#navbar ul li').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#navbar ul li').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }