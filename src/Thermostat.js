const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
  this.isPowerSaveOn = true
};

Thermostat.prototype.up = function(num) {
  this.temperature += num
};

Thermostat.prototype.down = function(num) {
  if ((this.temperature - num) < MINIMUM_TEMPERATURE) {
    throw("Minimum temperature is 10")
  } else {
  this.temperature -= num
  }
};

Thermostat.prototype.powerSaveModeOn = function() {
  this.isPowerSaveOn = true
};

Thermostat.prototype.powerSaveModeOff = function() {
  this.isPowerSaveOn = false
};

Thermostat.prototype.maxTemperature = function() {
  if (this.isPowerSaveOn  === true) {
    return 25;
  } else {
    return 32;
  }
}
