var a = 10;
var b = 20;
var c =null;//variavel auxiliar de inversao na logica

// imprimir as variaveis e seus respectivos valores.
document.write('A '+a+'<br/>');
document.write('B '+b+'<br/>');
document.write('C '+c+'<br/>');

document.write('<hr/>');

//inversao das variaveis utilizando a auxiliar C

var c = a; // variavel null recebe o valor de A.

var a = b; // variavel A recebe o valor de B.

var b = c; // variavel B recebe o valor de C que representa A.

var c = null;


document.write('A '+a+'<br/>');
document.write('B '+b+'<br/>');
document.write('C '+c+'<br/>');

