const MIN_TEMP = 10;
const MAX_TEMP = 25;


var Thermostat = function(){
  this.temp = 20;
  this.powerSave = true;
}

Thermostat.prototype.up = function(degree) {
  if (this.temp + degree <= MAX_TEMP) {
    this.temp += degree;
  } else {
    this.temp = MAX_TEMP;
  }

};

Thermostat.prototype.down = function(degree){
  if (this.temp - degree >= MIN_TEMP) {
    this.temp -= degree;
  } else {
    this.temp = MIN_TEMP;
  }
};
