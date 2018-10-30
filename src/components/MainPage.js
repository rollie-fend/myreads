import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookShelf from './BookShelf';

class MainPage extends React.Component {
/* initialize the state */
  state = {books:[]}

/* Fetch data from the backend and update the state (populate book array) */
  componentDidMount() {
    BooksAPI.getAll()
    .then(response=> {
      this.setState({books:response});
      console.log(response);
    })
  }

/* create a function that will update the state of the bookshelf by passing values from the book array */

updateBookshelf = (book,shelf) => {
    BooksAPI.update(book,shelf)
    .then(response=> {
      book.shelf=shelf;
      this.setState(state=>({
        books: state.books.filter(Book=>Book.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <BookShelf updateBookshelf={this.updateBookshelf} title="Currently Reading" books={this.state.books.filter(book=>book.shelf==="currentlyReading")}/>
                  <BookShelf updateBookshelf={this.updateBookshelf} title="Want to Read" books={this.state.books.filter(book=>book.shelf==="wantToRead")}/>
                  <BookShelf updateBookshelf={this.updateBookshelf} title="Read" books={this.state.books.filter(book=>book.shelf==="read")}/>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      </div>
    );
  }
}

export default MainPage;
    