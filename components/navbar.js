class Dropdown {
	constructor(element) {
		this.element = element;

		this.button = this.element.querySelector(".nav-items-mobile-menu");

		this.content = this.element.querySelector(".nav-items-container");

		this.button.addEventListener("click", () => this.toggleContent());
	}

	toggleContent() {
		this.content.classList.toggle("rollout-mobile-show");
	}
}

const navbar = document.querySelectorAll(".nav-container");
navbar.forEach(nav => new Dropdown(nav));
