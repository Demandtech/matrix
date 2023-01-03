const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-bar');
const buyBtn = document.querySelector('.buy-btn');



hamburger.addEventListener('click', ()=> {
  navbar.classList.toggle('nav-open')
  buyBtn.classList.toggle('nav-open')
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElement = document.querySelectorAll('section')
hiddenElement.forEach(el=> observer.observe(el));