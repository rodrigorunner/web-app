(function() {
    let tbody = document.querySelector('tbody')
    
    if(localStorage.hasOwnProperty("datas") && localStorage.getItem("datas") !== 'undefined') {
        let datasEl = JSON.parse(localStorage.getItem("datas"))
        
        let cont = ''
        datasEl.forEach(el => {
            cont+=`
                <tr>
                    <td>${el.title}</td>
                    <td>${el.author}</td>
                    <td>${el.genre}</td>
                    <td id="edit"><button>Editar</button></td>
                    <td><button onClick="deletar(${el.id})">Deletar</button></td>
                </tr>
            `
        })
        tbody.innerHTML = cont
    } else {
        tbody.textContent = 'You need to add some data.' 
    }
})()


