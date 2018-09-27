const slider = {
	items: 3, // кол-во элементов слайдера на экране, задает пользователь
	everyItems: []
}

var next, 
	prev, 
	scroll, 
	scrollStep, 
	itemWidth = Math.floor(1 / slider.items * 100),
	steps = 0;

function makeStep () {
	// по идее здесь еще должна быть куча префиксов для transform	
	scroll.setAttribute("style", "transform: translate(-" + scrollStep * steps + "px, 0);");
}

function setItemWidth () {
	for (var i = 0; i < slider.everyItems.length; i++) {
		slider.everyItems[i].setAttribute("style", "width: " + itemWidth + "%");
	};
}	

window.onload = function() {
	next = document.getElementById("next");
	prev = document.getElementById("prev");
	scroll = document.getElementById("scroll");
	slider.everyItems = document.getElementsByClassName("item");
	setItemWidth();
	scrollStep = scroll.clientWidth / slider.items;
	next.onclick = function () {
		if (steps >= (slider.everyItems.length - slider.items)) {			
			steps = 0;
			makeStep();			
		} else {
			steps++;
			makeStep();
		}
	}
	prev.onclick = function () {
		if (steps == 0) {
			steps = slider.everyItems.length - slider.items;
			makeStep();
		} else {
			steps--;
			makeStep();
		}				
	}
}

window.onresize = function () {
	scrollStep = scroll.clientWidth / slider.items;
	makeStep();
}
