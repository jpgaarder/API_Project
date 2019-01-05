<<<<<<< HEAD

$(document).ready(function () {
    var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
    var stn = "CLN, ALT, IFF, AMB, ATB, AGD, ATH20, SBDU1, UTPLC, UTWLC, ELBUT"
=======
$(document).ready(function () {
    
    var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
    var stn = "CLN, ALT, IFF, AMB, ATB, AGD, ATH20, SBDU1, UTPLC"
>>>>>>> 13ceda0b6b28cf7d9d2422bcf7dca60fda018bd0
    $.getJSON('https://api.synopticdata.com/v2/stations/latest',
        {
            // specify the request parameters here
            stid: stn,
            within: 1440,
            token: tkn
        },
        function (data) {
            console.log(data);
            var stations = data.STATION
            for (var i = 0; i < stations.length; i++) {
<<<<<<< HEAD
                console.log("yoyo");
				var id = stations[i].ID
				var elevation = parseInt(stations[i].ELEVATION);
                card = $("<div>");
                card.addClass("card");
                card.attr("id", id);
                card.attr("style", "width: 12rem;")
                card.append("<h5 class='name'> <strong>Station:</strong> " + stations[i].NAME + " <br> <strong>Elevation:</strong>" + stations[i].ELEVATION + "ft.</h5>");
                if (stations[i].OBSERVATIONS.air_temp_value_1) {
                    var temp = Math.round(stations[i].OBSERVATIONS.air_temp_value_1.value * 9 / 5 + 32);
                    card.append("<h5 class= 'temp'><strong> Air Temp: </strong>"
                        + temp + "&#8457 </h5>")
                }
                if (stations[i].OBSERVATIONS.wind_cardinal_direction_value_1d) {
                    card.append("<h5 class='wind'> <strong>Wind:</strong> " + stations[i].OBSERVATIONS.wind_cardinal_direction_value_1d.value + " ");
                }
                if (stations[i].OBSERVATIONS.wind_speed_value_1) {
                    card.append(Math.round(stations[i].OBSERVATIONS.wind_speed_value_1.value * 2.237) + " mph ");
                }
                if (stations[i].OBSERVATIONS.wind_gust_value_1) {
                    card.append("<strong>Gusting </strong>to " + Math.round(stations[i].OBSERVATIONS.wind_gust_value_1.value * 2.237) +
                        " mph </h5>");
                }
                if (stations[i].OBSERVATIONS.snow_depth_value_1) {
                    card.append("<h5 class='snow-depth'> <strong>Snow Depth:</strong> " + Math.round(stations[i].OBSERVATIONS.snow_depth_value_1.value / 10 * 0.39370) +
						" Inches </h5>");
						card.addClass("snow");
                }
                if (stations[i].OBSERVATIONS.snow_interval_value_1) {
                    card.append("<h5 class='new-snow'> <strong>New Snow Interval:</strong> " + stations[i].OBSERVATIONS.snow_interval_value_1.value +
                        "</h5>");
                }
                if (stations[i].OBSERVATIONS.precip_accum_one_hour_value_1) {
                    card.append("<h5 class='hour-snow'><strong> 1 hour Snow: </strong>" + stations[i].OBSERVATIONS.precip_accum_one_hour_value_1.value + "</h5>");
				}
				if (!stations[i].OBSERVATIONS.snow_depth_value_1) {
					card.addClass("temp-wind");
				}
				if (elevation < 7499) {
					card.addClass("lowElevation");
				}
				if (elevation > 7499 && elevation < 9000) {
					card.addClass("midElevation");
				}
				if (elevation > 8999 && elevation < 10500) {
					card.addClass("highElevation");
				}
				if (elevation > 10499) {
					card.addClass("highestElevation");
				}
				
                $("#stations").append(card);
            }
        }
);
$(".show-snow").on("click", function () {
	$(".temp-wind").hide();
	$(".snow").show();
 });
 $(".show-all").on("click", function () {
	 $(".snow").show();
	 $(".temp-wind").show();
  });
  $(".show-wind").on("click", function () {
	 $(".snow").hide();
	 $(".temp-wind").show();
  });
  $(".show-low").on("click", function () {
    $(".lowElevation").show();
    $(".midElevation").hide();
    $(".highElevation").hide();
    $(".highestElevation").hide();
 });
 $(".show-mid").on("click", function () {
    $(".midElevation").show();
    $(".lowElevation").hide();
    $(".highElevation").hide();
    $(".highestElevation").hide();
  });
  $(".show-high").on("click", function () {
    $(".highElevation").show();
    $(".lowElevation").hide();
    $(".midElevation").hide();
    $(".highestElevation").hide();
  });
  $(".show-highest").on("click", function () {
    $(".highestElevation").show();
    $(".lowElevation").hide();
    $(".midElevation").hide();
    $(".highElevation").hide();
 });





/// USGS Weather
var queryURL = "https://api.weather.gov/gridpoints/TOP/31,80";

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
});
=======
                var id =stations[i].ID 
                var temp = Math.round(stations[i].OBSERVATIONS.air_temp_value_1.value * 9 / 5 + 32);
                if (id === "525") {
                    card = $("<div>")
                    card.addClass("card")
                    card.attr("id", stations[i].ID)
                    card.attr("style", "width: 12rem;")
                    card.append("<h5 class='name'> Station: " + stations[i].NAME + " <br> Elevation: " + stations[i].ELEVATION + "ft. </h5><h5 class= 'temp'> Air Temp: "
                        + temp + "&#8457 </h5><h5 class='snow-depth'> Snow Depth: " + Math.round(stations[i].OBSERVATIONS.snow_depth_value_1.value / 10 * 0.39370) +
                        " Inches </h5><h5 class='new-snow'> New Snow Interval: " + stations[i].OBSERVATIONS.snow_interval_value_1.value +
                        "</h5><h5 class='hour-snow'> 1 hour Snow: " + stations[i].OBSERVATIONS.precip_accum_one_hour_value_1.value + "</h5>");
                        $("#stations").append(card);
                        console.log("wassup");
                }
                else if (id === "524" || id === "526" || id === "528" || id === "531") {
                    card = $("<div>")
                    card.addClass("card")
                    card.attr("id", stations[i].ID)
                    card.attr("style", "width: 12rem;")
                    card.append("<h5 class='name'> Station: " + stations[i].NAME + " <br> Elevation: " + stations[i].ELEVATION + "ft. </h5><h5 class= 'temp'> Air Temp: "
                        + temp + " &#8457 </h5><h5 class='wind'> Wind: " + stations[i].OBSERVATIONS.wind_cardinal_direction_value_1d.value + " " +
                        Math.round(stations[i].OBSERVATIONS.wind_speed_value_1.value * 2.237) + " mph Gusting to " + Math.round(stations[i].OBSERVATIONS.wind_gust_value_1.value * 2.237)  +
                        " mph </h5>");
                        $("#stations").append(card);
                        console.log("wassup");
                }
                else if (id === "1504" || id === "44428" || id === "86136") {
                    card = $("<div>")
                    card.addClass("card")
                    card.attr("id", stations[i].ID)
                    card.attr("style", "width: 12rem;")
                    card.append("<h5 class='name'> Station: " + stations[i].NAME + " <br> Elevation: " + stations[i].ELEVATION + "ft. </h5><h5 class= 'temp'> Air Temp: "
                        + temp + " &#8457 </h5><h5 class='snow-depth'> Snow Depth: " + Math.round(stations[i].OBSERVATIONS.snow_depth_value_1.value / 10 * 0.39370) +
                        " Inches </h5>");
                        $("#stations").append(card);
                        console.log("wassup");
                }
                
                else {console.log("yoyo")
                console.log(stations[i].ID)
            }
                
            }
            // $("#name").html("Station: " + data.STATION[0].NAME + " Elevation: " + data.STATION[0].ELEVATION + "ft.");
            // $("#temp").html("Air Temp: " + data.STATION[0].OBSERVATIONS.air_temp_value_1.value);
            // $("#snow-depth").html("Snow Depth: " + data.STATION[0].OBSERVATIONS.snow_depth_value_1.value);
            // $("#snow-interval").html("New Snow Interval: " + data.STATION[0].OBSERVATIONS.snow_interval_value_1.value);
            // $("#snow-accum-hour").html("1 hour Snow: " + data.STATION[0].OBSERVATIONS.precip_accum_one_hour_value_1.value);
        }
    );
    var queryURL = "https://api.weather.gov/gridpoints/TOP/31,80";
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    });
>>>>>>> 13ceda0b6b28cf7d9d2422bcf7dca60fda018bd0
