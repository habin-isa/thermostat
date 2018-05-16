beforeEach(function() {
  thermostat = new Thermostat();
});

describe('Thermostat', function() {
  it('should return 20 degrees when created', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});

describe('up', function() {
  it('should increase the temperate by 5', function() {
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });
});

describe('down', function() {
  it('should decrease the temerature by 5', function() {
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('should throw error if temperature would go below 10', function() {
    expect(function() { thermostat.down(11); } ).toThrow("Minimum temperature is 10")
  });
});

describe('power saving mode on', function() {
  it('should show a maximum temperature of 25 degrees', function() {
    expect(thermostat.maxTemperature()).toEqual(25);
  });

  it('should return true by default', function() {
    expect(thermostat.isPowerSaveOn).toEqual(true)
  });
});

describe('power saving mode off', function() {
  it('should show a maximum temperature of 32 degrees', function() {
    thermostat.powerSaveModeOff();
    expect(thermostat.maxTemperature()).toEqual(32);
  });

  it('should return false', function() {
    thermostat.powerSaveModeOff();
    expect(thermostat.isPowerSaveOn).toEqual(false);
  });
});

describe('reset temperature', function() {
  it('resets the temperature to 20', function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });
});

describe('energy usage', function(){
  it('should state low usage if temperature is less than 18 degrees', function() {
    thermostat.down(3);
    expect(thermostat.usage()).toEqual('low usage');
  });

  it('should state medium usage if temperature is between 17 and 26', function() {
    expect(thermostat.usage()).toEqual('medium usage');
  });
});
