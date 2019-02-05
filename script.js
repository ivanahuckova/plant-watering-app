//Function to make navbar white when scrolling
const navBar = document.querySelector(".nav-container");
window.onscroll = function() {
	"use strict";
	if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
		navBar.classList.add("navbar-scroll");
	} else {
		navBar.classList.remove("navbar-scroll");
	}
};

//Function/Event Listener to make item follow the mouse moves
const _el = document.getElementById("mouse-move-item");
window.addEventListener("mousemove", followMouse);
function followMouse() {
	_el.style.top = event.pageY + 20 + "px";
	_el.style.left = event.pageX + 20 + "px";
}

//Function to change color of logo when clicked
const logo = document.getElementById("logo");
logo.addEventListener("click", function() {
	logo.classList.add("animation-class");
	setTimeout(function() {
		logo.classList.remove("animation-class");
	}, 3000);
});

//Adding hover animation to each button
document.querySelectorAll("button").forEach(b => {
	b.addEventListener("mouseover", function() {
		b.classList.add("hvr-grow");
	});
});

//Main navbar item - chanig color when mouse over and mouse leave
const mainNavItem = document.getElementById("main-nav-item");
mainNavItem.addEventListener("mouseover", function() {
	mainNavItem.classList.add("main-nav-item-reverse");
});

mainNavItem.addEventListener("mouseleave", function() {
	mainNavItem.classList.remove("main-nav-item-reverse");
});

//Plant animation
const plantImg = document.getElementById("plant-img");
plantImg.addEventListener("click", function() {
	TweenMax.to("#plant-img", 2.5, { top: -50, repeat: 1, yoyo: true, scale: "2.5" });
});
