const Books = require("../models/books.model");

async function getAllBooks() {
  try {
    const books = await Books.find();
    return books;
  } catch (error) {
    console.error(error);
  }
}

async function getBook(id) {
    try {
        const books = await Books.findById(id)
        return books
    } catch (error) {
        console.error(error);
    }
}

async function createBooks(data) {
    try {
        const {name ,description ,price , author , language , published_year} = data
      const books = await Books.create( {name ,description ,price , author , language , published_year});
      return books;
    } catch (error) {
      console.error(error);
    }
  }

  async function updateBooks(id , reqBody) {
    try {
      const books = await Books.findByIdAndUpdate(id,  reqBody , {new: true});
      return books;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBooks(id) {
    try {
      const books = await Books.findByIdAndDelete(id);
      return books;
    } catch (error) {
      console.error(error);
    }
  }




module.exports = {getAllBooks , getBook , createBooks , updateBooks , deleteBooks }