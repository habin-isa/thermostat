const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function(num) {
  this.temperature += num
}
