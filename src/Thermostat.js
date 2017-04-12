var Thermostat = function(){
  this.temp = 20;
}
Thermostat.prototype.up = function(degree) {
  this.temp += degree;
};

Thermostat.prototype.down = function(degree){
  this.temp -= degree;
};
