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



