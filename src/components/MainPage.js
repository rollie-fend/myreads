import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf';

class MainPage extends React.Component {

  render() {
    const {books, updateBookshelf} = this.props;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <BookShelf
                  updateBookshelf={updateBookshelf}
                  title="Currently Reading"
                  books={books.filter(book=>book.shelf==="currentlyReading")}
                />
                <BookShelf
                  updateBookshelf={updateBookshelf}
                  title="Want to Read"
                  books={books.filter(book=>book.shelf==="wantToRead")}
                />
                <BookShelf
                  updateBookshelf={updateBookshelf}
                  title="Read"
                  books={books.filter(book=>book.shelf==="read")}
                />
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
    