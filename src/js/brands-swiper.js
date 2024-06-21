let tabl = document.querySelector('.brands')
let toggleButton = document.querySelector('.brands__more-content')
let contentButton = toggleButton.querySelector('.more-content__text')
let icon = toggleButton.querySelector('.more-content__icon')

function toggleContent() {
  if (contentButton.textContent === 'Показать все') {
    let contentHeight = tabl.scrollHeight
    tabl.style.height = contentHeight + 'px'
    contentButton.textContent = 'Скрыть'
    icon.style.transform = 'rotate(270deg)'
  } else {
    contentButton.textContent = 'Показать все'
    icon.style.transform = 'rotate(90deg)'
    tabl.style.height = 180 + 'px'
  }
}

toggleButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  toggleContent()
})
