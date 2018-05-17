$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#Up').on('click', function() {
    thermostat.up(1);
    $('#temperature').text(thermostat.temperature);
  })

  $('#Down').on('click', function() {
    thermostat.down(1);
    $('#temperature').text(thermostat.temperature);
  })

  $('#PowerSaveOn').on('click', function() {
    thermostat.powerSaveOn();
    $('#powersave').text('ON');
    $('#temperature').text(thermostat.temperature);
  })

  $('#PowerSaveOff').on('click', function() {
    thermostat.powerSaveOff();
    $('#powersave').text('OFF');
  })

  $('#Reset').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  })
})
