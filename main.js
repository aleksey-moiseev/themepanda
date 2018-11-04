/* Burger btn open */

function myFunction(x) {
    x.classList.toggle("change");
}

/* Nav open */

$(document).ready(function(){
$('.menu').click(function(){
    $('ul').toggleClass('ul_active');
    $('html, body').toggleClass("overflow_delete");
    })
});


/* Close nav inside nav*/

$(document).on('click', function(e) {
if (!$(e.target).closest(".header, ul").length) {
    $('ul').removeClass('ul_active');
    $(".menu").removeClass("change");
    $('html, body').removeClass("overflow_delete");
    };
e.stopPropagation();
});


/* Open link and close nav  */

$(document).ready(function(){
    $('.link_active').click(function(){
        $('ul').removeClass('ul_active');
        $(".menu").removeClass("change");
        $('html, body').removeClass("overflow_delete");
    })
});


/* Owl carousel */

$(document).ready(function(){
$(".owl-carousel").owlCarousel({
items: 2,
nav: true,
loop: true,
dots: true,
responsive : {
    0 : {
        items: 1,
    },

    930 : {
        items: 2,
    }
},
navText: ['<img src="back.svg" />', '<img src="forward.svg"/>'],
});
});


