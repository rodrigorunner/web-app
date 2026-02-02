let books = [
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Chester Himes', title: 'A maldição do dinheiro', genre: 'Romance'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Bréne Brown', title: 'A coragem de ser imperfeito', genre: 'Auto-ajuda'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Some dev', title: 'Javascript', genre: 'Técnico'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Ketlin Willians', title: 'To be Rich', genre: 'Auto-ajuda'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Barbara Smith', title: 'I dont like', genre: 'Romance'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Karla Aasthin', title: 'Say no! I do not.', genre: 'Ação'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Hilthen Guadalaja', title: 'Times of war', genre: 'Guerra'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Jorge Madureira', title: 'O Partido', genre: 'Político'},
    {id: Math.floor(Math.random() * 50) + 1  ,author: 'Dona Maria', title: 'A fé e a pobreza', genre: 'Político'},
]

if(localStorage.hasOwnProperty("datas")) {
    books = JSON.parse(localStorage.getItem("datas"))
}

isSaved = localStorage.setItem("datas", JSON.stringify(books))




