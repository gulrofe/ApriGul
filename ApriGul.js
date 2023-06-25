function tipoB (form) {  // Felix Rodrigues Gulias 2014 (el autor)
var tgo=eval(troxa.gula.value) ; // Felix Rodrigues Gulias 2014 (el autor)
var plaq=eval(troxa.gulb.value) ; // Felix Rodrigues Gulias 2014 (el autor)
var uln=eval(troxa.gulc.value); // Felix Rodrigues Gulias 2014 (el autor)
var apria= ((tgo/uln)); // Felix Rodrigues Gulias 2014 (el autor)
var apri=((apria/(plaq/1000))*100); // Felix Rodrigues Gulias 2014 
var asu1= "Calculating: ("+apria+"/"+(plaq/1000)+")"+"*100"+"==>   The numerator index: "+apria+" [ The numerator index is an variable index and deppends of each laboratory]";
var asu2= "OUTCOME OF APRI: "+apri;
var asu3= "Calculation finalized !";

document.getElementById("numerador").innerHTML=(asu1);
document.getElementById("totale").innerHTML=(asu2);
document.getElementById("rango").innerHTML=(asu3);


}
