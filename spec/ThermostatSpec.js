describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  describe('Temp increases', function() {
    it('by one degree', function() {
      thermostat.up(1);
      expect(thermostat.temp).toEqual(21)
    });
    it('to no higher than 25 degrees, when powerSave is on', function() {
      thermostat.up(45);
      expect(thermostat.temp).toEqual(25);
    });
    it('to no higher than 32 degress, when powerSave is off', function(){
      thermostat.switchPowerSave();
      thermostat.up(80);
      expect(thermostat.temp).toEqual(32);
    });
  });

  describe('Temp decreases', function(){
    it('by seven degrees', function(){
      thermostat.down(7);
      expect(thermostat.temp).toEqual(13);
    });
    it('to no lower than 10 degrees', function() {
      thermostat.down(99999)
      expect(thermostat.temp).toEqual(10)
    });
  });

  describe('powersave', function(){
    it('is on by default', function(){
      expect(thermostat.powerSave).toBeTruthy();
    });
  });

  describe('reset temp', function() {
    it('to 20 degrees', function() {
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('energy usage', function() {
    it('is low', function() {
      thermostat.down(5);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('is medium', function(){
      thermostat.up(4);
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('is high', function(){
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

});
