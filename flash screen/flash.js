function flashscreen () {
var preload=document.getElementById('preload');
var loading=0;
 var id=setInterval(frame,60);
 function frame() {
 	if (loading==60) {
 		clearInterval(id);
		window.open("1.html","_top");
 	}
 	else
 	{
 		loading++;
 		if(loading==90)
 		{
 			preload.style.aniamtion="fadeout  is ease";
 		}
 	}
 	// body...
 }
	// body...
}
flashscreen();