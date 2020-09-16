$(document).ready(function () {
    let test = true;
    // use personal key inorder to get forecast data
    const apiKey = "bf6e0a838d371900959c489db9d941c4";
    let url = '"http://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid=bf6e0a838d371900959c489db9d941c4';
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


document.getElementById('todaysDate').innerHTML = moment().format();
// add 1 days to current date
document.getElementById('currDatePlus1d').innerHTML = moment().add('days', 1);
// add 2 days to current date
document.getElementById('currDatePlus2d').innerHTML = moment().add('days', 2);
// add 3 days to current date
document.getElementById('currDatePlus3d').innerHTML = moment().add('days', 3);
// add 4 days to current date
document.getElementById('currDatePlus4d').innerHTML = moment().add('days', 4);
// add 5 days to current date
document.getElementById('currDatePlus5d').innerHTML = moment().add('days', 5);
// add 6 days to current date
document.getElementById('currDatePlus6d').innerHTML = moment().add('days', 6);
// add 7 days to current date
document.getElementById('currDatePlus7d').innerHTML = moment().add('days', 7);

$.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    console.log("uvi",response);
    let bkcolor = "violet";
    
    // if (test) response.value = 7.1234567;
    let uv = parseFloat(response.value);
    console.log("uv",uv)
    console.log("type of uv",typeof uv);
    if (uv < 3) { 
      bkcolor = 'green';
    } else if (uv < 6) { 
      bkcolor = 'yellow';
    } else if (uv < 8) { 
      bkcolor = 'orange';
    } else if (uv < 11) { 
      bkcolor = 'red';
    }
    let title = '<span>UV Index: </span>';
    let color = title + `<span style="background-color: ${bkcolor}; padding: 0 7px 0 7px;">${response.value}</span>`;
    $('#curUv').html(color);
  }); 

  



});

