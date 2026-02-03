let btn = document.querySelector('button')

/** Get text function */
getText = (e) => {
    e.preventDefault()
    let formEl = document.querySelector('input').value
    newText = formEl.charAt(0).toLocaleUpperCase() + formEl.slice(1)
    createUI(newText)
}

/** Create UI */
createUI = (item) => {
    let sectionEl = document.querySelector('section')
    let p = document.createElement('p')

    if(item !== '') {
        /** Create a new object date. */
        let dateEl = new Date()
        /** Get the currently hour in the local time. */
        let now = dateEl.getHours()
        /** Variable to store data */

        let text = ''
        if(now >= 5 && now <= 12) {
            text = 'Bom dia. ' + item
        }else if(now > 12 && now <= 18) {
            text = 'Boa tarde. ' + item
        } else {
            text = 'Boa noite. ' + item
        }
        
        p.appendChild(document.createTextNode(text))
        sectionEl.appendChild(p)
    
    } else {
        alert('Digite o seu nome.')
    }
    text.value = ''
}

/** Event Listener */
btn.addEventListener('click', getText)