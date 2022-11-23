

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
// var output = []
// function submit () {
//     console.log(this)
//     var input = document.querySelector(".userText").value
//     // var output = JSON.parse(localStorage.getItem("output"))
//     output.push(input)
//     console.log(`${input}`)
//     console.log(input)
//     localStorage.setItem("output", JSON.stringify(output))
//     document.querySelector(".userText").value = ''
//     // document.getElementById("saveData").innerHTML = localStorage.getItem("userText")

// }
// var userText = $((this)('input').val()) 
$('.saveBtn').click(function(e) {
    console.log($(this).siblings('input').val())
    var userText = $(this).siblings('input').val()
    var timeEl = $(this).siblings('span').attr('id')
    localStorage.setItem(timeEl, userText)

})
//localstorage.getitem

// document.getElementById("saveData").innerHTML = localStorage.getItem("userText")

//24 hour variable 
moment(currentHour).format("HHmm");
var currentHour = moment();

    

// display different classes based on the time
// make an array for each hour? 
var colorChange = function() {
    var currentHour = moment().format('H')
    var time = $(".hour")
    time.forEach( () => {

    })
  
    if (currentHour === time) {
        $(".hour").addClass("present")
    } else if (currentHour > time) {
        $(".hour").addClass("past")
    } else
        $("hour").addClass("future") 
}   
