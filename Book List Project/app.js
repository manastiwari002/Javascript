function Book(name,author,price){
    this.name = name
    this.author = author
    this.price = price
}
function UI(){}

UI.prototype.addBook = function(book){
    //Insert Book in Table
    const tbody = document.getElementById('tbody');
    tbody.innerHTML += `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
            <td><a href = "#"><i class="fas fa-minus-circle"></a></td>
        </tr>
    `
}

UI.prototype.clearFields = function(){
    document.getElementById('name').value = ''
    document.getElementById('author').value = ''
    document.getElementById('price').value = ''
}

UI.prototype.validate = function(book){
    const inputName = document.getElementById('name')
    const inputAuthor = document.getElementById('author')
    const inputPrice = document.getElementById('price')
    const name = /^[a-zA-Z0-9]{2,10}$/
    const author = /^[a-zA-Z]{2,15}$/
    const price = /^[0-9]{1,4}$/
    if(!name.test(inputName.value)){
        inputName.classList.add('is-invalid')
    }else{
        inputName.classList.remove('is-invalid')
    }
    if(!author.test(inputAuthor.value)){
        inputAuthor.classList.add('is-invalid')
    }else{
        inputAuthor.classList.remove('is-invalid')
    }
    if(!price.test(inputPrice.value)){
        inputPrice.classList.add('is-invalid')
    }else{
        inputPrice.classList.remove('is-invalid')
    }
    if(name.test(inputName.value)&&author.test(inputAuthor.value)&&price.test(inputPrice.value)){
        this.addBook(book)
    }
}

//Remove Book Item
const table = document.getElementById('table');
table.addEventListener('click',function(e){
    if(e.target.className === "fas fa-minus-circle"){
        e.target.parentElement.parentElement.parentElement.remove()
    }
})

//Load Input and remove the class is-invalid if any on click
const input_name = document.querySelector('#name');
input_name.addEventListener('click',function(e){
    input_name.classList.remove('is-invalid')
})
const input_author = document.querySelector('#author');
input_author.addEventListener('click',function(e){
    input_author.classList.remove('is-invalid')
})
const input_price = document.querySelector('#price');
input_price.addEventListener('click',function(e){
    input_price.classList.remove('is-invalid')
})

const booksave = document.querySelector('#booksave')
//Add Event listener on submit
booksave.addEventListener('click',function(e){
    //Get Input Fields
    let name = document.querySelector('#name').value
    let author = document.getElementById('author').value
    let price = document.getElementById('price').value

    const book = new Book(name,author,price)

    //Add book to Table
    const ui = new UI()

    ui.validate(book);

    ui.clearFields();

    e.preventDefault()
})

