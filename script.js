const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('text')
const itemList = document.getElementById('item-list')
const btn = document.getElementById('btn')
isEditMode = false

displayItems = () => {
    const datas = getItemsFromStorage()
    datas.forEach(i => addItemToDOM(i))
}

onAddItemSubimit = (e) => {
    e.preventDefault()

    let newItem = itemInput.value
    /** Validate input. */
    if(newItem === '') {
        itemInput.style.border = '2px solid #ff0000'
        setTimeout(() => {
            itemInput.style.border = '1px solid #011F26'
        }, 3000)
        return 
    }

    if(isEditMode) {
        const itemToEdit = itemList.querySelector('.item-list')
        /** Remove from localStorage */
        removeItemFromStorage(itemToEdit.textContent)
        itemToEdit.classList.remove('item-list')
        itemToEdit.remove()
        isEditMode = false
    } else {
        if(checkIfExists(newItem)) {
            alert('Esse item existe')
            return
        }
    }

    btn.style.backgroundColor = '#000'
    btn.innerHTML = '+ Add'

    /** Add item to the DOM. */
    addItemToDOM(newItem)

    /** Add to localStorage */
    addItemToLocalStorage(newItem)

    itemInput.value = ''
}

/** Add item to the DOM. */
addItemToDOM = (item) => {
     /** Create paragraph item */
    const p = document.createElement('p')
    p.className = 'item-list remove-item'
    p.appendChild(document.createTextNode(item))
    
    /** Create icon */
    const i = document.createElement('i')
    i.className = 'fa-solid fa-trash'
    p.appendChild(i)

    itemList.appendChild(p)
}

addItemToLocalStorage = (item) => {
    let datas = getItemsFromStorage()

    if(localStorage.getItem('lists') === null) {
        datas = []
    } else {
        datas = JSON.parse(localStorage.getItem('lists'))
    }

    datas.push(item)

    localStorage.setItem('lists', JSON.stringify(datas))
}

getItemsFromStorage = ()  => {
    let datas 

    if(localStorage.getItem('lists') === null) {
        datas = []
    } else {
        datas = JSON.parse(localStorage.getItem('lists'))
    }

    return datas
}

onClickItem = (e) => {
     if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement)
     } else {
       setToEditMode(e.target)
     }
}

/** Set to edit */
setToEditMode = (item) => {
    isEditMode = true
    
    itemList
    .querySelectorAll('p')
    .forEach((i) => i.classList.remove('edit'))
    
    item.classList.add = 'edit'
    btn.innerHTML = '+ Editar'
    btn.style.backgroundColor = '#034001'
    itemInput.value = item.textContent
}

/** Remove item. */
removeItem = (item) => {
    if(confirm("Você tem certeza ?")) {
        // Remove item from DOM.
        item.remove()
        // Remove item from storage.
        removeItemFromStorage(item.textContent)
    }
   
}

/** Remove from ls */
removeItemFromStorage = (item) => {
    let datas = getItemsFromStorage()
    
    // Filter out item to be removed
    datas = datas.filter((i) => i !== item)

    // Re-set in local storage.
    localStorage.setItem('lists', JSON.stringify(datas))
}

checkIfExists = (item) => {
    const datas = getItemsFromStorage()
    return datas.includes(item)
}

/** Initialize app */
init = () => {
    /** Event listeners */
    itemForm.addEventListener('submit', onAddItemSubimit)
    itemList.addEventListener('click', onClickItem)
    document.addEventListener('DOMContentLoaded', displayItems)
}
init()
