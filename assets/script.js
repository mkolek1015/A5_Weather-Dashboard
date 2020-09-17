$(document).ready(function () {
    let test = true;
    // use personal key inorder to get forecast data
    const apiKey = "bf6e0a838d371900959c489db9d941c4";
    let url = 'https://api.openweathermap.org/data/2.5/';
    let requestType = ""; 
    let query ="";

// use JavaScript Date to display current date in a div (#displayJsDate)
var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sDay = NowDate.getDate();
var sMonth = NowDate.getMonth() + 1;
var sYear = NowDate.getFullYear();
// var eDisplayDate = document.getElementById('displayJsDate');
// console.log  (eDisplayDate)
// eDisplayDate.innerHTML = sYear+'-'+sMonth+'-'+sDay;


document.getElementById('todaysDate').innerHTML = moment().format("MMMM Do YYYY");
// add 1 days to current date
document.getElementById('currDatePlus1d').innerHTML = moment().add(1, 'days').calendar();
// add 2 days to current date
document.getElementById('currDatePlus2d').innerHTML = moment().add(2, 'days').calendar();
// add 3 days to current date
document.getElementById('currDatePlus3d').innerHTML = moment().add(3, 'days').calendar();;
// add 4 days to current date
document.getElementById('currDatePlus4d').innerHTML = moment().add(4, 'days').calendar();
// add 5 days to current date
document.getElementById('currDatePlus5d').innerHTML = moment().add(5, 'days').calendar();
// add 6 days to current date
document.getElementById('currDatePlus6d').innerHTML = moment().add(6, 'days').calendar();
// add 7 days to current date
document.getElementById('currDatePlus7d').innerHTML = moment().add(7, 'days').calendar();


//api call
var urlCurrent = "https://api.openweathermap.org/data/2.5/forecast?q=" + '' + "&Appid=" + apiKey + "&units=imperial"
$.ajax({
    url: urlCurrent,
    method: "GET"
    })
    .then(function (response) {
           //definitely use this for UV!!!!;
        console.log(urlCurrent)
        console.log(response)
         $(".cur").text("Humidity: " + response.list[i].main.humidity);

        })

        weather.id
        weather.icon
        temperature.value
        main.humidity
        main.temp_max
        main.temp_min
        wind.speed
        
});
