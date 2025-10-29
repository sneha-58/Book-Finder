import React, { useState } from 'react'
import BookCard from './components/BookCard'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('title') // <-- Added state for dropdown
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchBooks = async () => {
    if (!query.trim()) {
      setError('Please enter a book title to search.')
      return
    }

    setError('')
    setLoading(true)

    try {
      // dynamically change the query based on selected filter
      const url = `https://openlibrary.org/search.json?${filter}=${query}`
      const response = await fetch(url)
      const data = await response.json()
      setBooks(data.docs || [])
    } catch (err) {
      setError('Failed to fetch books. Please try again later.')
    }

    setLoading(false)
  }

  return (
    <div className="app">
      <h1>📚 Book Finder</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search by ${filter}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* 👇 Add this dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
          <option value="all">All</option>
        </select>

        <button onClick={searchBooks}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}

      <div className="book-list">
        {books.length > 0 &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </div>

      {!loading && books.length === 0 && !error && (
        <p className="no-data">No books to display. Try searching!</p>
      )}
    </div>
  )
}

export default App;
