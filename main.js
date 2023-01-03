const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-bar');
const buyBtn = document.querySelector('.buy-btn')

hamburger.addEventListener('click', ()=> {
  navbar.classList.toggle('nav-open')
  buyBtn.classList.toggle('nav-open')
})