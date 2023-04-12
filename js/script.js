import calculator from './modules/calculator'
import cards from './modules/cards'
import forms from './modules/forms'
import modal, { openModal } from './modules/modal'
import slider from './modules/slider'
import tabs from './modules/tabs'
import timer from './modules/timer'

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => openModal('.modal', '.modal__dialog', modalTimerId),
		50000
	)

	tabs()
	modal('.modal', '[data-modal]', modalTimerId)
	cards()
	forms()
	calculator()
	slider()
	timer()
})
