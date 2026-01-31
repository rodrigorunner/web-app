(function() {

    let btnEl = document.getElementById("btn")
    let layoutEl = document.getElementById('layout')
    
    /** Evento criado para persistir os dados no localStorage. */
    btnEl.addEventListener("click", (e) => {
        /** Capturando valores de entrada do usuário. */
        let autorEl = document.getElementById("autor").value 
        let tituloEL = document.getElementById("titulo").value
        let dataInicio = document.getElementById("date-inicio").value
        let dataFinal = document.getElementById("date-final").value
        let msg = document.getElementById("msg")
    
        /** Prenivir o comportamento padrão do navegador. */
        e.preventDefault()
    
        /** Organizar os dados em um array de objeto no LS. */
        let arr = []
    
        /** Verificar se existe alguma propriedade no LS. */
        if(localStorage.hasOwnProperty("dados")) {
            /** Primeiro, fazer um parse para um array de objetos e armazenar no variável "arr" */
            arr = JSON.parse(localStorage.getItem("dados"))
        }
    
        /** Fazer um push dos dados capturados do usuário no nosso array. */
        arr.push({
            autorEl,
            tituloEL,
            dataInicio,
            dataFinal
        })
    
        if(autorEl.value !== '' && tituloEL !== '') {
            /** Salvar no localStorage. */
            localStorage.setItem("dados", JSON.stringify(arr))
            /** Mensagem para debugar. */
            msg.className = "sucesso"
            msg.innerHTML = "Livro cadastrado com sucesso."
            setTimeout(() => {
                msg.textContent = ''
            }, 3000)
        } else {
            msg.className = "erro"
            msg.innerHTML = "Erro: alguns dados ficaram faltando."
            setTimeout(() => {
                msg.textContent = ''
            }, 3000)
        }  
    })

})()


