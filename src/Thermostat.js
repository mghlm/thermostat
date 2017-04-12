var Thermostat = function(){
  this.temp = 20;
}
Thermostat.prototype.up = function(degree) {
  this.temp += degree;
};

Thermostat.prototype.down = function(degree){
  if (this.temp - degree >= 10) {
    this.temp -= degree;
  } else {
    this.temp = 10;
  }
};
