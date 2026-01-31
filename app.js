/** Inserir dados na tabela via código */
/** Recuperar o tbody da tabela. */
let tbody = document.querySelector('tbody')
/** Criar uma variável para iterar. */
let el = ''
/** Imprimir 10 elementos */
for(let i = 0; i < 10; i++) {
    el+= tbody.innerHTML
}
tbody.innerHTML = el