var hide = document.getElementById("hide")
var show = document.getElementById("show")

window.addEventListener('resize', function(event) {
    if (window.matchMedia("(max-width: 850px)").matches) {
        //hide span with id hide
        hide.style.visibility = "hidden";
        //show button with id "show"
        show.style.visibility = "visible";
    } else {
        //dont hide span with id hide
        hide.style.visibility = "visible";
        //hide button with id "show"
        show.style.visibility = "hidden";
    }
});
function onLoad(){
    if (window.matchMedia("(max-width: 850px)").matches) {
        //hide span with id hide
        hide.style.visibility = "hidden";
        //show button with id "show"
        show.style.visibility = "visible";
    } else {
        //dont hide span with id hide
        hide.style.visibility = "visible";
        //hide button with id "show"
        show.style.visibility = "hidden";
    }
}
function openMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
