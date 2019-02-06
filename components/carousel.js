class Carousel {
	constructor(carousel) {
		this.carousel = carousel;
		this.leftBtn = this.carousel.querySelector(".left-button");
		this.rightBtn = this.carousel.querySelector(".right-button");
		this.images = Array.from(document.querySelectorAll(".carousel img"));
		console.log(this.images);
		this.currentIndex = 0;
		this.length = this.images.length;
		this.images[0].classList.add("img-active");
		this.activeImg = this.images[0];
		this.leftBtn.addEventListener("click", () => {
			this.direction = -1;
			this.navigate(this.direction);
		});
		this.rightBtn.addEventListener("click", () => {
			this.direction = 1;
			this.navigate(this.direction);
		});
	}
	navigate(direction) {
		this.activeImg.classList.remove("img-active");
		this.currentIndex += direction;
		if (direction === -1 && this.currentIndex < 0) {
			this.currentIndex = this.length - 1;
		}
		if (direction === 1 && !this.images[this.currentIndex]) {
			this.currentIndex = 0;
		}
		this.activeImg = this.images[this.currentIndex];
		this.activeImg.classList.add("img-active");
	}
}

const carousel = document.querySelectorAll(".carousel");
carousel.forEach(c => {
	return new Carousel(c);
});

console.log(carousel);
