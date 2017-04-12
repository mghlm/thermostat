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
  });

  describe('Temp decreases', function(){
    it('by seven degrees', function(){
      thermostat.down(7);
      expect(thermostat.temp).toEqual(13);
    });
  });


});
