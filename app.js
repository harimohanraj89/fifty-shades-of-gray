window.onload = function() {
  console.log('Loaded, bro.');
  var container = document.getElementById('container');
  for (var i = 0, num = calcNumSquares(container); i < num; i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.id = i;
    make(square, aShadeOf(gray()));
    container.appendChild(square);
    square.addEventListener('mouseenter', function(e) {
      make(e.target, aShadeOf(gray()));
    });
  }

  setInterval(function() {
    var randomSquare = document.getElementById(Math.floor(Math.random() * num));
    make(randomSquare, aShadeOf(gray()));
  }, 100);
};

var calcNumSquares = function(container) {
  var width = container.getBoundingClientRect().width;
  var height = container.getBoundingClientRect().height;
  var columns = Math.floor(width/80);
  var rows = Math.floor(height/80);
  return rows * columns;
};

var make = function(square, color) {
  square.style.background = color;
};

var aShadeOf = function(shade) {
  return "rgb(" + shade + ", " + shade + ", " + shade + ")";
};

var gray = function() {
  return Math.floor(Math.random() * 200); // Not too white, now
};
