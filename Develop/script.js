
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
let currentDay = document.getElementById("currentDay")

//date and time
let theDay = moment().format('MMMM Do YYYY, h:mm a');
     console.log(theDay)
currentDay.textContent = theDay



//preventing refresh when enter is pressed
$("#theForm").on("submit", function(event){
   event.preventDefault();
});
$("#10AmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#11AmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#12PmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#1PmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#2PmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#3PmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#4PmForm").on("submit", function(event){
    event.preventDefault();
});

 $("#5PmForm").on("submit", function(event){
    event.preventDefault();
});


//the functions to save task to local storage
$("#saveNineAm").on("click", 

    function() {

    console.log("saved was clicked");
    todo.style.background = "red";
    let nineAmBtn = todo.value
    todo.textContent = nineAmBtn
    window.localStorage.setItem("9-AM", JSON.stringify(nineAmBtn))

    }
)


function nineAmTask () {
    todo.value = nineAmBtn
    todo.style.background = "red";
    if (nineAmBtn === null) {
        todo.style.background = "lightgreen"
    }

}

$("#saveTenAm").on("click", 

    function() {

    tenAmToDo.style.background = "red";
    let tenAmBtn = tenAmToDo.value
    tenAmToDo.textContent = tenAmBtn
    window.localStorage.setItem("10-AM", JSON.stringify(tenAmBtn))

    }
)


function tenAmTask () {
    
    tenAmToDo.value = tenAmBtn
    tenAmToDo.style.background = "red";
    if (tenAmBtn === null) {
        tenAmToDo.style.background = "lightgreen"
    }

}

$("#saveElevenAm").on("click", 

    function() {

    elevenAmToDo.style.background = "red";
    let elevenAmBtn = elevenAmToDo.value
    elevenAmToDo.textContent = elevenAmBtn
    window.localStorage.setItem("11-AM", JSON.stringify(elevenAmBtn))
  
    }
)


function elevenAmTask () {
    elevenAmToDo.value = elevenAmBtn
    elevenAmToDo.style.background = "red";
    if (elevenAmBtn === null) {
        elevenAmToDo.style.background = "lightgreen"
       
    }
}

$("#saveTwelvePm").on("click", 

    function() {

    twelvePmToDo.style.background = "red";
    let twelvePmBtn = twelvePmToDo.value
    twelvePmToDo.textContent = twelvePmBtn
    window.localStorage.setItem("12-PM", JSON.stringify(twelvePmBtn))
  
    }
);


function twelvePmTask () {
    twelvePmToDo.value = twelvePmBtn
    twelvePmToDo.style.background = "red";
    if (twelvePmBtn === null) {
        twelvePmToDo.style.background = "lightgreen"
       
    }
};

$("#saveOnePm").on("click", 

    function() {

    onePmToDo.style.background = "red";
    let onePmBtn = onePmToDo.value
    onePmToDo.textContent = onePmBtn
    window.localStorage.setItem("1-PM", JSON.stringify(onePmBtn))
  
    }
);


function onePmTask () {
    onePmToDo.value = onePmBtn
    onePmToDo.style.background = "red";
    if (onePmBtn === null) {
        onePmToDo.style.background = "lightgreen"
    }
};

$("#saveTwoPm").on("click", 

    function() {

    twoPmToDo.style.background = "red";
    let twoPmBtn = twoPmToDo.value
    twoPmToDo.textContent = twoPmBtn
    window.localStorage.setItem("2-PM", JSON.stringify(twoPmBtn))
  
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

    threePmToDo.style.background = "red";
    let threePmBtn = threePmToDo.value
    threePmToDo.textContent = threePmBtn
    window.localStorage.setItem("3-PM", JSON.stringify(threePmBtn))
  
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

    fourPmToDo.style.background = "red";
    let fourPmBtn = fourPmToDo.value
    fourPmToDo.textContent = fourPmBtn
    window.localStorage.setItem("4-PM", JSON.stringify(fourPmBtn))
  
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

    fivePmToDo.style.background = "red";
    let fivePmBtn = fivePmToDo.value
    fivePmToDo.textContent = fivePmBtn
    window.localStorage.setItem("5-PM", JSON.stringify(fivePmBtn))
  
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



//running task functions
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
