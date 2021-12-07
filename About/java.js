var show = false;
var y = document.getElementById('hide');
var x = document.getElementById('show')

function onLoad(){
    if(window.innerWidth <= 500){
        show()
    }
    else{
    hide();
    }
}


function show(){
    x.style = 'display:block';
    y.style = 'display:none';
}
function hide(){
    x.style = 'display:none';
    y.style = 'display:block';
}

function detect(){
    if(show = false){
        show = true;
        show()
    }
    else{
        show = false;
        hide();
    }
}

window.onresize = detect();