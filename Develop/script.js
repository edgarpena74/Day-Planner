let todo = document.getElementById("to-do");
let save = document.getElementById("save");
let form = document.getElementById("theForm");
let userTask = document.getElementById("userTask");
let formControl = document.getElementsByClassName("form-Control");

$("#form").on("submit", function(event){
   event.preventDefault();
   console.log("it works!")
   
});



$("#save").on("click", 

    function() {
    alert("button was clicked")
    console.log("saved was clicked")
    formControl.style.background = "red !important";
    console.log("should be red?")
    // todo.value = "HOLY SHIT DOES IT WORK?"

    }

)