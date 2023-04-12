export function openModal(modalDialog, modalTimerId) {
	const modal = document.querySelector(modalDialog)
	modal.classList.remove('hide')
	modal.classList.add('show')
	document.body.style.overflow = 'hidden'
	clearInterval(modalTimerId)
}

export function closeModal(modalDialog) {
	const modal = document.querySelector(modalDialog)
	modal.classList.remove('show')
	modal.classList.add('hide')
	document.body.style.overflow = ''
}

export default function modal(triggerModal, triggerButtons, modalTimerId) {
	const modal = document.querySelector(triggerModal)
	const modalOpenButtons = document.querySelectorAll(triggerButtons)

	modalOpenButtons.forEach(button => {
		button.addEventListener('click', () => {
			openModal(triggerModal, modalTimerId)
		})
	})

	document.addEventListener('keydown', event => {
		if (event.code === 'Escape') {
			closeModal(triggerModal)
		}
	})

	modal.addEventListener('click', event => {
		if (event.target === modal || event.target.hasAttribute('data-close')) {
			closeModal(triggerModal)
		}
	})

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
			openModal(triggerModal, modalTimerId)
			document.removeEventListener('scroll', showModalByScroll)
		}
	}
}
