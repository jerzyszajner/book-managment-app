import AudioBook from "./audioBook.js";
import PrintedBook from "./printedBooks.js";

class BookManager {
  static booksCollection =
    JSON.parse(localStorage.getItem("books-collection")) || [];

  static addBook(
    title,
    author,
    publisher,
    date,
    bookType,
    pages,
    printType,
    narrator,
    duration
  ) {
    let book;
    if (bookType === "printed-book") {
      book = new PrintedBook(
        title,
        author,
        publisher,
        date,
        bookType,
        pages,
        printType
      );
    } else {
      book = new AudioBook(
        title,
        author,
        publisher,
        date,
        bookType,
        narrator,
        duration
      );
    }
    BookManager.booksCollection.push(book);
    this.storeBooks(this.booksCollection);
  }

  static storeBooks(collection) {
    localStorage.setItem("books-collection", JSON.stringify(collection));
  }
}

export default BookManager;
