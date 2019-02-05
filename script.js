const navBar = document.querySelector(".nav-container");

window.onscroll = function() {
	"use strict";
	if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
		navBar.classList.add("navbar-scroll");
	} else {
		navBar.classList.remove("navbar-scroll");
	}
};
