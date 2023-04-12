export default function slider() {
	const allSlides = document.querySelectorAll('.offer__slide'),
		prev = document.querySelector('.offer__slider-prev'),
		next = document.querySelector('.offer__slider-next'),
		current = document.querySelector('#current'),
		total = document.querySelector('#total'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width,
		allSlider = document.querySelector('.offer__slider')

	let indexOfSlide = 1,
		offset = 0

	currentIndexOFSlide(allSlides)

	slidesField.style.cssText = `
    display: flex;
    transition: 0.5s all;
    width: ${100 * allSlides.length}%;
`

	slidesWrapper.style.overflow = 'hidden'

	allSlides.forEach(item => {
		item.style.width = width
	})

	allSlider.style.position = 'relative'
	const indicator = document.createElement('ol'),
		dots = []

	indicator.classList.add('carousel-indicators')
	allSlider.append(indicator)

	for (let i = 0; i < allSlides.length; i++) {
		const dot = document.createElement('li')
		dot.setAttribute('data-slide-to', i + 1)
		dot.classList.add('dot')
		if (i == 0) {
			dot.style.opacity = 1
		}
		indicator.append(dot)
		dots.push(dot)
	}

	next.addEventListener('click', () => {
		if (offset === takeDigital(width) * (allSlides.length - 1)) {
			offset = 0
		} else {
			offset += takeDigital(width)
		}

		slidesField.style.transform = `translateX(-${offset}px)`
		if (indexOfSlide == allSlides.length) {
			indexOfSlide = 1
		} else {
			indexOfSlide++
		}

		currentIndexOFSlide(allSlides)

		dotActive(dots)
	})

	prev.addEventListener('click', () => {
		if (offset === 0) {
			offset = takeDigital(width) * (allSlides.length - 1)
		} else {
			offset -= takeDigital(width)
		}

		slidesField.style.transform = `translateX(-${offset}px)`
		if (indexOfSlide == 1) {
			indexOfSlide = allSlides.length
		} else {
			indexOfSlide--
		}

		currentIndexOFSlide(allSlides)
		dotActive(dots)
	})

	dots.forEach(dot => {
		dot.addEventListener('click', e => {
			const slideTo = e.target.getAttribute('data-slide-to')

			indexOfSlide = slideTo

			offset = takeDigital(width) * (slideTo - 1)
			slidesField.style.transform = `translateX(-${offset}px)`
			dotActive(dots)
			currentIndexOFSlide(allSlides)
		})
	})

	function takeDigital(str) {
		return +str.replace(/\D/g, '')
	}

	function dotActive(allDots) {
		allDots.forEach(dot => (dot.style.opacity = '0.5'))
		allDots[indexOfSlide - 1].style.opacity = 1
	}

	function currentIndexOFSlide(slides) {
		if (slides.length < 10) {
			total.textContent = `0${slides.length}`
			current.textContent = `0${indexOfSlide}`
		} else {
			total.textContent = allSlides.length
			current.textContent = indexOfSlide
		}
	}
}
