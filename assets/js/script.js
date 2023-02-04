let todayDate = moment().format("DD/MM/YYYY")
let APIKey = "1673070f077419daf583240cb1a971fe";
let city = "London";
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;




$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
      // Log the queryURL
    console.log(queryURL);
      // Log the resulting object
    console.log(response);
      // Log the data in the console as well
    console.log(response.list[0].wind.speed);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);

//Get Today Weather info from API
let dDiv0 = $("<div>")

//create the icon url and get the icon code from api response
let iconCode = response.list[0].weather[0].icon;
let iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
weatherIcon.attr('src', iconURL);
let weatherIcon = $("<img>").attr("src", "").addClass("icon");
let searchCity = $("<h2>").text(city +" (" + todayDate +")")
let tempC = response.list[0].main.temp - 273.15;
let todayTemp = $("<p>").text("Temperature: " + tempC.toFixed(2) + "°C" )
let todayWind = $("<p>").text("Wind Speed: " + response.list[0].wind.speed + "meter/sec")
let todayHumidty = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%")

$("#today").css("border","solid 1px")
$("#today").css("padding","5px")
$("#today").append(dDiv0)
dDiv0.append(searchCity)
dDiv0.append(weatherIcon)
dDiv0.append(todayTemp)
dDiv0.append(todayWind)
dDiv0.append(todayHumidty)

//Get 5-Day Forecast
for (d=0; d<5; d++){
  let forecastDiv = $("<div>")
  $("#forecast").append(forecastDiv)

  let iconCode = response.list[d+1].weather[d+1].icon;
  let iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  weatherIcon.attr('src', iconURL);
  let tempC = response.list[d+1].main.temp - 273.15;
  let todayTemp = $("<p>").text("Temperature: " + tempC.toFixed(2) + "°C" )
  let todayWind = $("<p>").text("Wind Speed: " + response.list[d+1].wind.speed + "meter/sec")
  let todayHumidty = $("<p>").text("Humidity: " + response.list[d+1].main.humidity + "%")


  $("#today").css("border","solid 1px")
  $("#today").css("padding","5px")
  $("#today").append(dDiv[d])
  dDiv[d].append(searchCity)
  dDiv[d].append(weatherIcon)
  dDiv[d].append(todayTemp)
  dDiv[d].append(todayWind)
  dDiv[d].append(todayHumidty)



let forecastheading = $("<h4>").text("5-Day Forecst:")
forecastDiv.append(forecastheading)


let firstDay = $("<div>").addClass("day1 col-md-12 ")
forecastDiv.append(firstDay)
let day1 = $("<h6>").text(moment().day(1).format("DD/MM/YYYY"))
firstDay.append(day1)

firstDay.css("border","solid 1px")
firstDay.css("padding", "5px")


let tempC1 = response.list[1].main.temp - 273.15;
let temp1 = $("<p>").text("Temp: " + tempC1.toFixed(2) + "°C" )
let wind1 = $("<p>").text("Wind: " + response.list[1].wind.speed + "meter/sec");
let humidty1 = $("<p>").text("Humidity: " + response.list[1].main.humidity + "%");

firstDay.append(temp1)
firstDay.append(wind1)
firstDay.append(humidty1)




let secondDay = $("<div>").addClass("day2 col-md-4 ")
forecastDiv.append(secondDay)
let day2 = $("<h6>").text(moment().day(2).format("DD/MM/YYYY"))
secondDay.append(day2)

let thirdDay = $("<div>").addClass("day3 col-md-4 ")
forecastDiv.append(thirdDay)
let day3 = $("<h6>").text(moment().day(3).format("DD/MM/YYYY"))
thirdDay.append(day3)

let forthDay = $("<div>").addClass("day4 col-md-4 ")
forecastDiv.append(forthDay)
let day4 = $("<h6>").text(moment().day(4).format("DD/MM/YYYY"))
forthDay.append(day4)

let fifthDay = $("<div>").addClass("day5 col-md-4 ")
forecastDiv.append(fifthDay)
let day5 = $("<h6>").text(moment().day(5).format("DD/MM/YYYY"))
fifthDay.append(day5)


// $("#today").css("border","solid 1px")
// $("#today").css("padding","5px")
// $("#today").append(todayDiv)
// forecastDiv.append(searchCity)
// forecastDiv.append(todayTemp)
// forecastDiv.append(todayWind)
// forecastDiv.append(todayHumidty)




  // forecastDiv.append(forecastTemp)
  // forecastDiv.append(forecastWind)
  // forecastDiv.append(forecastHumidty)



}

})




// $("#search-button").on("click", function() {

// searchCity.text(`${response.name} ${todayDate}`);
// let searchCity = $("<h2>")


//    // Convert the temp to Celsius
//    
//     console.log(tempC);



//     // Transfer content to HTML


//   })
//   });