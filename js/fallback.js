(function() {
  var all, background, pieces, set, shrink;

  pieces = $('.piece');

  background = $('.background');

  all = $.merge(pieces, background);

  $.each(all.empty(), function() {
    var $this, imgClass, src;
    $this = $(this);
    imgClass = $this[0].getAttribute('class').replace(/(piece\s)?/, '');
    src = "/images/fallback/" + imgClass + ".png";
    return $this.append("<img src='" + src + "' imgClass='" + imgClass + "Img'>");
  });

  shrink = {
    width: '100%',
    margin: '0% 0 0 0%',
    opacity: 1
  };

  set = 0;

  setTimeout(function() {
    return $('.bLetter img').animate(shrink, 1000, function() {
      return $('.rLetter img').animate(shrink, 1000, function() {
        return setTimeout(function() {
          return $('.type, .dna').children().animate({
            opacity: 1
          }, 800, function() {
            if (!set++) {
              return false;
            }
            setTimeout(function() {
              return background.children().animate({
                opacity: 1
              }, 1150);
            }, 800);
            return setTimeout(function() {
              return pieces.children().animate({
                opacity: 0
              }, 2000);
            }, 400);
          });
        }, 400);
      });
    });
  }, 1000);

}).call(this);
