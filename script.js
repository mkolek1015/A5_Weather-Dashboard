$(document).ready(function () {
    let test = true;
    // use personal key inorder to get forecast data
    const apiKey = "bf6e0a838d371900959c489db9d941c4";
    let url = 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={bf6e0a838d371900959c489db9d941c4}';
    let requestType = ""; 
    let query ="";
    //


}

// use JavaScript Date to display current date in a div (#displayJsDate)
var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sDay = NowDate.getDate();
var sMonth = NowDate.getMonth() + 1;
var sYear = NowDate.getFullYear();
var eDisplayDate = document.getElementById('displayJsDate');
eDisplayDate.innerHTML = sYear+'-'+sMonth+'-'+sDay;

// current date
var Date = moment();

// add 1 days to current date
document.getElementById('currDatePlus1d').innerHTML = Date.add('days', 1);
// add 2 days to current date
document.getElementById('currDatePlus2d').innerHTML = Date.add('days', 2);
// add 3 days to current date
document.getElementById('currDatePlus3d').innerHTML = Date.add('days', 3);
// add 4 days to current date
document.getElementById('currDatePlus4d').innerHTML = Date.add('days', 4);
// add 5 days to current date
document.getElementById('currDatePlus5d').innerHTML = Date.add('days', 5);
// add 6 days to current date
document.getElementById('currDatePlus6d').innerHTML = Date.add('days', 6);
// add 7 days to current date
document.getElementById('currDatePlus7d').innerHTML = Date.add('days', 7);


$("#navbar-subtitle").text("Today is " + moment().format('MMMM Do YYYY'));

$(api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={bf6e0a838d371900959c489db9d941c4})


