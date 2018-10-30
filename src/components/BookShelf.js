import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">{
/* Replace hard-coded data with props to correctly render bookshelf details */
      }
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            this.props.books.map((book,key)=> <Book updateBookshelf={this.props.updateBookshelf} book={book} key={book.id} />)
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;