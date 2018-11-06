//ejercicio2
//ejercicio3

var con1=0,con2=0,con3=0,con4=0,con5=0,con6=0;
function lanzamiento(){
    
   var numero=(parseInt(Math.random()*6 +1));
    switch(numero){
        case 1: con1++; break;
        case 2: con2++;break;
        case 3: con3++;break;
        case 4: con4++;break;
        case 5: con5++;break;
        case 6: con6++;break;
    }
}




//--3
//


for(var i=0;i<=6000;i++){
        lanzamiento();
    }

document.write(con1+"</br>");
document.write(con2+"</br>");
    document.write(con3+"</br>");
    document.write(con4+"</br>");
    document.write(con5+"</br>");
    document.write(con6+"</br>");


//ejer6

//function potencia(valor,exponente){
//    if (exponente==1)
//        return 
//}
    
//ejer7
//
//function factorial (valor){
//    if(valor==1)
//        return valor;
//    else{
//    valor=factorial(valor-1)*valor;
//    return valor;
//}
//}
//document.write("<table border='black'>")
//for(var i=1;i<10;i++){
//    document.write("<tr> <td>"+i+"</td>");
//    document.write("<td>"+factorial(i)+"</td> </tr>");
//}
//document.write("</table>")
