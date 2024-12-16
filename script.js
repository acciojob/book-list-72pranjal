//your JS code here. If required.
let title = document.querySelector("#title")
let author = document.querySelector('#author')
let isbn = document.querySelector('#isbn')
let button = document.querySelector('#submit')
let bookList = [];
let tableBody = document.querySelector('#book-list')
button.addEventListener('click', (e)=> {
    e.preventDefault()
    bookList.push({title: title.value, author: author.value, isbn: isbn.value})
    bookList.forEach(data=> {
        let newRow  = tableBody.insertRow()
        let titleCell = newRow.insertCell()
        titleCell.innerText = data.title
        let authorCell = newRow.insertCell()
        authorCell.innerText = data.author
        let isbnCell = newRow.insertCell()
        isbnCell.innerText = data.isbn
        let btn = newRow.insertCell()
        btn.innerHTML = `<button class="delete">Remove</button>`
    })
})