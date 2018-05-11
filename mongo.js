// 引入mongodb模块，获得客户端对象
var MongoClient = require('mongodb').MongoClient;
// 连接字符串 (数据库)
var DB_CONN_STR = 'mongodb://localhost:27017/test';

//  定义函数表达式，用于操作数据库并返回结果
var getData = function(db, callback) {
    //获得指定的集合
    var collection = db.collection('test');
    //要查询数据的条件，<=10岁的用户
    // var  where={age:{"$lte":10}};
    //要显示的字段
    // var set={name:1,age:1};

    // 插入数据
    // var data = [{"name":'李开吉',"age":20}];
    // collection.insert(data, function(err, result) {
    //     //如果存在错误
    //     if(err)
    //     {
    //         console.log('Error:'+ err);
    //         return;
    //     }
    //     //调用传入的回调方法，将操作结果返回
    //     callback(result);
    // });

    // 删除数据
    // var  where = {'name': '李开吉' };
    // collection.remove(where,function(err, result) {
    //     //如果存在错误
    //     if(err)
    //     {
    //         console.log('Error:'+ err);
    //         return;
    //     }
    //     //调用传入的回调方法，将操作结果返回
    //     callback(result);
    // });

    // 修改数据
    //要修改数据的条件，>=10岁的用户
    var  where = {'name':'李开吉'};
    // //要修改的结果
    var set ={ "$set" : {"age" : 23} }
    collection.updateMany(where,set, function(err, result) {
        //如果存在错误
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        //调用传入的回调方法，将操作结果返回
        callback(result);
    });

    // 查询数据
    collection.find().toArray(function(err, result) {
        console.log("--------------------开始查询数据----------------------------------")
        //如果存在错误
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        //调用传入的回调方法，将操作结果返回
        callback(result);
        console.log("--------------------查询数据结束----------------------------------")
    });
}

//使用客户端连接数据，并指定完成时的回调方法
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    //执行插入数据操作，调用自定义方法
    getData(db, function(result) {
        //显示结果
        console.log(result);
        //关闭数据库
        db.close();
    });
});