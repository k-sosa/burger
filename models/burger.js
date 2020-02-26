const orm = require("../config/orm");
const burger = {
 selectAll: function(controllerCallback){
     orm.selectAll("burgers", function(data){
         controllerCallback(data)
     })
 },
insertOne: function(burgerName, controllerCallback){
    orm.insertOne("burgers", ["burger_name", "devoured"],[burgerName, false], function(data){
        controllerCallback(data)
    })
}

}


module.exports = burger