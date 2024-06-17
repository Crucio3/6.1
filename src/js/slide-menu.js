let slideItems = document.querySelectorAll('.slide-menu__item')
for (let i = 0; i < slideItems.length; i++) {
  slideItems[i].addEventListener('click', function (evt) {
    let active = document.querySelector('.slide-menu__active')
    if (active) {
      active.classList.remove('slide-menu__active')
    }
    slideItems[i].classList.add('slide-menu__active')
  })
}
