(function() {
    let layout = document.getElementById('layout')
    let cont
    window.addEventListener('load', () => {
        if(localStorage.hasOwnProperty("dados")) {
            let dadosEl = JSON.parse(localStorage.getItem("dados"))
            dadosEl.forEach(e => {
                console.log(e)
                cont+=`
                <ul>
                    <li>${e.autorEl}</li>
                    <li>${e.tituloEL}</li>
                    <li>${e.dataInicio}</li>
                    <li>${e.dataFinal}</li>
                </ul>
                `
            })
            layout.innerHTML = cont
        }
    })
})()
