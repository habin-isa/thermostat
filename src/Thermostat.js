const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
  this.isPowerSaveOn = true
};

Thermostat.prototype.up = function(num) {
  if(this.temperature + num > this.maxTemperature()) {
    throw("Maximum temperature would be exceeded!")
  } else {
  this.temperature += num
  }
};

Thermostat.prototype.down = function(num) {
  if ((this.temperature - num) < MINIMUM_TEMPERATURE) {
    throw("Minimum temperature is 10")
  } else {
  this.temperature -= num
  }
};

Thermostat.prototype.powerSaveOn = function() {
  this.isPowerSaveOn = true
  if (this.temperature > this.maxTemperature()) {
    this.temperature = this.maxTemperature();
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.isPowerSaveOn = false
};

Thermostat.prototype.maxTemperature = function() {
  if (this.isPowerSaveOn  === true) {
    return 25;
  } else {
    return 32;
  }
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.usage = function() {
  if(this.temperature < 18){
    return 'low usage';
  } else if (this.temperature >= 18 && this.temperature <= 25) {
    return 'medium usage';
  } else {
    return 'high usage';
  };
};
