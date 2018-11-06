//ejercicio5

//
//function parImpares(){
//    var numeros =[];
//    for(var i=0;i<100;i++){
//       numeros[i] =parseInt(Math.random()*1000 +1);
//        
//    }
//    document.write(numeros);
//    
//    
//    var compara=function(a,b){
//     if(a%2==0 && b!=0){
//            return -1;
//    }else   
//        return 1;
//}
//numeros.sort(compara);
//document.write("</br> </br>");
//document.write(numeros);
//}
//
//parImpares();


//ejercicio7
//a)
//var array=[1,2,3,4,5,6,7,8,9,10,11];
//function aCero (array){
//    for(var i=0;i<10;i++){
//        array.shift();
//        
//    }
//     for(var j=0;j<10;j++){
//        array.unshift(0);
//        
//    }
//    document.write(array);
//}

//aCero(array);


////b
//
//var array=[1,2,3,4,5,6,7,8,9,10,11];
//
//function suma1(array){
//     for(var i=0;i<=array.length-1;i++){
//        array[i]=array[i]+1;
//        
//    }document.write(array);
//}
//
//suma1(array);
////c
//document.write("</br>")
//
//function conEspacio(array){
//    for(var i=0;i<=array.length-1;i++){
//    document.write(array[i]+"  ")
//    }
//document.write(array.join);
//}
//    
//conEspacio(array);

//ejercicio 9

var cuenta = new Array(6);
for (var i = 1; i <= 6; i++) {
  cuenta[i] = new Array(6);
  for (var j = 1; j <= 6; j++) {
    cuenta[i][j] = 0;
  }
}
 for ( i=1;i<=36000;i++){
     var   tira1 = Math.floor(Math.random() * 6) + 1;
     var tira2 = Math.floor(Math.random() * 6) + 1;
cuenta[tira1][tira2]++;
 }

for( i=1;i<=6;i++){
    for( j=1;j<=6;j++){
        document.write("la tirada "+i+" + "+j+ " sale "+cuenta[i][j]+" veces</br>");
    }
}


