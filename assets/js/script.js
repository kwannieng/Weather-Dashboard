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
let todayDiv = $("<div>")
let searchCity = $("<h2>").text(city +" (" + todayDate +")")
let tempC = response.list[0].main.temp - 273.15;
let todayTemp = $("<p>").text("Temperature: " + tempC.toFixed(2) + "°C" )
let todayWind = $("<p>").text("Wind Speed: " + response.list[0].wind.speed + "meter/sec")
let todayHumidty = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%")

  $("#today").css("border","solid 1px")
  $("#today").css("padding","5px")
  $("#today").append(todayDiv)
  todayDiv.append(searchCity)
  todayDiv.append(todayTemp)
  todayDiv.append(todayWind)
  todayDiv.append(todayHumidty)


//Get 5-Day Forecast:
let forecastDiv = $("<div>")
let forecastheading = $("<h4>").text("5-Day Forecst:")
$("#forecast").append(forecastDiv)
forecastDiv.append(forecastheading)

let days = [firstDay, secondDay, thirdDay, forthDay, fifthDay]

let firstDay = $("<section>").addClass("day-1 mt-2")
let secondDay = $("<section>").addClass("day-2 mt-2")
let thirdDay = $("<section>").addClass("day-3 mt-2")
let forthDay = $("<section>").addClass("day-4 mt-2")
let fifthDay = $("<section>").addClass("day-5 mt-2")


$("#today").css("border","solid 1px")
$("#today").css("padding","5px")
$("#today").append(todayDiv)
forecastDiv.append(searchCity)
forecastDiv.append(todayTemp)
forecastDiv.append(todayWind)
forecastDiv.append(todayHumidty)


for (i=0; i<days.length; i++){
  days[i] = $("<section>").css("background-color", "dark-blue");
  $("#forecast").append(day[i])

  $("#today").append(todayDiv)
  todayDiv.append(searchCity)
  todayDiv.append(forecastTemp)
  todayDiv.append(forecastWind)
  todayDiv.append(forecastHumidty)


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