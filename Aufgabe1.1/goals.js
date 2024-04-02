//text1
var str_base1 = "Der Klimawandel geht uns alle etwas an, auch wenn die Auswirkung nicht alle Personen gleichermaßen erfahren. In Zeiten der Globalisierung sind wir nicht nur für die CO²";
var str_hint1 = " (...)";
var str_add1 = "-Emissionen in unserem Land verantwortlich sondern auch zu großen Teilen für die Länder und Firmen verantwortlich, welche unsere Ware herstellen.";

var str_button1add = `
<a href="#" class="icon-link" onclick="addmoretext1()">
    Weiterlesen
</a>
`;
var str_button1remove = `
<a href="#" class="icon-link" onclick="removemoretext1()">
    Einklappen
</a>
`;

document.getElementById("buttonmore1").innerHTML = str_button1add;


function addmoretext1(){
    document.getElementById("more1").innerHTML = str_base1 + str_add1;
    document.getElementById("buttonmore1").innerHTML = str_button1remove;
}

function removemoretext1(){
    document.getElementById("more1").innerHTML = str_base1 + str_hint1;
    document.getElementById("buttonmore1").innerHTML = str_button1add;
}



















/*
<a href="#" class="icon-link" onclick="addmoretext1()">
Weiterlesen
<svg class="bi"><use xlink:href="#chevron-right"></use></svg>
</a>*/
