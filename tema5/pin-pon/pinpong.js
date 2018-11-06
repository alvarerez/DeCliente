var pasox=10;
var pasoy=4;

function mover(){
    var posx=parseInt(pelota.getAttribute("cx"));
    var posy=parseInt(pelota.getAttribute("cy"));
   
	var posyI =  parseInt(j1.getAttribute("y"));

	var posyD =  parseInt(j2.getAttribute("y"));
    if(posx<=2||posx>=498 ){
    pasox=pasox*-1;
}
       if(posy<=2||posy>=498 ){
    pasoy=pasoy*-1;
}
    if(posx >=460 && (posy>=posyD) && (posy<=posyD+100) ) {
        pasox=pasox*-1;
    }
    if(posx <=40 && (posy>=posyI) && (posy<=posyI+100)){
        pasox=pasox*-1;
    }
    pelota.setAttribute("cx",(posx+pasox));
      pelota.setAttribute("cy",(posy+pasoy));
}


    
function muevePala(event){
	var posyI =  parseInt(j1.getAttribute("y"));
	var posyD =  parseInt(j2.getAttribute("y"));
 	if(event.keyCode == 87  ){
	   if(posyI <= 0){
	}
	else{
	j1.setAttribute('y',(posyI)-10);
}
}
 	if(event.keyCode == 83  ){

	   if(posyI >= 400){

	}
	else{
	j1.setAttribute('y',(posyI)+10);
}
}
		if(event.keyCode == 38  ){	
	if(posyD <= 0){
}
else{
	j2.setAttribute('y',(posyD)-10);
}
}
	if(event.keyCode == 40 ){
	
	if(posyD >= 400){
	}
	else{
	j2.setAttribute('y',(posyD)+10);

}
}
 
}

window.onkeydown=muevePala;
setInterval(mover,60);