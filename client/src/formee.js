//CLIENT JS
var    _ = require ('lodash');
var Two  = require ('two.js/build/two.js');
var Ant  = require ('./entity/ant.js');

var elem = document.getElementById ('rendering');
var params    = {
  fullscreen: true,
  autostart: true
};

var t = new Two (params).appendTo(elem);
var antRes = document.getElementById ('ant.svg');

var demoScene = function (t, antSvg) {
  var player1 = new Ant (t, 'Ficelle', antSvg);
  player1.spawn (100,100);
  player1.draw ();

  var player2 = new Ant (t, 'Bidule', antSvg);
  player2.spawn (300, 300);
  player2.draw ();

  player1.say ('Hello!');
  player2.say ('une connerie!');
};

antRes.addEventListener ('load', function () {
    var antSvg = antRes.contentDocument;
    demoScene (t, antSvg);
}, false);
