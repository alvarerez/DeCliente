//ejercicio 1

function greaterNumber(num1,num2){
    
    if(num1<num2)
        document.write(" the greater number of " +num1+ " and " +num2+ " is " +num2)
    else
        document.write(" the greater number of " +num1+ " and " +num2+ " is " +num1)
}

greaterNumber(5,8)
 
greaterNumber(25,8)


function helloWorld(lengua){
    switch(lengua){
        case 'es':
            document.write('  hola Mundo  ');break;
        case 'en':
            document.write('  hello World   ');break;
        case 'de':
            document.write('  Hallo Welt  ');break;
        default:
             document.write('  hello World ');
            
    }
    
}


helloWorld('es')
helloWorld('de')