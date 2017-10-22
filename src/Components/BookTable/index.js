import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelves from '../BookShelves'
import If from '../If'
import * as BooksAPI from '../../BooksAPI'

class BookTable extends Component {
  state = {
    bookList: {}
  }
  
  componentDidMount = () => {
    this.getBooks(BooksAPI.getAll())
  }

  getBooks = obj => obj.then(res => {
    this.setState({
      bookList: res
    })
  })

  render () {
    const { bookList } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <If test={bookList.length > 0}>
            <BookShelves books={bookList} />
          </If>
        </div>
        <div className="open-search">
          <Link to={{
            pathname: '/search',
            state: { bookList }
          }}>
            Add a book
          </Link>
        </div>
      </div>  
    )
  }
}

export default BookTable
