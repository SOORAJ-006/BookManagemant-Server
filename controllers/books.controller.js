const services = require('../services/books.services')

const getAllBooks = async (req , res) => {
    const books = await services.getAllBooks()
    res.status(200).json(books)
}

const getBook = async(req,res) => {
    const books = await services.getBook(req.params.id)
    res.status(200).json(books)
}

const createBook = async(req, res) => {
    const books = await services.createBooks(req.body)
    res.status(200).json(books)
}

const updateBook = async (req, res) => {
    const books = await services.updateBooks(req.params.id , req.body)
    res.status(200).json(books)
}

const deleteBook = async (req, res) => {
    const books = await services.deleteBooks(req.params.id)
    res.status(200).json(books)
}

module.exports = {getAllBooks, getBook , createBook , updateBook , deleteBook}