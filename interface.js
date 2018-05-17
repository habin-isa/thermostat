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
})
