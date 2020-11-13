const hamburger = document.querySelector('.header .nav__bar .nav__list .hamburger');
const mobile_menu = document.querySelector('.header .nav__bar .nav__list ul');
const menu_item = document.querySelectorAll('.header .nav__bar .nav__list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 600) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
});


var filterFns = {
    numberGreaterThan50: function () {}
};


$('#filter-btn').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});


$('.btn-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});


$('.popup-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

// This is for highlighting the current page

var btnContainer = document.getElementsByClassName("nav-items");
var btns = btnContainer.getElementsByClassName("home-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var active = document.getElementsByClassName('current');
        active[0].className = active[0].className.replace('current', '');
        this.className += 'current';
    });
}
