//function tabla(){
//  var col=prompt("introduce numero de columnas");
//    var altura=prompt("introduce altura de las celdas");
//    var ancho=prompt("introduce ancho de las celdas");
//    document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>")
//    document.write("<tr bgcolor='white' height=' "+altura +"'>")
//    for(var i=1;i<=col;i++){
//        if(i%2!=0)
//        document.write("<td width =' "+ ancho+" ' bgcolor='black' > &nbsp;</td>")
//        else
//            document.write("<td width =' "+ ancho+" ' > &nbsp;</td>")
//    }
//    document.write("</tr>")
//    document.write("</table>")
    
//}



function tabla(){
  var col=prompt("introduce numero de columnas");
    var altura=prompt("introduce altura de las celdas");
    var ancho=prompt("introduce ancho de las celdas");
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>")
    document.write("<tr bgcolor='white' height=' "+altura +"'>")
    var i=1;
    while( i<=col){
        if(i%2!=0)
        document.write("<td width =' "+ ancho+" ' bgcolor='black' > &nbsp;</td>")
        else
            document.write("<td width =' "+ ancho+" ' > &nbsp;</td>")
        i++;
    }
    document.write("</tr>")
    document.write("</table>")
    
}
tabla();