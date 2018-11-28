document.addEventListener("DOMContentLoaded", function() {
	'use strict';
	const carousel = {
		visibleItems: 3, // кол-во элементов слайдера на экране, задает пользователь
		totalItems: document.getElementsByClassName("item"),
		wrapper: document.getElementById("carousel-wrapper"),
		next: document.getElementById("carousel-next"),
		prev: document.getElementById("carousel-prev"),	
		stepLength: document.getElementById("carousel-wrapper").clientWidth / this.visibleItems,
		currentStep: 0		
	}

	carousel.next.onclick = function () {
		if (carousel.currentStep >= (carousel.totalItems.length - carousel.visibleItems)) {			
			carousel.currentStep = 0;
			makeStep();			
		} else {
			carousel.currentStep++;
			makeStep();
		}
	}

	carousel.prev.onclick = function () {
		if (carousel.currentStep == 0) {
			carousel.currentStep = carousel.totalItems.length - carousel.visibleItems;
			makeStep();
		} else {
			carousel.currentStep--;
			makeStep();
		}				
	}

	window.onresize = function () {
		carousel.stepLength = carousel.wrapper.clientWidth / carousel.visibleItems;
		makeStep();
	}

	function makeStep () {
		// по идее здесь можно добавить префиксы для transform	
		carousel.wrapper.style.transform = "translate(-" + carousel.stepLength * carousel.currentStep + "px, 0)";		
	}
});