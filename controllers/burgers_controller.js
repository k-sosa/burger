const model = require("../models/burger")
function burgerController(app) {

    app.get("/", function(req, res){
        model.selectAll(function(data){
            res.render("index", {burgers:data})
        })
    })

    app.post("/api/burgers", function(req, res){
        const burgerName = req.body.burger_name
      console.log(burgerName)
        model.insertOne(burgerName, function(data){
        res.json(data)
       })
     
        
    })
     
}

module.exports = burgerController