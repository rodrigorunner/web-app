/**
 * Recuperar os elementos HTML, item-form (input para entrada de dados),
 * item-list (container para inserir dados via javascrit).
 * 
 */
const itemForm = document.getElementById("item-form")
const itemInput = document.getElementById("item-input")
const itemList = document.getElementById("item-list")
const filterItem = document.getElementById('filter')
const clearList = document.getElementById('clear')
const formBtn = itemForm.querySelector('button')
let isEditMode = false 

addItem = (e) => {
    // Prevenindo o comportamento padrão.
    e.preventDefault()

    // Variável armazenando o valor recuperado pelo input.
    let newItem = itemInput.value
    // Validando input.
    if(newItem === '') {
        alert('Please add an item.')
        return
    }

    // Checar o modo de edição.
    if(isEditMode) {
        const itemToEdit = itemList.querySelector('li')
        removeItemFromStorage(itemToEdit.textContent)
        itemToEdit.classList.remove('edit-mode')
        // Removendo nó do DOM.
        itemToEdit.remove()
        isEditMode = false

    } else if(isItemExists(newItem)) {
        alert('That item alredy exists!')
        return
    }

    // Enviar dados para LocalStorage.
    addToLocalStorage(newItem)

    // Criar os campos de filter e clear 
    clearUI()
    // Limpando o valor do input.
    itemInput.value = ''
}

addToLocalStorage = (item) => {
    let datas

    if(localStorage.getItem('items') === null) {
        datas = []
    } else {
        datas = JSON.parse(localStorage.getItem('items'))
    }

    datas.push(item)
    localStorage.setItem('items', JSON.stringify(datas))
}

createItemToDOM = () => {
    let datas

    if(localStorage.getItem('items') != null) {
        datas = JSON.parse(localStorage.getItem('items'))
    }

    datas.forEach(data => {
        // Criando a lista de itens.
       const li = document.createElement('li')
       // Anexando o texto na lista de item
       // newItem é a variável que armazena o valor recuperado no input.
       li.appendChild(document.createTextNode(data))
    
       // Variável carregando a função responsável por criar um botão.
       const button = createButton('remove-item btn-link text-red')
       // Anexando o botão na lista de item.
       li.appendChild(button)
    
       // Criando um nó na árvore.
       itemList.appendChild(li)
    })
    clearUI()
}

// Create button
createButton = (classes) => {
    const button = document.createElement('button')
    button.className = classes
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

// Create icon and append it to the bottom in a function createBottom().
createIcon = (classes) => {
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}

onClickItem = (e) => {
    if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement)
    } else {
        setItemToEdit(e.target)
    }
}

setItemToEdit = (item) => {
    isEditMode = true 
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'))
    item.classList.add('edit-mode')


    formBtn.innerHTML = '<i class="fa-solid fa-pen">Update Item </i>'
    formBtn.style.backgroundColor = '#228B22'
    itemInput.value = item.textContent
}

// Function to remove the list items from the screen.
removeItem = (item) => {
    if(confirm('Are you sure ?')) {
        // Remover nó do DOM
        item.remove()

        removeItemFromStorage(item.textContent)

        clearUI()
    }
}

removeItemFromStorage = (item) => {
    let itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    
    // Filtrar items do localstorage.
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item)

    // Armazenando novo array no localstorage.
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

// Clear all elements from the list.
clearAll = () => {
    // itemList.innerHTML = ''
    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }

    localStorage.removeItem('items')
    clearUI()
}

filterInput = (e) => {
    let items = itemList.querySelectorAll('li')
    let text = e.target.value.toLowerCase()

    items.forEach((item) => {
        let textItem = item.firstChild.textContent.toLowerCase()
        
        if(textItem.indexOf(text) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

// Limpar interface
clearUI = () => {
    let items = itemList.querySelectorAll('li')
    if(items.length === 0) {
        filterItem.style.display = 'none'
        clearList.style.display = 'none'
    } else {
        filterItem.style.display = 'block'
        clearList.style.display = 'block'   
    }
}

isItemExists = (item) => {
    const itemsFromStorage = JSON.parse(localStorage.getItem('items'))

    if(itemsFromStorage.includes(item)) {
        return true
    } else {
        return false
    }
}

init = () => {
    // Event listener.
    itemForm.addEventListener('submit', addItem)
    itemList.addEventListener('click', onClickItem)
    clearList.addEventListener('click', clearAll)
    filterItem.addEventListener('input', filterInput)
    document.addEventListener('DOMContentLoaded', createItemToDOM) // Evento responsável de carregar os dados do 
    
    // Limpar os elementos da tela quando não houver nenhum item da lista.
    clearUI()
}
init()

