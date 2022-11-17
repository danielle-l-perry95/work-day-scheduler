

//Found on stack overflow, how to get current time in hours and minutes 
moment(currentTime).format("hh:mm");
var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


//some thoughts if x<current time display .past, if x=present display .present,
// if x>currentTime display.future