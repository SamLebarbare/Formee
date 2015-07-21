//CLIENT JS
var    _ = require ('lodash');
var Two  = require ('two.js/build/two.js');
var elem = document.getElementById('rendering');
var params    = {
  fullscreen: true,
  autostart: true
};

var t = new Two (params).appendTo(elem);

t.makeCircle (50,50,50);
