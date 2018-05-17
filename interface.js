$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b870dfe37472019ae416c677bd1a68ab&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

  $('.temperature').text(thermostat.temperature);

  $('#Up').on('click', function() {
    thermostat.up(1);
    $('.temperature').text(thermostat.temperature);
  })

  $('#Down').on('click', function() {
    thermostat.down(1);
    $('.temperature').text(thermostat.temperature);
  })

  $('#PowerSaveOn').on('click', function() {
    thermostat.powerSaveOn();
    $('#powersave').text('ON');
    $('.temperature').text(thermostat.temperature);
  })

  $('#PowerSaveOff').on('click', function() {
    thermostat.powerSaveOff();
    $('#powersave').text('OFF');
  })

  $('#Reset').on('click', function() {
    thermostat.resetTemperature();
    $('.temperature').text(thermostat.temperature);
  })
})
