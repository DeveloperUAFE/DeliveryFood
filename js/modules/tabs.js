export default function tabs(
	tabsSelector,
	tabsContentSelector,
	tabsParentSelector,
	activeClass
) {
	const tabs = document.querySelectorAll(tabsSelector),
		tabContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector)

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach(tab => {
			tab.classList.remove(activeClass)
		})
	}

	function showTabContent(index = 0) {
		tabContent[index].classList.add('show', 'fade')
		tabContent[index].classList.remove('hide')

		tabs[index].classList.add(activeClass)
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			hideTabContent()
			tabs.forEach((item, index) => {
				if (target == item) {
					showTabContent(index)
				}
			})
		}
	})
}
