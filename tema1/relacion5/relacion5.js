//ejer410

//for(var i=1;i<=6;i++){
//    document.write('<h'+i+'> Cabecera h' +i+ '<h'+i+'/>')
    
//}

//ejer4.17


//for(var i=1;i<=10;i++){
//    document.write("<br>")
//    document.write("tabla del "+i)
//    document.write("</br>")
//    for(var j=1;j<=10;j++){
//        document.write("<br>")
//        document.write(i+" x "+j+" = "+i*j)
//        document.write("</br>")
//    }



//ejer4.18

//document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>")
//var col =prompt('numero de columnas');
//var filas=prompt('numero de filas');
//var alt=prompt('altura de celdas');
//var ancho=prompt('ancho de las celdas');
//
//for(var j=1;j<=filas;j++){
//    document.write("<tr bgcolor='white' height='" +alt+"' >")
//    for(var i=1;i<=col;i++){
//        document.write("<td width='" +ancho+ "'> &nbsp;</td>")
//    }
//    document.write("</tr>")
//}
//document.write("</table>")


document.write("<table border='0' cellspacing='2' bgcolor='black' width='400'>")

var alt=prompt('altura y ancho de celdas');


for(var j=1;j<=8;j++){
    document.write("<tr bgcolor='white' height='" +alt+"' >")
    if(j%2!=0){ 
    for(var i=1;i<=8;i++){
         if(i%2!=0){
             document.write("<td width='" +alt+ "' bgcolor='black' > &nbsp;</td>")
    }else
        document.write("<td width='" +alt+ "'> &nbsp;</td>")
    }
    document.write("</tr>")
    }
    else{ 
        for( i=1;i<=8;i++){
         if(i%2!=0){
             document.write("<td width='" +alt+ "' > &nbsp;</td>")
    }else
        document.write("<td width='" +alt+ "' bgcolor='black'> &nbsp;</td>")
    }
    document.write("</tr>")
    }
}
document.write("</table>")