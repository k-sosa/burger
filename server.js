const express = require("express");

let app = express();

const PORT = process.env.PORT || 8080;

let expressHandleBars = require("express-handlebars");

app.engine("handlebars" , expressHandleBars({defaultLayout: "main"}) )
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const controller = require("./controllers/burgers_controller");
controller(app)


app.listen(PORT, function(){
    console.log("app is listening http://localhost:" + PORT)
})