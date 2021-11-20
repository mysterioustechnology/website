/*
program for issues form
*/

//updates issue box with issue
function onLoad(issue){
    document.getElementById('issue_title').innerHTML = issue;
    console.log(issue)
}


//checks if user has github
const selectElement = document.querySelector('#has_github');
var x = false
selectElement.addEventListener('change', (event) => {
    if(x){
        x = false
    }
    else if(!x){
        x = true;
    }
});

if(x){
    document.open("https://github.com/mysterioustechnology/website/issues")
}
else{
    document.getElementById('issue_form').style = "display:block";
}
