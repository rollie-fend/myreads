import React from 'react'
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
                  <BookShelf title="Currently Reading" books={this.state.books.filter(b=>b.shelf==="currentlyReading")}/>
                  <BookShelf title="Want to Read" books={this.state.books.filter(b=>b.shelf==="wantToRead")}/>
                  <BookShelf title="Read" books={this.state.books.filter(b=>b.shelf==="read")}/>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    );
  }
}

export default MainPage;
    