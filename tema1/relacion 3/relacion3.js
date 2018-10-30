//ejercicio1
function tellfortune(ninos,pareja,lugar,trabajo){
 var vinagre= 'seras un '+trabajo+' en '+lugar+' te casaras con ' + pareja + ' y tendras '+ninos+' hijos';
    console.log(vinagre)
}

tellfortune(69,'toby','alburquerque','probador de zapatillas')
tellfortune(0,'nadie','tu casa','parado')
tellfortune(4,'la vane','albacete','imitador de mario')

//ejercicio2
 function calculateAge(pasado,presente){
     var tiene=presente-pasado;
     console.log('tiene ' + (tiene -1) + ' años o ' + tiene  +' años')
 }
calculateAge(1993,2018)
calculateAge(1985,2015)
calculateAge(1999,2019)

//ejercicio3

function calculateSupply(edad,cantidad){
    var viejo=72;
    var patatas=(cantidad*365)*(viejo-edad);
    console.log('necesitas '+ patatas +' snack para llegar a la edad de '+ viejo +'sin que se acaben')
}

calculateSupply(34,2)
calculateSupply(21,1)
calculateSupply(59,6)

//ejercicio4
 function calCircumfrece(radio){
     var circunferencia=Math.PI*2*radio;
     console.log('la circunferencia es de '+ circunferencia)
 }
function calArea(radio){
    var area=radio*radio*Math.PI;
    console.log('el area es de '+area)
}

calCircumfrece(3)
calArea(3)


//ejercicio5

function celsiusToFarenheit(grado){
    var faren=(grado*9)/5+32;
    console.log(grado+'º son en farenheit '+faren)
}

function farenheitToCelsius(grado){
    var celsi=(grado-32)*5/9;
    console.log(grado+' grados farenheit son '+celsi+'ª')
}


celsiusToFarenheit(24)
farenheitToCelsius(80)