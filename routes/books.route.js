const express = require('express')
const { getAllBooks, createBook, getBook, updateBook, deleteBook } = require('../controllers/books.controller')
const router = express.Router()

router.route('/').get(getAllBooks).post(createBook)

router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

module.exports = router