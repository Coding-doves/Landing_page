//cart toggle
let cartIcon = document.querySelector('.cartIcon');
let body = document.querySelector('body');
let closeCartBasket = document.querySelector('.close');

cartIcon.addEventListener('click', function() {
    body.classList.toggle('showCartBasket');
});

closeCartBasket.addEventListener('click', function() {
    body.classList.toggle('showCartBasket');
});


// Responsive menu
let menu = document.querySelector('header .menu');
function menuList(){
    let nav = document.querySelector('.nav');

    nav.style.display = 'none';

    // calling responsive menu
    menu.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
        menu.classList.toggle('cross');
    })
}

