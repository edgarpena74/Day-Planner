let todo = document.getElementById("to-do");
let save = document.getElementById("save");
let input = document.getElementById("input");

$(input).on("click", function(event){
   event.preventDefault();
   console.log("did it work?")
   return;
});


$(save).on("click", function(){
    console.log("ive been clicked")
    let text = document.createElement("p")
})