var mongoose = require('mongoose')
var bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        default: "XXXXXX",
        // 建立唯一索引
        unique: true

    },
    name: {
        type: String,
        default: "书名",
        // 内置的一种 set 修饰器
        trim: true

    }

})

// 为 book 模型增加一个自定义的静态方法（根据书籍的 isbn 号查找某本书）
bookSchema.statics.findByISBN = function (isbn, cb) {

    this.findOne({ isbn: isbn }, (err, res) => {
        cb(err, res._doc)
    })
}
/**
 * 保存之前做些事情 doc 为要保存的对象
 */
bookSchema.pre('save', function (doc, next) {
    console.log('开始保存对象',doc)
    next()
})
/**
 * 保存之后做些事情（post 有 “后面” 的意思）
 */
bookSchema.post('save', function (doc, next) {
    console.log('保存成功')
    next()
})

module.exports = bookSchema