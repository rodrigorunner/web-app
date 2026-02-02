(function() {

    let bnt = document.getElementById('btn')
    
    bnt.addEventListener('click', e => {
        e.preventDefault()

        let authorEl = document.getElementById('author').value
        let titleEl = document.getElementById('title').value 
        let genreEl = document.getElementById('genre').value 


        let datas = []
        if(localStorage.hasOwnProperty("datas")) {
            datas = JSON.parse(localStorage.getItem("datas"))
        }

        let obj = {
            author: authorEl,
            title: titleEl,
            genre: genreEl
        }

        datas.push(obj)

        let isSaved = localStorage.setItem("datas", JSON.stringify(datas))
        
        if(isSaved) {
            console.log("Erro ao salvar.")
        } else {
           console.log('Salvo com sucesso.')
        }
    })

})()