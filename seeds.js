lists = [
    {id: Math.floor(Math.random() * 1000) + 1, item: 'javascript'},
    {id: Math.floor(Math.random() * 1000) + 1, item: 'HTML5'},
    {id: Math.floor(Math.random() * 1000) + 1, item: 'CSS3'},
    {id: Math.floor(Math.random() * 1000) + 1, item: 'React'},
    {id: Math.floor(Math.random() * 1000) + 1, item: 'Bootstrap'},
]

localStorage.setItem('items', JSON.stringify(lists))

