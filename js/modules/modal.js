function modal() {
	const modal = document.querySelector('.modal')
	const modalDialog = document.querySelector('.modal__dialog')
	const modalOpenButtons = document.querySelectorAll('[data-modal]')
	let isModalOpen = false

	modalOpenButtons.forEach(button => {
		button.addEventListener('click', () => {
			openModal(modal, modalDialog)
		})
	})

	document.addEventListener('keydown', event => {
		if (event.code === 'Escape') {
			closeModal(modal, modalDialog)
		}
	})

	modal.addEventListener('click', event => {
		if (event.target === modal || event.target.hasAttribute('data-close')) {
			closeModal(modal, modalDialog)
		}
	})

	function openModal(blackScreen, dialog) {
		blackScreen.classList.add('show')
		dialog.classList.add('show')
		document.body.style.overflow = 'hidden'
		isModalOpen = true
		clearInterval(modalTimerId)
	}

	function closeModal(blackScreen, dialog) {
		blackScreen.classList.remove('show')
		dialog.classList.remove('show')
		isModalOpen = false
		document.body.style.overflow = ''
	}

	const modalTimerId = setTimeout(() => {
		openModal(modal, modalDialog)
	}, 50000)

	document.addEventListener('scroll', () => {
		showModalByScroll()
	})

	function showModalByScroll() {
		if (
			scrollY >=
			document.documentElement.scrollHeight -
				document.documentElement.clientHeight -
				2
		) {
			openModal(modal, modalDialog)
			document.removeEventListener('scroll', showModalByScroll)
		}
	}
}

module.exports = modal
