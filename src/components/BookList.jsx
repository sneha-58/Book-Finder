import React from 'react'
import BookCard from './BookCard'
import './BookList.css'

const BookList = ({ books, loading, error, onRetry }) => {
  if (loading) {
    return <p className="loading-text">Loading books...</p>
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">{error}</p>
        <button onClick={onRetry} className="retry-button">Retry</button>
      </div>
    )
  }

  if (!books || books.length === 0) {
    return <p className="no-results">No books found. Try a different search!</p>
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  )
}

export default BookList
