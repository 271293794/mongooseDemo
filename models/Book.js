var mongoose = require('mongoose'),
    bookSchema = require('../schemas/book')

module.exports = mongoose.model('book', bookSchema)
