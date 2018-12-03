document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	let carouselInit = document.getElementById("carousel-init");
		carouselInit.addEventListener("click", initCarousel);
});

function initCarousel() {
	'use strict';
	let carousel = {
		carouselBlock: document.getElementById("carousel"),
		wrapper: document.getElementById("carousel-wrapper"),		
		visibleItems: 3, // кол-во элементов слайдера на экране, задает пользователь
		totalItems: document.getElementsByClassName("item"),
		next: document.getElementById("carousel-next"),
		prev: document.getElementById("carousel-prev"),	
		stepLength: 0,
		currentStep: 0,
		calcAllParameters: function () {
			let itemWidth = 1 / this.visibleItems * 100;
			for (let i = 0; i < this.totalItems.length; i++) {
				this.totalItems[i].style.width = itemWidth + "%";
			};
			this.wrapper.style.width = `${this.carouselBlock.clientWidth / this.visibleItems * this.totalItems.length}px`;
			this.stepLength = this.wrapper.clientWidth / this.totalItems.length;
		},
		makeStep: function () {
			this.wrapper.style.transform = `translate(-${ this.stepLength * this.currentStep }px, 0)`;
		},

	}

	carousel.calcAllParameters();

	carousel.next.addEventListener('click', () => {
		if (carousel.currentStep >= (carousel.totalItems.length - carousel.visibleItems)) {			
			carousel.currentStep = 0;
			carousel.makeStep();			
		} else {
			carousel.currentStep++;
			carousel.makeStep();
		}
	});

	carousel.prev.addEventListener('click', () => {
		if (carousel.currentStep == 0) {
			carousel.currentStep = carousel.totalItems.length - carousel.visibleItems;
			carousel.makeStep();
		} else {
			carousel.currentStep--;
			carousel.makeStep();
		}				
	});

	window.addEventListener('resize', () => {
		carousel.calcAllParameters();
		carousel.makeStep();
	});
}