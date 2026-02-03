(function() {

    
    editar = (id) => {      
        
        let authorEl = document.getElementById('author').value
        let titleEl = document.getElementById('title').value 
        let genreEl = document.getElementById('genre').value 

        let datas = []
        if(localStorage.hasOwnProperty("datas")) {
            datas = JSON.parse(localStorage.getItem("datas"))
             console.log(datas)
        }

        let updatedData = datas.filter(item => item.id != id)

        console.log(updatedData)
    }

})()