

//display current day on webpage
var currentDay = moment()
$('#currentDay').text(currentDay.format('dddd, MMMM Do YYYY, h:mm:ss a'))


//Save input to local storage
$('.saveBtn').click(function(e) {
    e.preventDefault()
    console.log($(this).siblings('input').val())
    var userText = $(this).siblings('input').val()
    var timeEl = $(this).siblings('span').attr('id')
    localStorage.setItem(timeEl, userText)
    // help with tutor on this part 
    // var output = JSON.parse(localStorage.getItem(timeEl, userText))
    // if (output !== null) {
    //     console.log(userText)
    //     document.querySelector(".userText").innerHTML = userText
    // }

})


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
