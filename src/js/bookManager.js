import AudioBook from "./audioBook";
import Book from "./book";
import PrintedBook from "./printedBooks";
import Ui from "./ui";
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
    const latestCollection =
      JSON.parse(localStorage.getItem("books-collection")) || [];
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
    latestCollection.push(book);
    this.storeBooks(latestCollection);
    BookManager.booksCollection = latestCollection;
  }
  static storeBooks(collection) {
    localStorage.setItem("books-collection", JSON.stringify(collection));
  }
  static deleteBook(id) {
    const latestCollection = JSON.parse(
      localStorage.getItem("books-collection")
    );
    BookManager.booksCollection = latestCollection.filter((book) => {
      return book.id !== id;
    });
    BookManager.storeBooks(BookManager.booksCollection);
    Ui.renderBooks();
  }
  static editBook(
    id,
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
    const latestCollection = JSON.parse(
      localStorage.getItem("books-collection")
    );
    const bookIndex = latestCollection.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
      latestCollection[bookIndex] = {
        id,
        title,
        author,
        publisher,
        date,
        bookType,
        pages,
        printType,
        narrator,
        duration,
      };
    }
    BookManager.storeBooks(latestCollection);
    BookManager.booksCollection = latestCollection;
  }
}
export default BookManager;
