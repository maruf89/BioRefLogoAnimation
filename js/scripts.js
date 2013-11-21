
/**
 * A shorthand query function
 * @param  {String} selector an element target
 * @return {DOM Element}
*/


(function() {
  var all, container, pieces, q, spinners;

  q = function(selector) {
    return document.querySelector(selector);
  };

  container = q('.animation');

  /**
   * Store all the pieces in one place
   * @type {Object}
  */


  pieces = {
    spinningCoin: q('.spinningCoin'),
    dna: q('.dna'),
    bLetter: q('.bLetter'),
    rLetter: q('.rLetter'),
    square: q('.square'),
    type: q('.type'),
    backgronud: q('.background')
  };

  /**
   * Everything but the background, will be used to fadeout
   * @type {Array}
  */


  all = [pieces.spinningCoin, pieces.dna, pieces.bLetter, pieces.rLetter, pieces.square, pieces.type];

  /**
   * Match up the initial spinners
   * @type {Array}
  */


  spinners = [pieces.spinningCoin, pieces.dna];

  /**
   * Initiate the animation by adding a start class to the animation container
  */


  container.setAttribute('class', 'animation start');

  setTimeout(function() {
    var spinner, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = spinners.length; _i < _len; _i++) {
      spinner = spinners[_i];
      _results.push(spinner.setAttribute('data-spin', 'true'));
    }
    return _results;
  }, 2000);

  setTimeout(function() {
    return pieces.rLetter.setAttribute('data-appear', 'true');
  }, 4000);

  setTimeout(function() {
    return container.setAttribute('data-fade', 'true');
  }, 6000);

}).call(this);
