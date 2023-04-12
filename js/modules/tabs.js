function tabs() {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index = 0) {
		tabContent[index].classList.add('show', 'fade')
		tabContent[index].classList.remove('hide')

		tabs[index].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			hideTabContent()
			tabs.forEach((item, index) => {
				if (target == item) {
					showTabContent(index)
				}
			})
		}
	})
}

module.exports = tabs
