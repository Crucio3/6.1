let feedback = document.querySelector('.feedback')
let buttonOpen = document.querySelectorAll('.feedback-open')
let body = document.querySelector('.body')
let menu = document.querySelector('.mobile-menu')

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    feedback.classList.add('open-modal')
    body.style.opacity = 0.2
    document.body.style.overflow = 'hidden'
    if (window.innerWidth > 1439) {
      menu.style.opacity = 0.2
    }

    evt.stopPropagation()
  })
}

function Close() {
  feedback.classList.remove('open-modal')
  body.style.opacity = 1
  menu.style.opacity = 1
  document.body.style.overflow = 'visible'
}

let buttonClose = document.querySelector('.feedback-close')
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
  let click = evt.composedPath().includes(feedback)
  if (!click) {
    Close()
  }
})
