	window.addEventListener('resize', function(event){
		if (window.matchMedia("(max-width: 850px)").matches) {
    			//hide span with id hide
			document.getElementById("hide").style.visibility = "hidden";
			//show button with id "show"
			document.getElementById("show").style.visibility= "visible";
  		} else {
    			//dont hide span with id hide
			document.getElementById("hide").style.visibility= "visible";
			//hide button with id "show"
			document.getElementById("show").style.visibility = "hidden";
		}
	});
function openMenu(){
	var x = document.getElementById("menu");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
