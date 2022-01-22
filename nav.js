// style="height: 6228px; display: block; width: 238.337px;"

const burger = document.getElementById('nav-button')
const nav = document.getElementById('w-nav-overlay-0')

burger.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
    burger.style.color = 'black'
  } else {
    nav.classList.add('show')
    burger.style.color = 'white'
  }
})

const navClose = () => {
  nav.classList.remove('show')
}
