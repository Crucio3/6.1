let inf = document.querySelector('.content__other-text')
let toggleButton = document.querySelector('.more-text')
let contentButton = toggleButton.querySelector('.more-text__text')
let icon = toggleButton.querySelector('.more-text__icon')

function toggleContent() {
  if (contentButton.textContent === 'Читать далее') {
    let contentHeight = inf.scrollHeight
    inf.style.height = contentHeight + 'px'
    inf.style.paddingBottom = '16px'
    contentButton.textContent = 'Скрыть'
    icon.style.transform = 'rotate(270deg)'
  } else {
    inf.style.height = '0'
    inf.style.paddingBottom = '0'
    contentButton.textContent = 'Читать далее'
    icon.style.transform = 'rotate(90deg)'
  }
}

toggleButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  toggleContent()
})
