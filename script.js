const navBar = document.querySelector(".nav-container");

window.onscroll = function() {
	"use strict";
	if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
		navBar.classList.add("navbar-scroll");
	} else {
		navBar.classList.remove("navbar-scroll");
	}
};

const _el = document.getElementById("mouse-move-item");
window.addEventListener("mousemove", followMouse);
function followMouse() {
	_el.style.top = event.pageY + 20 + "px";
	_el.style.left = event.pageX + 20 + "px";
}
