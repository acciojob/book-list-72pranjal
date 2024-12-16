document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // get the values entered by the user
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    // create a new row and cells
    var newRow = document.createElement('tr');
    var titleCell = document.createElement('td');
    var authorCell = document.createElement('td');
    var isbnCell = document.createElement('td');
    var deleteCell = document.createElement('td');

    // add the entered values to the cells
    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;

    // append the cells to the row
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(isbnCell);

    // create a delete button and append it to the row
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
	deleteButton.className = 'delete'
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // append the row to the table
    document.getElementById('book-list').appendChild(newRow);

    // attach an event listener to the delete button
    deleteButton.addEventListener('click', function() {
        // remove the respective row from the table
        newRow.remove();
    });
});
// //your JS code here. If required.
// let title = document.querySelector("#title")
// let author = document.querySelector('#author')
// let isbn = document.querySelector('#isbn')
// let button = document.querySelector('#submit')
// let bookList = [];
// let tableBody = document.querySelector('#book-list')
// button.addEventListener('click', (e)=> {
//     e.preventDefault()
//     bookList.push({title: title.value, author: author.value, isbn: isbn.value})
//     bookList.forEach(data=> {
//         let newRow  = tableBody.insertRow()
//         let titleCell = newRow.insertCell()
//         titleCell.innerText = data.title
//         let authorCell = newRow.insertCell()
//         authorCell.innerText = data.author
//         let isbnCell = newRow.insertCell()
//         isbnCell.innerText = data.isbn
//         let btn = newRow.insertCell()
//         btn.innerHTML = `<button class="delete">Remove</button>`
//     })
// })