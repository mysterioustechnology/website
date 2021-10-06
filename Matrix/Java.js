function scrollpage() {		
	function f() 
	{
		window.scrollTo(0,i);
		if(status==0) {
   			i=i+40;
			if(i>=Height){	status=1; } 
		} else {
			i=i-1000;
			if(i<=1){	status=0; }  // if you don't want continue scroll then remove this line
		}
	setTimeout( f, 100 );
	}f();
}
var Height=document.documentElement.scrollHeight *15;
var i=1,j=Height,status=0;
scrollpage();