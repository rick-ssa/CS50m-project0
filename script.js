const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const text = prompt('Type the text of the task')
  const check = document.createElement('input')
  const li = document.createElement('li')
  const span = document.createElement('span')

  check.type = 'checkbox'
  check.classList.add('todo-checkbox')
  check.addEventListener('change',function(){changeUnchekedCountSpan(this)})
  span.appendChild(document.createTextNode(text))
  li.appendChild(check)
  li.appendChild(span)
  list.appendChild(li)
  incCount()
  incUnchecedCount()
}

function incCount(){
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1
}

function incUnchecedCount() {
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
}

function decCount(){
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1
}

function decUnchecedCount() {
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1
}

function changeUnchekedCountSpan(ele) {
  if (ele.checked === true) {
    decUnchecedCount()
  } else {
    incUnchecedCount()
  }
}
