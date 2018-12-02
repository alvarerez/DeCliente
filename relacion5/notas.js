var arrayNota=[];
class Nota{
    constructor(titulo,texto){
        this.titulo=titulo;
        this.texto=texto;
        this.fecha= new Date();
    }
}



//VISTA

function vistaNota(nota){
    var divRaiz=document.createElement("div");
    divRaiz.setAttribute("class","nota");
    var titulo=document.createElement("h1");
    titulo.appendChild(document.createTextNode(nota.titulo));
     var texto=document.createElement("h2");
   texto.appendChild(document.createTextNode(nota.texto));
     var fecha=document.createElement("h4");
   fecha.appendChild(document.createTextNode(nota.fecha));
    divRaiz.appendChild(titulo);
    divRaiz.appendChild(texto);
    divRaiz.appendChild(fecha);
    return divRaiz;
}

function iniciar(){
	if(localStorage.getItem("notas")){
		 arrayNota = JSON.parse(localStorage.getItem("notas"));
		for(var i=0;i<arrayNota.length;i++){
	document.getElementById("vista").appendChild(vistaNota(arrayNota[i]));
}
	}

}

function nuevaNota(){
    if(document.getElementById("titulo").value!=""){
    var titulo=document.getElementById("titulo").value;
    var texto=document.getElementById("texto").value;
    var nota= new Nota(titulo,texto);
   arrayNota.push(nota);
     JSON.stringify(arrayNota);
        localStorage.setItem("notas", JSON.stringify(arrayNota));
    document.body.appendChild(vistaNota(nota));
    
}
}

var retrievedData = localStorage.getItem("notas");
var movies2 = JSON.parse(retrievedData);
 
//making sure it still is an array
alert(movies2.length);

    
