/*
program for issues form
*/


//checks if user has github
var x = document.getElementById('issues_form').style;
function check(){
    if(x.display === 'none'){
        x.display = 'block';
    }
    else{
        x.display = 'none';
    }
}
