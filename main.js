const body = document.querySelector("body"),
	  btnLinks = document.querySelectorAll(".btn__link"),
	  weekBtn = document.querySelector(".week__btn"),
	  darkElems = document.getElementsByClassName("dark__theme"),
	  darkModeSVG = document.querySelectorAll("#darkmode > svg"),
	  pricingCards = document.querySelectorAll(".pricing__cards"),
	  darkModer = document.getElementById("darkmode");


darkModer.onclick = () => {
	body.classList.toggle("bg__white");
	let darkElem;
	for (darkElem of darkElems){
		darkElem.classList.toggle("light__theme");
	}
	if (body.classList.contains("bg__white") && darkElem.classList.contains("light__theme")) {
		darkModeSVG[0].classList.remove("visible");
		darkModeSVG[1].classList.add("visible");
	} else {
		darkModeSVG[0].classList.add("visible");
		darkModeSVG[1].classList.remove("visible");
	}
}

function switchTabs(e) {
	e.preventDefault();
	btnLinks.forEach((btn) => btn.classList.remove("active"));
	this.classList.add("active");
	if(btnLinks[1].classList.contains("active")){
		pricingCards[1].classList.add("active");
		pricingCards[0].classList.remove("active");
		pricingCards[2].classList.remove("active");
		pricingCards[3].classList.remove("active");
		darkModer.style.backgroundColor = "#ab1234";
	} else if(btnLinks[2].classList.contains("active")){
		pricingCards[2].classList.add("active");
		pricingCards[1].classList.remove("active");
		pricingCards[3].classList.remove("active");
		pricingCards[0].classList.remove("active");
		darkModer.style.backgroundColor = "#f8ac20";
	} else if(btnLinks[3].classList.contains("active")){
		pricingCards[3].classList.add("active");
		pricingCards[2].classList.remove("active");
		pricingCards[0].classList.remove("active");
		pricingCards[1].classList.remove("active");
		darkModer.style.backgroundColor = "#10af02";
	} else if(btnLinks[0].classList.contains("active")){
		pricingCards[0].classList.add("active");
		pricingCards[3].classList.remove("active");
		pricingCards[1].classList.remove("active");
		pricingCards[2].classList.remove("active");
		darkModer.style.backgroundColor = "#5956e9";
	}
}

btnLinks.forEach((btn) => btn.addEventListener("click", switchTabs));


