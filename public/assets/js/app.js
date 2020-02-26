$("#addBurger").on("click", function(){
   
    const newBurger = {
        burger_name: $("#burger").val()
    }
  console.log(newBurger)
    $.ajax({
        url: "api/burgers",
        method: "POST",
        data: newBurger
    }).then(function(data){
        location.reload()
    })
})