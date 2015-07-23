//Ant Entity
var pos
function Ant (two, name, res) {
  this.t   = two;
  this.res = res;
  this.pos = {
    x: 0,
    y: 0
  };
  this.name = name;
}

Ant.prototype.spawn = function (x, y) {
  this.pos.x = x;
  this.pos.y = y;
};

Ant.prototype.say = function (text) {
  // todo draw  text under ant....
  console.log (this.name + ': ' + text);
};

Ant.prototype.draw = function () {
  //TODO two.drawCirlce ....
  // this.pos = center of gravity of ant
  var x = this.pos.x;
  var y = this.pos.y;
  var ant    = this.t.interpret (this.res.documentElement);
  ant.translation.set (x, y);
  ant.scale = 0.3;
  this.t.bind('update', function () {
  });
};

module.exports = Ant;
