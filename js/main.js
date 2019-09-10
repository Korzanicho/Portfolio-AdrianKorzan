"use strict";
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADD SHADOW TO NAV !!!!!!!!!!!!!!!!!!!!!!!
const shadowToNav = () =>{
	let nav = document.querySelector("nav");

	// Setup isScrolling variable
	let isScrolling;

// Listen for scroll events
	window.addEventListener('scroll', function ( event ) {
		nav.classList.add("shadow");


		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling );

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			nav.classList.remove("shadow");

	}, 1000);

}, false);
}
shadowToNav();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END SHADOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Padding to section (height of nav)
let paddingNav = () =>{
	let nav = document.querySelector("nav");
	let navHeight = nav.offsetHeight;

	let toPaddingSections = document.querySelectorAll(".to-padding");
	for(let toPaddingSection of toPaddingSections){
		toPaddingSection.style.cssText = `padding-top: ${navHeight}px`;
	}
}
window.onresize = paddingNav();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!END PADDING TO SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ACTIVE CLASS TO NAV!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const activeCllasToNav = () =>{
	let sectionHome = document.getElementById('home');
	let navHome = document.querySelector("a.nav-link[href='#home']");
	
	let sectionAbout = document.getElementById('about');
	let navAbout = document.querySelector("a.nav-link[href='#about']");
	
	let sectionPortfolio = document.getElementById('portfolio');
	let navPortfolio = document.querySelector("a.nav-link[href='#portfolio']");
	
	let sectionContact = document.getElementById('contact');
	let navContact = document.querySelector("a.nav-link[href='#contact']");
	
	// listen for scroll event and call animate function
	document.addEventListener('scroll', animate);
	
	// check if element is in view
	function inView(element) {
	  var elementHeight = element.clientHeight;
	  var windowHeight = window.innerHeight;
	  var scrollY = window.scrollY || window.pageYOffset;
	  
	  var scrollPosition = scrollY + windowHeight;
	  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight/2;
	  
	  // is scroll position greater than element position? (is element in view?)
	  if (scrollPosition >= elementPosition && scrollPosition <= element.getBoundingClientRect().bottom + scrollY + elementHeight) {
		return true;
	  }
	  
	  return false;
	}
	
	// animate element when it is in view
	function animate() {
	  // is element in view?
	  if (inView(sectionHome)) {
		  // element is in view, add class to element	  
		  navHome.classList.add("active");
	  }
	  else{
		  navHome.classList.remove("active");
	  }
	  if (inView(sectionAbout)) {
		  // element is in view, add class to element	  
		  navAbout.classList.add("active");
	  }
	  else{
		  navAbout.classList.remove("active");
	  }
	  if (inView(sectionPortfolio)) {
		  // element is in view, add class to element	  
		  navPortfolio.classList.add("active");
	  }
	  else{
		  navPortfolio.classList.remove("active");
	  }
	  if (inView(sectionContact)) {
		  // element is in view, add class to element	  
		  navContact.classList.add("active");
	  }
	  else{
		  navContact.classList.remove("active");
	  }
	}
}
activeCllasToNav();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END ACTIVE CLASS TO NAV !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ANIMACJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// get the element to animate
let myselfDesc = document.getElementById('myself-desc');
let skills = document.getElementById('skills');
// let elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView(myselfDesc)) {
      // element is in view, add class to element
      myselfDesc.classList.add('bounce');
  }
  if (inView(skills)) {
      // element is in view, add class to element
      skills.classList.add('swing');
  }
}
// END ANIMACJE