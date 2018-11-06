////ejercicio1
//
//var fecha=new Date();
//document.write(fecha.getFullYear())
//document.write('</br>')
//document.write(fecha.getMonth()+1)
//document.write('</br>')
//document.write(fecha.getDate())
//document.write('</br>')
//document.write(fecha.getHours())
//document.write('</br>')
//document.write(fecha.getMinutes())
//document.write('</br>')
//document.write(fecha.getSeconds())


//ejercicio2
//
//var fechaHoy=new Date();
////var fechaHoy=fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
//document.write(fechaHoy)
//
//document.write('</br>')
//var fecha85=new Date();
//fecha85.setDate(fechaHoy.getDate()+85)
//document.write(fecha85)
//
//document.write('</br>')
//var fecha187=new Date();
//fecha187.setDate(fechaHoy.getDate()-187)
//document.write(fecha187)
//
//fecha85.setFullYear(fecha85.getFullYear()+2)
//document.write('</br>')
//document.write(fecha85)
//
//fecha187.setDate(fecha187.getDate()-1)
//document.write('</br>')
//document.write(fecha187)
//
//var fechaResto=(fecha85-fecha187);
//document.write('</br>')
//document.write(fechaResto)

//ejercicio 3
 
//var contador=61;
//function crono(){
//    document.write(contador+"<br/>")
//    contador--;
//    if(contador>=0){
//        setTimeout(crono,1000);
//    }
//}
//
//crono();


//ejercicio5


function prueba(){
    var reloj=new Date();
var digital=reloj.getHours()+":"+reloj.getMinutes()+":"+reloj.getSeconds()+"<br/>";
document.write(digital)
    setTimeout(prueba,1000);
}
prueba();