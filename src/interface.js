$(document).ready(function() {

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
    })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=364437e7dad2810aac4e10f7a7e33da1';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up(1);
    updateTemperature();
  });
  $('#down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });
  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powerSave').click(function() {
    thermostat.switchPowerSave();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#energyUsage').attr('class', thermostat.energyUsage());
    $('#energyUsage').text(thermostat.energyUsage());
    $('#powerSaveStatus').text(thermostat.powerSaveStatus());
  }
})
