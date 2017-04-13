const MIN_TEMP = 10;
const MAX_TEMP_POWER_SAVE_ON = 25;
const MAX_TEMP_POWER_SAVE_OFF = 32;

var Thermostat = function(){
  this.temp = 20;
  this.powerSave = true;
}

Thermostat.prototype.displayTemp = function() {
  return this.temp;
};

Thermostat.prototype.maxTemp = function(){
  return this.maxTemp;
};

Thermostat.prototype.powerSave = function(){
  return this.powerSave;
};

Thermostat.prototype.switchPowerSave = function(){
  this.powerSave ? (this.powerSave = false) : (this.powerSave = true);
};

Thermostat.prototype.up = function(degree) {
  var maxTemp = this.powerSave ? MAX_TEMP_POWER_SAVE_ON : MAX_TEMP_POWER_SAVE_OFF;
  (this.temp + degree <= maxTemp) ? (this.temp += degree) : (this.temp = maxTemp);
};

Thermostat.prototype.down = function(degree){
  if (this.temp - degree >= MIN_TEMP) {
    this.temp -= degree;
  } else {
    this.temp = MIN_TEMP;
  }

};
Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18) {
    return 'low-usage';
  } else if (this.temp < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
    }
};

Thermostat.prototype.powerSaveStatus = function() {
  if (this.powerSave === true) {
    return "Power save is on";
  } else {
    return "Power save is off";
  }
};
