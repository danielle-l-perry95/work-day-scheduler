

// moment(currentTime).format("hh:mm");
// var currentTime = moment();
//     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
//display current day on webpage
var currentDay = moment()
$('#currentDay').text(currentDay.format('dddd, MMMM Do YYYY, h:mm:ss a'))


// on save btn click create local storage. Get help from tutor here
var saveBtn = $('.saveBtn')
var userText = $('#userText').value
var userStorage = localStorage.setItem("userText", userText)
userText.textcontent = userStorage

$('.saveBtn').click(function(e) {
    e.preventDefault
    userText.textcontent = userStorage
    localStorage.getItem("userText", userStorage)
})


// display different colors based on the time
var classStyle = $('form-control')
var colorChange = function() {
    var currentHour = moment().format('H')
    var time = $('#09')
//     for ( i=0; i < time.length; i++) {
// }
    if (currentHour === time) {
        classStyle.addClass("present")
    } else if (currentHour > time) {
        classStyle.addClass("past")
    } else
        classStyle.addClass("future") 
}   