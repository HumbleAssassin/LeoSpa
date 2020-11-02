$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoWidth: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.carousel').carousel();
});


const header = document.querySelector("header");
window.onscroll = function () {
    var top = window.scrollY;
    if (top > 95) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

