"use strict";
// Padding to section (height of nav)
let paddingNav = () =>{
	let nav = document.querySelector("nav");
	let navHeight = nav.offsetHeight;

	let toPaddingSections = document.querySelectorAll(".to-padding");
	// console.log(toPaddingSections);
	for(let toPaddingSection of toPaddingSections){
		// console.log(toPaddingSection);
		toPaddingSection.style.cssText = `padding-top: ${navHeight}px`;
	}
}
window.onresize = paddingNav();
//END PADDING TO SECTION

// ACTIVE CLASS TO NAV
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
  console.log(`Scroll ${scrollPosition}`);
  console.log(`Element ${elementPosition}`);
  
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

// END ADD CLASS TO NAV