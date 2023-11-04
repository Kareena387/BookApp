const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books');// can use atlase url

const db = mongoose.connection;

db.on('error', (err) => console.log('MongoDB error occured:', err))//callback function
db.once('open', () => {
  console.log('Connected to MongoDB')
})