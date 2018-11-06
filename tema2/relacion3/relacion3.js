//ejercicio1

function invierteCadena(pal){
    var x=pal.length;
    var inversa="";
    while (x>=0){
        inversa =inversa+pal.charAt(x);
        x--;
    }
    return inversa;
}
//c)


//funtion encuentraPalabraMasLarga(cadena){
//    	var longitud = 0;
//		var texto = cadena.split(" ");
//		for(var i = texto.length - 1; i >=0; i--){
//			if(texto[i].length > longitud){
//
//			 longitud = texto[i].length;
//			}
//		}
//		document.write(longitud);
//}

//d)
// function filtraCadenaMasLarga(cadena,numero){
//             
//        var longitud=numero;
//		var texto =cadena.split(" ");
//		for(var i = texto.length - 1; i >=0; i--){
//			if(texto[i].length >= longitud){
//                    document.write(texto[i]);
//			}
//		}
//		
//} 
//filtraCadenaMasLarga("hola patata gato",5);

//e)
//function  cadenaBienFormada(cad_arg){
//            var texto5 = cad_arg.split(" ");
//  	  		document.write(texto5[0].charAt(0).toUpperCase() + texto5[0].slice(1).toLowerCase() + " ");
//            for(var v = 1 ; v <= texto5.length - 1; v++){
//                document.write(texto5[v] + " ");
//            }
//}
//var cadena = prompt("Inserte un texto");
//cadenaBienFormada(cadena);
//ejercicio2
//
//function informacion(cad) {
//  cad = String(cad).trim();
//  const regxs = {
//    "lower": /^[a-z0-9 ]+$/,
//    "upper": /^[A-Z0-9 ]+$/,
//    "upperLower": /^[A-Za-z0-9 ]+$/
//  }
// 
//  if (regxs.lower.test(cad)) return 'Todo esta en minusculas';
//  if (regxs.upper.test(cad)) return 'Todo esta en mayusculas';
//  if (regxs.upperLower.test(cad)) return 'Estan en mayusculas y minusculas';
//  return -1;
//}
//
//				
//			
//var texto = prompt("Que texto quiere analizar");
//document.write(informacion(cad));



// ejercicio7
//function palindromo(cadena){
//	var texto1 = invierteCadena(cadena);
//	var texto2 = "";
//	var arrayString = cadena.split(' ');
//    for (var i = 0; i < arrayString.length; i++) {
//        if (arrayString[i] != "") {
//            texto2 += arrayString[i];
//        }
//    }
//	if(texto1 == texto2){
//		document.write("Es una cadena palindroma")
//	}
//	else{
//		document.write("No es una cadena palindroma")
//	}
//
//}
//
//function  invierteCadena(cad_arg){
//	
//	var texto = cad_arg.trim();
//	var textoInverso = ""
//	for(var i = texto.length - 1; i >=0; i--){
//		if(texto.charAt(i) != " "){
//		 textoInverso = textoInverso + texto.charAt(i);
//		}
//	}
//	return textoInverso;
//}
//var cad = prompt("Inserte una cadena");
//palindromo(cad);

//ejercicio9



function estoEsRaro(cadena){
    var cad=cadena;
    var cad1=invierteCadena(cadena);
      document.write("<table>")
    for(var i=0;i<=cad.length-1;i++){
        document.write("<tr>")
        for(var j=0;j<=cad.length-1;j++){
            if(i==0)
                document.write("<td>"+cad[j]+"</td>");
            else if (i==cad.length-1)
                    document.write("<td>"+cad1[j]+"</td>");
                else if (j==0)
					document.write('<td>' + cad[i] + '</td>');
				
				    else if (j == cad.length - 1)
					   document.write('<td>' + cad1[i] + '</td>');
				
				        else
					   document.write('<td>&nbsp</td>');
				
			}
		}
		document.write('</tr></table>');
            
        }
  
estoEsRaro("hola");