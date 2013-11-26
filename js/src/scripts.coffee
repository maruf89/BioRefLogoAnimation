###*
 * A shorthand query function
 * @param  {String} selector an element target
 * @return {DOM Element}
###
q = (selector) ->
    document.querySelector(selector)

container = q('.animation')

###*
 * Store all the pieces in one place
 * @type {Object}
###
pieces =
    spinningCoin: q('.spinningCoin')
    dna: q('.dna')
    bLetter: q('.bLetter')
    rLetter: q('.rLetter')
    square: q('.square')
    type: q('.type')
    backgronud: q('.background')

###*
 * Everything but the background, will be used to fadeout
 * @type {Array}
###
all = [
    pieces.spinningCoin
    pieces.dna
    pieces.bLetter
    pieces.rLetter
    pieces.square
    pieces.type
]

###*
 * Match up the initial spinners
 * @type {Array}
###
spinners = [pieces.spinningCoin, pieces.dna]

###*
 * Initiate the animation by adding a start class to the animation container
###
container.setAttribute('class', 'animation start')

setTimeout ->
    pieces.rLetter.setAttribute('data-appear', 'true')
, 1150

setTimeout ->
    container.setAttribute('data-fade', 'true')
, 4000