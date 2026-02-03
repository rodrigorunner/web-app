(function() {
    let tbody = document.querySelector('tbody')
   
    return new Promise((resolve, reject) => {
        try {
            let datasEl = JSON.parse(localStorage.getItem("datas"))
            resolve(datasEl)
                let cont = ''
                datasEl.forEach(el => {
                    cont+=`
                        <tr>
                            <td>${el.title}</td>
                            <td>${el.author}</td>
                            <td>${el.genre}</td>
                            <td><a href="editar.html" onClick="editar(${el.id})">Editar</a></td>

                            <td><button onClick="deletar(${el.id})">Deletar</button></td>
                        </tr>
                    `
                })
                tbody.innerHTML = cont
        } catch (error) {
            reject(error)
        }
    })        
})()


