pieces = $('.piece')
background = $('.background')
all = $.merge(pieces, background)

$.each all.empty(), ->
    $this = $(this)
    imgClass = $this[0].getAttribute('class').replace(/(piece\s)?/, '')
    src = "/images/fallback/#{imgClass}.png"
    $this.append("<img src='#{src}' imgClass='#{imgClass}Img'>")

shrink =
	width: '100%'
	margin: '0% 0 0 0%'
	opacity: 1

set = 0

setTimeout ->
	$('.bLetter img').animate shrink, 1000, ->
		$('.rLetter img').animate shrink, 1000, ->
			setTimeout ->
				$('.type, .dna').children().animate opacity: 1, 800, ->

					if not set++ then return false # makes sure that it doesn't fire on multiple callbacks

					setTimeout ->
						background.children().animate opacity: 1, 1150
					, 800

					setTimeout ->
						pieces.children().animate opacity: 0, 2000
					, 400
			, 400
, 1000