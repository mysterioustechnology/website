/*
program for issues form
*/


//checks if user has github
var x = document.getElementById('issues_form');
function check(){
    if(x.style.display === 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
}
