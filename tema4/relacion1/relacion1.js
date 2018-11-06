//ejercicio1


function hola(){
      alert("hola World");
}

//ejercicio2

//function donde(e){
  document.write('<p id="coords"></p>');
      window.onmousemove = function (){
        var x = window.event.clientX;
        var y = window.event.clientY;
        document.getElementById('coords').innerHTML = 'Posición: ' + x + ' - ' + y;
      }
