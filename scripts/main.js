



let fox_showing = true


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





