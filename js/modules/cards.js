export default function cards() {
	class MenuDescription {
		constructor(
			image,
			alt,
			subtitle,
			itemDescr,
			price,
			parentSelector,
			...classes
		) {
			this.image = image
			this.alt = alt
			this.subtitle = subtitle
			this.itemDescr = itemDescr
			this.price = price
			this.transfer = 27
			this.classes = classes
			this.parent = document.querySelector(parentSelector)
			this.changeToUAH()
		}

		changeToUAH() {
			this.price *= this.transfer
		}

		render() {
			let element = document.createElement('div')
			if (this.classes.length === 0) {
				this.element = 'menu__item'
				element.classList.add(this.element)
			} else {
				this.classes.forEach(className => element.classList.add(className))
			}
			element.innerHTML = `
			<img src=${this.image} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.subtitle}</h3>
			<div class="menu__item-descr">${this.itemDescr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
			`
			this.parent.append(element)
		}
	}

	axios.get('http://localhost:3000/menu').then(data =>
		data.data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuDescription(
				img,
				altimg,
				title,
				descr,
				price,
				'.menu .container'
			).render()
		})
	)
}
