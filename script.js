

//display current day on webpage
var currentDay = moment()
$('#currentDay').text(currentDay.format('dddd, MMMM Do YYYY, h:mm:ss a'))


//Save button on click event 
$('.saveBtn').click(function(e) {
    e.preventDefault()
    console.log($(this).siblings('input').val())
    var userText = $(this).siblings('input').val()
    var timeEl = $(this).siblings('span').attr('id')
    //save to local storage 
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


timeLoop.forEach (function () {
    //return the integer of hour 
    var hourId = parseInt($(this)('span').attr('id'))
    if (currentHour === hourId) {
        $(".hour").removeClass("past")
        $(".hour").removeClass("future")
        $(".hour").addClass("present")
    } else if (currentHour > hourId) {
        $(".hour").removeClass("future")
        $(".hour").removeClass("present")
        $(".hour").addClass("past")
    } else
        $(".hour").removeClass("past")
        $(".hour").removeClass("present")
        $(".hour").addClass("future") 
})
timeLoop()




// display different classes based on the time
// var colorChange = function() {
//     var currentHour = moment().format('H')
//     var time = $(".hour")
//     time.forEach( () => {
//         if (currentHour === time) {
//             $(".hour").removeClass("past")
//             $(".hour").removeClass("future")
//             $(".hour").addClass("present")
//         } else if (currentHour > time) {
//             $(".hour").removeClass("future")
//             $(".hour").removeClass("present")
//             $(".hour").addClass("past")
//         } else
//             $(".hour").removeClass("past")
//             $(".hour").removeClass("present")
//             $(".hour").addClass("future") 
//     })
//     }  
    

   
