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
	
	document.addEventListener('scroll', animate);
	
	function inView(element) {
	  var elementHeight = element.clientHeight;
	  var windowHeight = window.innerHeight;
	  var scrollY = window.scrollY || window.pageYOffset;
	  
	  var scrollPosition = scrollY + windowHeight;
	  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight/2;
	  
	  if (scrollPosition >= elementPosition && scrollPosition <= element.getBoundingClientRect().bottom + scrollY + elementHeight) {
		return true;
	  }
	  
	  return false;
	}
	
	function animate() {
	  if (inView(sectionHome)) {
		  navHome.classList.add("active");
	  }
	  else{
		  navHome.classList.remove("active");
	  }
	  if (inView(sectionAbout)) {
		  navAbout.classList.add("active");
	  }
	  else{
		  navAbout.classList.remove("active");
	  }
	  if (inView(sectionPortfolio)) {
		  navPortfolio.classList.add("active");
	  }
	  else{
		  navPortfolio.classList.remove("active");
	  }
	  if (inView(sectionContact)) {
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
let animations = () =>{
let myselfDesc = document.getElementById('myself-desc');
let skills = document.getElementById('skills');

document.addEventListener('scroll', animate);

function inView(element) {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element.getBoundingClientRect().top + scrollY;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function animate() {
  if (inView(myselfDesc)) {
      myselfDesc.classList.add('bounce');
  }
  if (inView(skills)) {
      skills.classList.add('swing');
  }
}
}
animations();
// END ANIMACJE