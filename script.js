

//display current day on webpage
var currentDay = moment()
$('#currentDay').text(currentDay.format('dddd, MMMM Do YYYY, h:mm:ss a'))


// on save btn click create local storage. Get help from tutor here
// var saveBtn = $('.saveBtn')
// var userText = $('#userText').value
// var userStorage = localStorage.setItem("userText", userText)
// userText.textcontent = userStorage

// $('.saveBtn').click(function(e) {
//     e.preventDefault
//     userText.textcontent = userStorage
//     localStorage.getItem("userText", userStorage)
// })
// output = []
// function submit () {
//     var input = document.getElementById("userText").value
//     var output = JSON.parse(localStorage.getItem("output"))
//     output.push(input)
//     localStorage.setItem("output", JSON.stringify(output))
//     document.getElementById("userText").value = ''
//     document.getElementById("saveData").innerHTML = localStorage.getItem("userText")

// }
// document.getElementById("saveData").innerHTML = localStorage.getItem("userText")


moment(currentHour).format("HHmm");
var currentHour = moment();
console.log(currentHour)
    

// display different colors based on the time
var colorChange = function() {
    var currentHour = moment().format('H')
    var time = $(".input")
    for ( i=0; i < time.length; i++) {
     
}
    if (currentHour === time) {
        $(".input").addClass("present")
    } else if (currentHour > time) {
        $(".input").addClass("past")
    } else
        $("input").addClass("future") 
}   
