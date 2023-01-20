console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const titleEl = document.getElementById("title")
const authorEl = document.getElementById("author")
const readEl = document.getElementById("read")

class Book {
  constructor(title, author, read){
    this.id = id
    this.title = title
    this.author = author
    this.read = read
  }
}

class Library {
  constructor(bookCount, books) {
    this.bookCount = bookCount
    this.books = books
  }
  markRead(checkbox, id) {
    for (let i = 0; i < this.books.length; i++){
      if (id === this.books.id) {
        books.read = true
        checkbox.checked = true
        checkbox.disabled = true
    }
  }
  }


  addBook() {

    const newBook = new Book(titleEl.value, authorEl.value, readEl.value)
    this.book.push(newBook)

    const newTabler = document.createElement("tr")
  }

}