const connection = require('./connection');

const orm = {
    selectAll: function(tableName, modelCallback){
        connection.query("select * from ??", tableName, function(err, data){
             modelCallback(data)
        })
    }, insertOne: function(tableName, columns,values, modelCallback) {
        connection.query("insert into ?? (??, ??)values (?, ?)", [tableName,...columns, ...values],function(err, data){
            modelCallback(data)
        })

    }
}


module.exports = orm