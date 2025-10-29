import React from 'react'
import './SearchBar.css'

const SearchBar = ({ query, setQuery, filter, setFilter, onSearch, onEnter }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onEnter(query, filter)
        }}
        placeholder={
          filter === 'title'
            ? 'Search by title...'
            : filter === 'author'
            ? 'Search by author...'
            : filter === 'year'
            ? 'Search by year published...'
            : 'Search by keyword...'
        }
        className="search-input"
      />

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

      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
  )
}

export default SearchBar

import React from 'react'
import './SearchBar.css'

