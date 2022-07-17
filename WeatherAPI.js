

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=138b907a723a21efbe9fdd2a40df88da", function(data){
console.log(data);

var icon="http://openweathermap.org/img/w/" + dataweather[0].icon + ".png";
var temp=Math.floor(data.man.temp);
var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$(".weather").append(weather);
$(".temp").append(temp);

}
);