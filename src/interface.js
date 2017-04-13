$(document).ready(function() {
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
