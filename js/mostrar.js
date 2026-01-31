(function() {
    let layout = document.getElementById('layout')
    let cont
    window.addEventListener('load', () => {
        if(localStorage.hasOwnProperty("dados")) {
            let dadosEl = JSON.parse(localStorage.getItem("dados"))
            dadosEl.forEach(e => {
                cont+=`
                <ul>
                    <li><strong>Autor:</strong> ${e.autorEl}</li>
                    <li><strong>Título:</strong> ${e.tituloEL}</li>
                    <li><strong>Data de início:</strong> ${e.dataInicio}</li>
                    <li><strong>Data final:</strong> ${e.dataFinal}</li>
                </ul>
                <div class="btns">
                     <button>Editar</button>
                     <button>Deletar</button>
                </div>
                `
            })
            layout.innerHTML = cont
        }
    })
})()
