(function() {

    deletar = (id) => {
        let datas = []

        if(localStorage.hasOwnProperty("datas")) {
            datas = JSON.parse(localStorage.getItem("datas"))
        }
       
        deletedData = datas.filter(item => item.id !== id)

        localStorage.setItem("datas", JSON.stringify(deletedData))
   }
    

})()