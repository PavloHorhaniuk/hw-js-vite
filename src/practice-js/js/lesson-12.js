const bookShelf = {
    books: ["The Last Kingdom"],
    // getBooks() {
    //     return this.books;
    // },
    // addBook(bookName) {
    //     this.books.push(bookName);
    // },
    // removeBook(bookName) {
    //     const bookIndex = this.books.indexOf(bookName);
    //     this.books.splice(bookIndex, 1);
    // },
};
console.log("books_before:", bookShelf);

//todo: ✴️ var.1
//todo: Додавання до об'єкту метода "getBooks":

bookShelf.getBooks = function () {
    return this.books;
}

bookShelf.addBooks = function (bookName) {
    this.books.push(bookName);
}

bookShelf.removeBooks = function (bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
}

console.log("books__after1:", bookShelf)


//todo: ✳️ var.2 Додавання до об'єкту методів "getBooks", "addBook" і "removeBook":
Object.assign(bookShelf, {
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
});

console.log("books__after2:", bookShelf)