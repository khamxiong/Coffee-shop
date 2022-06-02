// nabar when page got smaller and event when cliked

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick =() =>{
    navbar.classList.toggle('active');
    navbar.classList.remove('.active');
}
// when click cart icon
let cartItem = document.querySelector('.cart-items-container');

document.querySelector("#cart-btn").onclick =() =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('.active');
}
// when clicked on search icon
let searchForm = document.querySelector('.search-form');

document.querySelector("#search-btn").onclick =() =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('.active');
}

//when click on world icon
let lang = document.querySelector('.laguage');
document.querySelector("#lang-btn").onclick =() =>{
    lang.classList.toggle('active');
    lang.classList.remove('.active');
}

window.onscroll =() => {
 navbar.classList.remove('.active');
 searchForm.classList.remove('.active');
 cartItem.classList.remove('.active');
}