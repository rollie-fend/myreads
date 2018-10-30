import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {
            this.props.books.map((book,key)=> <Book book={book} key={book.id} />)
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;