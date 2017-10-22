import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Components/Search'
import BookTable from './Components/BookTable'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={BookTable} exact />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
