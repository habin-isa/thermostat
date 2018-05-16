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
});
