let menu = document.querySelector('.mobile-menu')
let buttonOpen = document.querySelector('.menu-open')
let body = document.querySelector('.body')

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault()
  menu.classList.add('open-menu')
  body.style.opacity = 0.2
  evt.stopPropagation()
})

function Close() {
  menu.classList.remove('open-menu')
  body.style.opacity = 1
}

let buttonClose = document.querySelector('.menu-close')
buttonClose.addEventListener('click', function (evt) {
  evt.preventDefault()
  Close()
  evt.stopPropagation()
})

document.body.addEventListener('click', function (evt) {
  if (!menu.contains(evt.target) && !buttonOpen.contains(evt.target)) {
    if (menu.classList.contains('open-menu')) {
      Close()
    }
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault()
    Close()
  }
})
