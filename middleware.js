

var mogoose = require('mongoose'),
    db = require('./dbInit'),
    Book = require('./models/Book')

var book1=new Book({
    isbn:1004,
    name:'python语法基础'

})
var book2=new Book({
    isbn:1005,
    name:'css层叠样式'

})


book1.save()    




