

//Found on stack overflow, how to get current time in hours and minutes 
moment(currentTime).format("hh:mm");
var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
//display current day on webpage
var currentDay = moment()
$('#currentDay').text(currentDay.format('dddd, MMMM Do YYYY, h:mm:ss a'))

//some thoughts if x<current time display .past, if x=present display .present,
// if x>currentTime display.future

// on save btn click create local storage. Get help from tutor here
var saveBtn = $('.saveBtn')
var userText = $('#userText').value
var userStorage = localStorage.getItem("userText")
userText.textcontent = userStorage

$('.saveBtn').click(function(e) {
    e.preventDefault
    userText.textcontent = userStorage
    localStorage.setItem("userText",userStorage)
})

// display different colors based on the time
//This is currently stack overflow code. Will change once learn moment js in class
// var findTime = function() {
//     var currentTime = moment().format('H')
//     var timeEl = $('#userText')
//     for (var i=0; i < timeEl.length; i++) {
//         var elementID = timeEl[i].id
//         var manipID = document.getElementById(timeEl[i].id)
//         if (elementID < currentTime) {
//             $(manipID).addClass("past")
//     }else if (elementID > currentTime){
//         $(manipID).addClass("present")
//     }else 
//     $(manipID).addClass("future")
// }
// }
// setInterval(checkTime(), (1000 * 60) * 5);

