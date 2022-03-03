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