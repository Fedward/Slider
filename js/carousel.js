document.addEventListener("DOMContentLoaded", function() {
	'use strict';
	let carousel = {
		visibleItems: 3, // кол-во элементов слайдера на экране, задает пользователь
		totalItems: document.getElementsByClassName("item"),
		wrapper: document.getElementById("carousel-wrapper"),
		next: document.getElementById("carousel-next"),
		prev: document.getElementById("carousel-prev"),	
		stepLength: 0,
		currentStep: 0,
		setWrapperWidth: function () {
			this.wrapper.style.width = `${this.wrapper.clientWidth / this.visibleItems * this.totalItems.length}px`;
		},
		calcStepLength: function () {
			this.stepLength = this.wrapper.clientWidth / this.visibleItems;
		},
		makeStep: function () {
			this.wrapper.style.transform = `translate(-${ this.stepLength * this.currentStep }px, 0)`;
		}
	}
	
	carousel.setWrapperWidth();
	carousel.calcStepLength();

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

	window.onresize = () => {
		carousel.calcStepLength();
		carousel.makeStep();
	}
});