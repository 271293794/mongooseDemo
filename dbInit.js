
var mogoose = require('mongoose'),
    connectStr = 'mongodb://127.0.0.1:27017/part10'
var db = mogoose.connect(connectStr, (err) => {
    if (err)
        console.log('连接错误')
    else
        console.log('连接成功')
})
module.exports=db




