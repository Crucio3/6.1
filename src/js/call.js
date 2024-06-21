let call = document.querySelector('.call')
let buttonOpen = document.querySelectorAll('.call-open')
let body = document.querySelector('.body')
let menu = document.querySelector('.mobile-menu')

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    call.classList.add('open-modal')
    body.style.opacity = 0.2
    document.body.style.overflow = 'hidden'
    if (window.innerWidth > 1439) {
      menu.style.opacity = 0.2
    }
    evt.stopPropagation()
  })
}

function Close() {
  call.classList.remove('open-modal')
  body.style.opacity = 1
  menu.style.opacity = 1
  document.body.style.overflow = 'visible'
}

let buttonClose = document.querySelector('.call-close')
buttonClose.addEventListener('click', function (evt) {
  evt.preventDefault()
  Close()
  evt.stopPropagation()
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault()
    Close()
  }
})

document.addEventListener('click', function (evt) {
  let click = evt.composedPath().includes(call)
  if (!click) {
    Close()
  }
})
