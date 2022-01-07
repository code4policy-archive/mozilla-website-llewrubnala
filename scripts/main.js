



let fox_showing = true

 // Define a Function
 function sayOuch() {

 	alert('Ouch! Stop poking me!');

 }

function fox_off() {

	document.getElementById('fox').src = ""
	document.getElementById('fox').alt = ""

	fox_showing = false
	
}

function fox_on() {
	
	document.getElementById('fox').src = "images/firefox-icon.png"
	document.getElementById('fox').alt = "The Firefox logo: a flaming fox surrounding the Earth."
	
	fox_showing = true

}


// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');
 
// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;
