var express = require('express');
var router = express.Router();
//var books = require('../resources/books') //-- to access resources file from json

var Book = require('../models/book')// access book database file frim models

/* GET home page. */
router.get('/add', function (req, res, next) {
  const books = Book.find();// accessing book from database-schema
    res.render('addBooks', { title: 'Add Books' });
});

router.post('/save',  async function (req, res, next) {
    //books.push({ ...req.body, _id: `00${books.length + 1}` })
    await Book.insertMany([req.body])
    res.redirect('/')
})



/*router.get('/remove/:_id', async function (req, res) {
  console.log(req.params._id);
  await Book.findOneAndRemove({ _id: req.params._id })
  const books = await Book.find()
  res.render('index', { title: 'Book App', bookList: books, redirectUrl: '/' });
})*/


router.get('/edit/:_id',  async function(req, res, next){
  console.log(req.params. _id);
  const book = await Book.findOne({ _id: req.params._id });
    //const book = books.find((book)=>book._id === req.params._id)
    res.render('editBooks', {
      title: "Edit Books", 
      book})
  })

  router.post('/saveEdited/:_id', function(req, res, next){
    const currIndex = Book.findIndex((book)=>book._id === req.params._id)
    Book.splice(currIndex, 1, {...req.body, _id: req.params._id})
    res.redirect('/')
  })

  /*router.post('/edit/:_id', async function (req, res) {
    await Book.findOneAndUpdate({ _id: req.params._id }, { ...req.body })
    res.redirect('/');
  })*/
  
//deletion
router.get('/delete/:_id', function(req, res ,next){
  const delIndex = Book.findIndex((book) => book._id === req.params._id);
  if(delIndex !== -1){
    Book.splice(delIndex, 1);
    console.log(`Book with _id ${req.params._id} deleted`);

  }
  else{console.log(`Book with _id ${req.params._id} not found`);}
  res.redirect('/');
});

router.post('/saveDelete/:_id', function(req ,res ,next){
  const currIndex = Book.findIndex((book) => book._id === req.params. _id)

res.redirect('/')
})
  

  
  
module.exports = router;
