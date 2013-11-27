(function() {
  var all, container, pieces, q, spinners;

  Modernizr.load({
    test: Modernizr.svg,
    nope: ['http://code.jquery.com/jquery-1.8.1.min.js', '/js/fallback.js', '/css/fallback.css']
  });

  /**  Quit early if animations not supported
  */


  if (!Modernizr.svg) {
    return false;
  }

  /**
   * A shorthand query function
   * @param  {String} selector an element target
   * @return {DOM Element}
  */


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
    bLetter: q('.bLeter'),
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


  setTimeout(function() {
    container.setAttribute('class', 'animation start');
    setTimeout(function() {
      return pieces.rLetter.setAttribute('data-appear', 'true');
    }, 1150);
    return setTimeout(function() {
      return container.setAttribute('data-fade', 'true');
    }, 4000);
  }, 10);

}).call(this);
