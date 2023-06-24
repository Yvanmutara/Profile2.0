/* eslint-disable no-undef */

window.addEventListener('load', function() {
	function toggleHamburgerMenu() {
		var windowSize = document.documentElement.clientWidth;
	
		if (windowSize > 767)
			document.querySelector(".hamburger-icon").classList.toggle("open");
	
		//For collapse horizontal menu
		if (document.documentElement.getAttribute("data-layout") === "horizontal") {
			document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
		}
	
		//For collapse vertical menu
		if (document.documentElement.getAttribute("data-layout") === "vertical") {
			if (windowSize < 1025 && windowSize > 767) {
				document.body.classList.remove("vertical-sidebar-enable");
				document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
					document.documentElement.setAttribute("data-sidebar-size", "") :
					document.documentElement.setAttribute("data-sidebar-size", "sm");
			} else if (windowSize > 1025) {
				document.body.classList.remove("vertical-sidebar-enable");
				document.documentElement.getAttribute("data-sidebar-size") == "lg" ?
					document.documentElement.setAttribute("data-sidebar-size", "sm") :
					document.documentElement.setAttribute("data-sidebar-size", "lg");
			} else if (windowSize <= 767) {
				document.body.classList.add("vertical-sidebar-enable");
				document.documentElement.setAttribute("data-sidebar-size", "lg");
			}
		}
	
		//Two column menu
		if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
			document.body.classList.contains("twocolumn-panel") ?
				document.body.classList.remove("twocolumn-panel") :
				document.body.classList.add("twocolumn-panel");
		}
	}
	
	function elementInViewport(el) {
		if (el) {
			var top = el.offsetTop;
			var left = el.offsetLeft;
			var width = el.offsetWidth;
			var height = el.offsetHeight;
	
			if (el.offsetParent) {
				while (el.offsetParent) {
					el = el.offsetParent;
					top += el.offsetTop;
					left += el.offsetLeft;
				}
			}
			return (
				top >= window.pageYOffset &&
				left >= window.pageXOffset &&
				top + height <= window.pageYOffset + window.innerHeight &&
				left + width <= window.pageXOffset + window.innerWidth
			);
		}
	}
	
	function menuItem(e) {
		if (e.target && e.target.matches("a.nav-link span")) {
			if (elementInViewport(e.target.parentElement.nextElementSibling) == false) {
				e.target.parentElement.nextElementSibling.classList.add("dropdown-custom-right");
				e.target.parentElement.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right");
				var eleChild = e.target.parentElement.nextElementSibling;
				Array.from(eleChild.querySelectorAll(".menu-dropdown")).forEach(function (item) {
					item.classList.add("dropdown-custom-right");
				});
			} else if (elementInViewport(e.target.parentElement.nextElementSibling) == true) {
				if (window.innerWidth >= 1848) {
					var elements = document.getElementsByClassName("dropdown-custom-right");
					while (elements.length > 0) {
						elements[0].classList.remove("dropdown-custom-right");
					}
				}
			}
		}
	
		if (e.target && e.target.matches("a.nav-link")) {
			if (elementInViewport(e.target.nextElementSibling) == false) {
				e.target.nextElementSibling.classList.add("dropdown-custom-right");
				e.target.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right");
				var eleChild = e.target.nextElementSibling;
				Array.from(eleChild.querySelectorAll(".menu-dropdown")).forEach(function (item) {
					item.classList.add("dropdown-custom-right");
				});
			} else if (elementInViewport(e.target.nextElementSibling) == true) {
				if (window.innerWidth >= 1848) {
					var elements = document.getElementsByClassName("dropdown-custom-right");
					while (elements.length > 0) {
						elements[0].classList.remove("dropdown-custom-right");
					}
				}
			}
		}
	}
	function windowResizeHover() {
		feather.replace();
		var windowSize = document.documentElement.clientWidth;
		if (windowSize < 1025 && windowSize > 767) {
			
			if(document.querySelector(".hamburger-icon")){
			document.querySelector(".hamburger-icon").classList.add("open");
		}
		} else if (windowSize >= 1025) {
	
			if(document.querySelector(".hamburger-icon")){
			document.querySelector(".hamburger-icon").classList.remove("open");
			}
		} else if (windowSize <= 767) {
			
			if (sessionStorage.getItem("data-layout") != "horizontal") {
				document.documentElement.setAttribute("data-sidebar-size", "lg");
			}
			if(document.querySelector(".hamburger-icon")){
			document.querySelector(".hamburger-icon").classList.add("open");
		}
		}
	
		var isElement = document.querySelectorAll("#navbar-nav > li.nav-item");
		Array.from(isElement).forEach(function (item) {
			item.addEventListener("click", menuItem.bind(this), false);
			item.addEventListener("mouseover", menuItem.bind(this), false);
		});
	}
	
	function isLoadBodyElement() {
		var verticalOverlay = document.getElementsByClassName("vertical-overlay");
		if (verticalOverlay) {
			Array.from(verticalOverlay).forEach(function (element) {
				element.addEventListener("click", function () {
					document.body.classList.remove("vertical-sidebar-enable");
					if (sessionStorage.getItem("data-layout") == "twocolumn")
						document.body.classList.add("twocolumn-panel");
					else
						document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
				});
			});
		}
	}
	
	function windowLoadContent() {
		// Demo show code
		document.addEventListener("DOMContentLoaded", function () {
			var checkbox = document.getElementsByClassName("code-switcher");
			Array.from(checkbox).forEach(function (check) {
				check.addEventListener("change", function () {
					var card = check.closest(".card");
					var preview = card.querySelector(".live-preview");
					var code = card.querySelector(".code-view");
	
					if (check.checked) {
						preview.classList.add("d-none");
						code.classList.remove("d-none");
					} else {
						preview.classList.remove("d-none");
						code.classList.add("d-none");
					}
				});
			});
			feather.replace();
		});
	
		window.addEventListener("resize", windowResizeHover);
		windowResizeHover();
	
		document.addEventListener("scroll", function () {
			windowScroll();
		});
	
		window.addEventListener("load", function () {
			var isTwoColumn = document.documentElement.getAttribute("data-layout");
			if (isTwoColumn == "twocolumn") {
				initTwoColumnActiveMenu();
			} else {
				initActiveMenu();
			}
			isLoadBodyElement();
			// addEventListenerOnSmHoverMenu();
		});
		if(document.getElementById("topnav-hamburger-icon")){
		document.getElementById("topnav-hamburger-icon").addEventListener("click", toggleHamburgerMenu);
	}	
		var isValues = sessionStorage.getItem("defaultAttribute");
		var defaultValues = JSON.parse(isValues);
		var windowSize = document.documentElement.clientWidth;
	}
		
	function initActiveMenu() {
		var currentPath = location.pathname === "/" ? "index.html" : location.pathname.substring(1);
		currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
			}
	function initTwoColumnActiveMenu() {
		feather.replace();
		// two column sidebar active js
		// eslint-disable-next-line no-restricted-globals
		var currentPath = location.pathname === "/" ? "index.html" : location.pathname.substring(1);
		currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
		if (currentPath) {
			// navbar-nav
			var a = document.getElementById("navbar-nav").querySelector('[href="' + currentPath + '"]');
			if (a) {
				a.classList.add("active");
				var parentCollapseDiv = a.closest(".collapse.menu-dropdown");
				if (parentCollapseDiv && parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
					parentCollapseDiv.classList.add("show");
					parentCollapseDiv.parentElement.children[0].classList.add("active");
					parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show");
					if(parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown")){
						var menuIdSub = parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").getAttribute("id");
						parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show");
						parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.remove("twocolumn-item-show");
						if (document.getElementById("two-column-menu").querySelector('[href="#' + menuIdSub + '"]'))
						document.getElementById("two-column-menu").querySelector('[href="#' + menuIdSub + '"]').classList.add("active");
					}
					var menuId = parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").getAttribute("id");
					if (document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]'))
						document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]').classList.add("active");
				} else {
					a.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show");
					var menuId = parentCollapseDiv.getAttribute("id");
					if (document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]'))
						document.getElementById("two-column-menu").querySelector('[href="#' + menuId + '"]').classList.add("active");
				}
			} else {
				document.body.classList.add("twocolumn-panel");
			}
		}
	}
	
	function windowScroll() {
		var pageTopbar = document.getElementById("page-topbar");
		if(pageTopbar){
		document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ? pageTopbar.classList.add("topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
	}}
	
	// function initFullScreen() {
	// 	var fullscreenBtn = document.querySelector('[data-toggle="fullscreen"]');
	// 	fullscreenBtn &&
	// 		fullscreenBtn.addEventListener("click", function (e) {
	// 			e.preventDefault();
	// 			document.body.classList.toggle("fullscreen-enable");
	// 			if (!document.fullscreenElement &&
	// 				/* alternative standard method */
	// 				!document.mozFullScreenElement &&
	// 				!document.webkitFullscreenElement
	// 			) {
	// 				// current working methods
	// 				if (document.documentElement.requestFullscreen) {
	// 					document.documentElement.requestFullscreen();
	// 				} else if (document.documentElement.mozRequestFullScreen) {
	// 					document.documentElement.mozRequestFullScreen();
	// 				} else if (document.documentElement.webkitRequestFullscreen) {
	// 					document.documentElement.webkitRequestFullscreen(
	// 						Element.ALLOW_KEYBOARD_INPUT
	// 					);
	// 				}
	// 			} else {
	// 				if (document.cancelFullScreen) {
	// 					document.cancelFullScreen();
	// 				} else if (document.mozCancelFullScreen) {
	// 					document.mozCancelFullScreen();
	// 				} else if (document.webkitCancelFullScreen) {
	// 					document.webkitCancelFullScreen();
	// 				}
	// 			}
	// 		});
	
	// 	document.addEventListener("fullscreenchange", exitHandler);
	// 	document.addEventListener("webkitfullscreenchange", exitHandler);
	// 	document.addEventListener("mozfullscreenchange", exitHandler);
	
	// 	function exitHandler() {
	// 		if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
	// 			document.body.classList.remove("fullscreen-enable");
	// 		}
	// 	}
	// }
	function init(){
		// initFullScreen();
		windowLoadContent()
	}
	init()
})


	
// })();





