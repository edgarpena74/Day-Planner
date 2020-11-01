
$(document).ready(function () {
let todo = document.getElementById("to-do");
let tenAmToDo = document.getElementById("tenAmToDo");
let elevenAmToDo = document.getElementById("elevenAmToDo");
let twelvePmToDo = document.getElementById("twelvePmToDo");
let onePmToDo = document.getElementById("onePmToDo");
let twoPmToDo = document.getElementById("twoPmToDo");
let threePmToDo = document.getElementById("threePmToDo");
let fourPmToDo = document.getElementById("fourPmToDo");
let fivePmToDo = document.getElementById("fivePmToDo");
let nineAmBtn = localStorage.getItem("9-AM");
let tenAmBtn =  localStorage.getItem("10-AM");
let elevenAmBtn =  localStorage.getItem("11-AM");
let twelvePmBtn =  localStorage.getItem("12-PM");
let onePmBtn =  localStorage.getItem("1-PM");
let twoPmBtn =  localStorage.getItem("2-PM");
let threePmBtn =  localStorage.getItem("3-PM");
let fourPmBtn =  localStorage.getItem("4-PM");
let fivePmBtn =  localStorage.getItem("5-PM");
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

 $("#12PmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#1PmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#2PmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#3PmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#4PmForm").on("submit", function(event){
    event.preventDefault();
    console.log("it works!")
    
 });

 $("#5PmForm").on("submit", function(event){
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

$("#saveTenAm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    tenAmToDo.style.background = "red";
    console.log("should be red?");
    let tenAmBtn = tenAmToDo.value
    tenAmToDo.textContent = tenAmBtn
    console.log(tenAmBtn)
    window.localStorage.setItem("10-AM", JSON.stringify(tenAmBtn))
    console.log(typeof tenAmBtn)

    }
)


function tenAmTask () {
    tenAmToDo.value = tenAmBtn
    tenAmToDo.style.background = "red";
    console.log("tenAmBtn is a  " + typeof tenAmBtn)
    if (tenAmBtn === null) {
        tenAmToDo.style.background = "lightgreen"
    }

}

$("#saveElevenAm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    elevenAmToDo.style.background = "red";
    console.log("should be red?");
    let elevenAmBtn = elevenAmToDo.value
    elevenAmToDo.textContent = elevenAmBtn
    console.log(elevenAmBtn)
    window.localStorage.setItem("11-AM", JSON.stringify(elevenAmBtn))
    console.log(typeof elevenAmBtn)
  
    }
)


function elevenAmTask () {
    elevenAmToDo.value = elevenAmBtn
    elevenAmToDo.style.background = "red";
    console.log("elevenAmBtn is a  " + typeof elevenAmBtn)
    if (elevenAmBtn === null) {
        elevenAmToDo.style.background = "lightgreen"
       
    }
}

$("#saveTwelvePm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    twelvePmToDo.style.background = "red";
    console.log("should be red?");
    let twelvePmBtn = twelvePmToDo.value
    twelvePmToDo.textContent = twelvePmBtn
    console.log(twelvePmBtn)
    window.localStorage.setItem("12-PM", JSON.stringify(twelvePmBtn))
    console.log(typeof twelvePmBtn)
  
    }
);


function twelvePmTask () {
    twelvePmToDo.value = twelvePmBtn
    twelvePmToDo.style.background = "red";
    console.log("twelvePmBtn is a  " + typeof twelvePmBtn)
    if (twelvePmBtn === null) {
        twelvePmToDo.style.background = "lightgreen"
       
    }
};

$("#saveOnePm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    onePmToDo.style.background = "red";
    console.log("should be red?");
    let onePmBtn = onePmToDo.value
    onePmToDo.textContent = onePmBtn
    console.log(onePmBtn)
    window.localStorage.setItem("1-PM", JSON.stringify(onePmBtn))
    console.log(typeof onePmBtn)
  
    }
);


function onePmTask () {
    onePmToDo.value = onePmBtn
    onePmToDo.style.background = "red";
    console.log("onePmBtn is a  " + typeof onePmBtn)
    if (onePmBtn === null) {
        onePmToDo.style.background = "lightgreen"
    }
};

$("#saveTwoPm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    twoPmToDo.style.background = "red";
    console.log("should be red?");
    let twoPmBtn = twoPmToDo.value
    twoPmToDo.textContent = twoPmBtn
    console.log(twoPmBtn)
    window.localStorage.setItem("2-PM", JSON.stringify(twoPmBtn))
    console.log(typeof twoPmBtn)
  
    }
);


function twoPmTask () {
    twoPmToDo.value = twoPmBtn
    twoPmToDo.style.background = "red";
    console.log("twoPmBtn is a  " + typeof twoPmBtn)
    if (twoPmBtn === null) {
        twoPmToDo.style.background = "lightgreen"
    }
};

$("#saveThreePm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    threePmToDo.style.background = "red";
    console.log("should be red?");
    let threePmBtn = threePmToDo.value
    threePmToDo.textContent = threePmBtn
    console.log(threePmBtn)
    window.localStorage.setItem("3-PM", JSON.stringify(threePmBtn))
    console.log(typeof threePmBtn)
  
    }
);


function threePmTask () {
    threePmToDo.value = threePmBtn
    threePmToDo.style.background = "red";
    console.log("threePmBtn is a  " + typeof threePmBtn)
    if (threePmBtn === null) {
        threePmToDo.style.background = "lightgreen"
    }
};

$("#saveFourPm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    fourPmToDo.style.background = "red";
    console.log("should be red?");
    let fourPmBtn = fourPmToDo.value
    fourPmToDo.textContent = fourPmBtn
    console.log(fourPmBtn)
    window.localStorage.setItem("4-PM", JSON.stringify(fourPmBtn))
    console.log(typeof fourPmBtn)
  
    }
);


function fourPmTask () {
    fourPmToDo.value = fourPmBtn
    fourPmToDo.style.background = "red";
    console.log("fourPmBtn is a  " + typeof fourPmBtn)
    if (fourPmBtn === null) {
        fourPmToDo.style.background = "lightgreen"
    }
};

$("#saveFivePm").on("click", 

    function() {

    alert("button was clicked");
    console.log("saved was clicked");
    fivePmToDo.style.background = "red";
    console.log("should be red?");
    let fivePmBtn = fivePmToDo.value
    fivePmToDo.textContent = fivePmBtn
    console.log(fivePmBtn)
    window.localStorage.setItem("5-PM", JSON.stringify(fivePmBtn))
    console.log(typeof fivePmBtn)
  
    }
);


function fivePmTask () {
    fivePmToDo.value = fivePmBtn
    fivePmToDo.style.background = "red";
    console.log("fivePmBtn is a  " + typeof fivePmBtn)
    if (fivePmBtn === null) {
        fivePmToDo.style.background = "lightgreen"
    }
};




nineAmTask();
tenAmTask();
elevenAmTask();
twelvePmTask();
onePmTask();
twoPmTask();
threePmTask();
fourPmTask();
fivePmTask();

})
