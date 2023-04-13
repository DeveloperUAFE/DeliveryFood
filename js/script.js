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

	tabs(
		'.tabheader__item',
		'.tabcontent',
		'.tabheader__items',
		'tabheader__item_active'
	)
	modal('.modal', '[data-modal]', modalTimerId)
	cards()
	forms('form')
	calculator()
	slider({
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		currentCounter: '#current',
		totalCounter: '#total',
		slide: '.offer__slide',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	})
	timer('.timer', '2023-05-02')
})
