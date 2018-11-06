//ejercicio1 

//document.write(Math.random())
//document.write("</br>")
//document.write(parseInt(Math.random()*100))
//document.write("</br>")
//
//function aleatorio(){
//    var num1=prompt('elije el numero desde');
//    var num2=prompt('elije el numero hasta');
//    do{
//    var valor=0;
//    valor=parseInt(Math.random()*num2)
//    }while(valor<num1)
//    document.write(valor)
//}
//
//aleatorio();

//ejercicio5

//function ecua(){
//    var a=prompt("introduce a");
//    var b=prompt("introduce b");
//    var c=prompt("introduce c");
//    var resulta1=0;
//    var resulta2=0;
//     resulta1=-b+Math.sqrt((b*b-4*a*c)/2a);
//     resulta2=-b+Math.sqrt((b*b-4*a*c)/2a);
//    document.write(resulta1)
//    document.write(resulta2)
//}
//ecua();
//ejercio7
var numero=1;
function tabla(){
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>")
    document.write("<tr bgcolor='white'>")
    document.write("<th>"+numero+"</th> <th> "+Math.sin(numero)+"</th>")
    document.write("</tr>")
    document.write("</table>")
    numero++;
    if(numero<20)
        setTimeout(tabla,200);
}
tabla();


//ejercicio8

//function imagen(){
//   
//    switch(parseInt(Math.random()*3)+1){
//        case 1:
//                document.write('<img src="1.jpg"/>');break;
//        case 2: 
//             document.write('<img src="2.jpg"/>');break;
//        case 3: 
//             document.write('<img src="3.jpg"/>');break;
//    }
//}
//imagen();