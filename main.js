// Variáveis
const form = document.querySelector('form')
const input = form.querySelector('input')
const list = document.querySelector('.list')
const warning = document.querySelector('.warning')
let items = []
let itemID = 0

// Adicionar item na lista
function createItem(itemName, itemID) {
  if (!itemName || itemName === ' ') {
    return alert('Por favor, não deixe o nome vazio!')
  }

  const structure = `
    <div class="wrap">
      <input type="checkbox" name="check-item" id="item-${itemID}" />
      <label for="item-${itemID}">${itemName}</label>
    </div>

    <button class="delete">
      <img src="./assets/icon-delete.svg" alt="" />
    </button>
  `

  const newItem = document.createElement('li')
  newItem.innerHTML = structure

  return newItem
}

function addItem(newItem) {
  items.push(newItem)
  list.prepend(newItem)

  itemID += 1
}

function deleteItem(newItem) {
  const btnDelete = newItem.querySelector('.delete')

  btnDelete.addEventListener('click', () => {
    const index = items.indexOf(newItem)
    const closeWarning = warning.querySelector('.close')

    items.splice(index, 1)
    newItem.remove()

    warning.classList.add('active')

    closeWarning.addEventListener('click', () => {
      warning.classList.remove('active')
    })

    setTimeout(() => {
      warning.classList.remove('active')
    }, 3500)
  })
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const itemName = input.value.replace(/\s+/g, ' ')
  const newItem = createItem(itemName, itemID)

  input.value = ''

  if (!newItem) {
    return
  }

  addItem(newItem)
  deleteItem(newItem)
})
