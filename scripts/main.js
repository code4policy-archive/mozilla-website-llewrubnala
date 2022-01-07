



let fox_showing = true

 // Define a Function
 function sayOuch() {

 	alert("Don't pet the animals!");

 }


function fox_swap() {

	if (fox_showing === true) {

		document.getElementById('fox').src = ""
		document.getElementById('fox').alt = ""
		document.getElementById('fox_butt').innerText = "Show Fox!"

		fox_showing = false

	} else {

		document.getElementById('fox').src = "images/firefox-icon.png"
		document.getElementById('fox').alt = "The Firefox logo: a flaming fox surrounding the Earth."
		document.getElementById('fox_butt').innerText = "Hide Fox!"

		fox_showing = true

	}

}


// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');
 
// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;
