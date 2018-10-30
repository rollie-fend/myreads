import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'


class SearchPage extends React.Component {
/* initialize the state */
  state = {
    books:[],
    query: "",
    results:[]
  }

/* Fetch data from the backend and update the state (populate book array) */
  componentDidMount() {
    BooksAPI.getAll()
    .then(response=> {
      this.setState({books:response});
    })
  }
  updateQuery = (query) => {
    this.setState({query: query}, this.submitSearch);
  }

  submitSearch() {
    if(this.state.query === '') {
      return this.setState({results: [] })
    }
    BooksAPI.search(this.state.query.trim()).then(results => {
      if(results.error) {
        return this.setState({results: [] })
      }
      else {
        results.forEach(book => {
          let newset = this.state.books.filter(Book => Book.id === book.id)
            if(newset[0]) { book.shelf = newset[0].shelf }               
        });
      return this.setState({results: results })
      }
    })
  }
/* Copy function from mainpage that updates the state of the bookshelf by passing values from the book array */
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
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">              {
                 this.state.results.map((book, key) => <Book updateBookshelf={this.state.updateBookshelf} book={book} key={book.id} />)
              }
</ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;   