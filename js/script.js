window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs'),
		modal = require('./modules/modal'),
		cards = require('./modules/cards'),
		forms = require('./modules/forms'),
		calculator = require('./modules/calculator'),
		slider = require('./modules/slider'),
		timer = require('./modules/timer')

	tabs()
	modal()
	cards()
	forms()
	calculator()
	slider()
	timer()
})
