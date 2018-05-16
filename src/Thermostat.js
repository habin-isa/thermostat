const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
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
