
//documents
//book and books are collection name
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({//schema(collection)

  title: String,
  author: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema); //collection-Book 

module.exports = Book;