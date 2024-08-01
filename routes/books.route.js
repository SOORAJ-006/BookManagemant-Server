const express = require('express')
const { getAllBooks, createBook, getBook, updateBook, deleteBook } = require('../controllers/books.controller')
const router = express.Router()
const validateToken = require('../middleware/tokenValidate.middleware')

router.route('/').get(getAllBooks).post(createBook)

router.route('/:id').all(validateToken).get(getBook).put(updateBook).delete(deleteBook)

module.exports = router