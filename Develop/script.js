
$(document).ready(function () {
let todo = document.getElementById("to-do");
let save = document.getElementById("save");
let form = document.getElementById("theForm");
let userTask = document.getElementById("userTask");
let formControl = document.querySelector(".form-control");
let formGroup = document.getElementsByClassName("form-group");
let userText = localStorage.getItem("input")

console.log(userText)








$("#theForm").on("submit", function(event){
   event.preventDefault();
   console.log("it works!")
   
});



$("#save").on("click", 

    function() {
    alert("button was clicked");
    console.log("saved was clicked");
    // formControl.style.background = "red";
    formControl.style.background = "red";
    console.log("should be red?");
    let userText = todo.value
    todo.textContent = userText
    console.log(userText)
    window.localStorage.setItem("input", userText)
    

    }
)

function task () {
    todo.value = userText
    // formControl.style.background = "red";

}

task();

})
