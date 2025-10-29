import React from 'react'
import './BookCard.css';

const BookCard = ({ book }) => {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x220?text=No+Cover'

  return (
    <div className="book-card">
      <img src={coverImg} alt={book.title} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
    </div>
  )
}

export default BookCard
