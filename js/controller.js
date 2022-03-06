const nav = document.querySelector('.nav');
////// before ES6 /////////
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 30) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
})

/////////////////// after ES6 ////////

const navMobileList = document.querySelector('.mobile__nav--container');
document.querySelector('.nav__mobile').addEventListener('click', function () {
    navMobileList.classList.toggle('nav--close')
    navMobileList.classList.toggle('nav--open')
});


$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 430,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});