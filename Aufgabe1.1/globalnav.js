const rtlsprachen = ['ar', 'he', 'iw','kd', 'ps', 'ug', 'ur', 'yi', /*'de'*/] //DE für Testzwecke -- Liste zur Verfügung gestellt von https://help.smartling.com/hc/en-us/articles/1260802028830-Right-to-left-RTL-Languages 20.02.2024 23:11
var sprache = navigator.language;
//alert(sprache)
sprache = sprache.substring(0, 2);
//alert(sprache)
var site = window.location.pathname.substring(1,)
var str = `<div id="navigation" dir="`;

if (rtlsprachen.includes(sprache)){
        str += `rtl">`;
    } else {
        str += `ltr">`;
}

str +=`
<nav class="d-flex justify-content-left py-3">
<ul class="nav nav-pills">
<li class="nav-item"><a href="index.html" class="nav-link `;

if(site == "index.html"){
        str += `active"`;
    }else{ str += `"`;}

str += ` aria-current="page">Home</a></li><li class="nav-item"><a href="goals.html" class="nav-link `

if(site == "goals.html"){
        str += `active"`;
    }else{ str += `"`;}

str += ` aria-current="page">Ziele</a></li><li class="nav-item"><a href="CO2_Footprint.html" class="nav-link `

if(site == "CO2_Footprint.html"){
        str += `active"`;
    }else{ str += `"`;}

str += `">CO&sup2;-Footprint</a></li><li class="nav-item"><a href="about_us.html" class="nav-link `

if(site == "about_us.html"){
        str += `active"`;
    }else{ str += `"`;}

str += `>Über uns</a></li>

</ul>
</nav>
</div>`;

document.getElementById("uppernavigation").innerHTML += str;
