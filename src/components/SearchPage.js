import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'


class SearchPage extends React.Component {

  state = {
    books:[],
    query: "",
    results:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books=> {
      this.setState({books});
    })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()}, this.submitSearch);
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

  render() {
    const {updateBookshelf}= this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map((book,key)=> <Book updateBookshelf={updateBookshelf} book={book} key={book.id} shelf={book.shelf}/>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;