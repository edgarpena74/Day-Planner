
$(document).ready(function () {
let todo = document.getElementById("to-do");
let tenAmToDo = document.getElementById("tenAmToDo");
let elevenAmToDo = document.getElementById("elevenAmToDo")
let nineAmBtn = localStorage.getItem("9-AM");
let tenAmBtn =  localStorage.getItem("10-AM");
let elevenAmBtn =  localStorage.getItem("11-AM");
console.log(nineAmBtn);
console.log(tenAmBtn);







$("#theForm").on("submit", function(event){
   event.preventDefault();
   console.log("it works!")
   
});
$("#10AmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#11AmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });



$("#saveNineAm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    todo.style.background = "red";
    console.log("should be red?");
    let nineAmBtn = todo.value
    todo.textContent = nineAmBtn
    console.log(nineAmBtn)
    window.localStorage.setItem("9-AM", JSON.stringify(nineAmBtn))
    console.log(typeof nineAmBtn)

    }
)


function nineAmTask () {
    todo.value = nineAmBtn
    todo.style.background = "red";
    console.log("nineAmBtn is a  " + typeof nineAmBtn)
    if (nineAmBtn === null) {
        todo.style.background = "lightgreen"
       
    }

}

// $("#saveTenAm").on("click", 

//     function() {

//     alert("button was clicked");
//     console.log("saved was clicked");
//     tenAmToDo.style.background = "red";
//     console.log("should be red?");
//     let tenAmBtn = tenAmToDo.value
//     tenAmToDo.textContent = tenAmBtn
//     console.log(tenAmBtn)
//     window.localStorage.setItem("10-AM", JSON.stringify(tenAmBtn))
//     console.log(typeof tenAmBtn)

//     }
// )


// function tenAmTask () {
//     tenAmToDo.value = tenAmBtn
//     tenAmToDo.style.background = "red";
//     console.log("tenAmBtn is a  " + typeof tenAmBtn)
//     if (tenAmBtn === null) {
//         tenAmToDo.style.background = "lightgreen"
       
//     }

// }

// $("#saveElevenAm").on("click", 

//     function() {

//     alert("button was clicked");
//     console.log("saved was clicked");
//     elevenAmToDo.style.background = "red";
//     console.log("should be red?");
//     let elevenAmBtn = elevenAmToDo.value
//     elevenAmToDo.textContent = elevenAmBtn
//     console.log(elevenAmBtn)
//     window.localStorage.setItem("11-AM", JSON.stringify(elevenAmBtn))
//     console.log(typeof elevenAmBtn)
//     if (elevenAmToDo.value === "unavailable"){
//         elevenAmToDo.style.background = "grey";
//     }


//     }
// )


// function elevenAmTask () {
//     elevenAmToDo.value = elevenAmBtn
//     elevenAmToDo.style.background = "red";
//     console.log("elevenAmBtn is a  " + typeof elevenAmBtn)
//     if (elevenAmBtn === null) {
//         elevenAmToDo.style.background = "lightgreen"
       
//     }
// }



nineAmTask();
tenAmTask();
elevenAmTask()

})
