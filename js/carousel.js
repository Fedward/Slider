const carousel = {
	visibleItems: 3, // кол-во элементов слайдера на экране, задает пользователь
	totalItems: [],
	setItemWidth: function () {
		for (let i = 0; i < this.totalItems.length; i++) {
			this.totalItems[i].setAttribute("style", "width: " + itemWidth + "%");
		};		
	}
}

let next, 
	prev, 
	scroll, 
	stepLength, 
	itemWidth = Math.round(1 / carousel.visibleItems * 100),
	currentStep = 0;

window.onload = function() {
	next = document.getElementById("next");
	prev = document.getElementById("prev");
	scroll = document.getElementById("scroll");
	carousel.totalItems = document.getElementsByClassName("item");
	carousel.setItemWidth();
	stepLength = scroll.clientWidth / carousel.visibleItems;

	next.onclick = function () {
		if (currentStep >= (carousel.totalItems.length - carousel.visibleItems)) {			
			currentStep = 0;
			makeStep();			
		} else {
			currentStep++;
			makeStep();
		}
	}

	prev.onclick = function () {
		if (currentStep == 0) {
			currentStep = carousel.totalItems.length - carousel.visibleItems;
			makeStep();
		} else {
			currentStep--;
			makeStep();
		}				
	}
}

window.onresize = function () {
	stepLength = scroll.clientWidth / carousel.visibleItems;
	makeStep();
}

function makeStep () {
	// по идее здесь можно добавить префиксы для transform	
	scroll.setAttribute("style", "transform: translate(-" + stepLength * currentStep + "px, 0);");
}