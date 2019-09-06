let paddingNav = () =>{
	let nav = document.querySelector("nav");
	let navHeight = nav.offsetHeight;

	toPaddingSections = document.querySelectorAll(".to-padding");
	// console.log(toPaddingSections);
	for(let toPaddingSection of toPaddingSections){
		// console.log(toPaddingSection);
		toPaddingSection.style.cssText = `padding-top: ${navHeight}px`;
	}
}

window.onresize = paddingNav();