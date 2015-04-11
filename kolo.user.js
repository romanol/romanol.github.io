// ==Userscript==
// @name legendsgame_bot
// @description бот для легенд крови
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http:///tkonline.mobi/*
// ==/Userscript==
(function(){

//if(location.href.match('http://localhost/kolonisty/')) {
if(location.href.match('http://kologame.esy.es/')) {

function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
function legendsClickg(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];break;}}}setTimeout(function(){go.click();}, sec);}
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsHrefLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].innerHTML.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legendsClickB(tx, sec) {
for(var q=0;q<document.forms.length;q++){
for(var y=0;y<document.forms[q].elements.length;y++){
if (document.forms[q].elements[y].value.match(tx)){
var go = document.forms[q].elements[y];
}
} break;
}
setTimeout(function(){go.click();}, sec);
}
function legendsClickN(tx, sec) {
for(var q=0;q<document.forms.length;q++){
for(var y=0;y<document.forms[q].elements.length;y++){
if (document.forms[q].elements[y].innerHTML.match(tx)){
var go = document.forms[q].elements[y];
}
} break;
}
setTimeout(function(){go.click();}, sec);
}

function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}
function legendsSelect(n,a) {
objSel = document.getElementsByName(n)[0];
objSel.options[a].selected=true;
}
function legendsSelCount(n) {objSel = document.getElementsByName(n)[0]; return objSel.options.length;}

if(legendsFindText('ур')) {
typel="link";
namel="ур";
}
if(legendsFindLink('Существа')) {
typel="link";
namel="Существа";
}
if(legendsFindText('Прошёл')) {
typel="link";
namel="На главную";
}
if(legendsFindText('Физический удар')) {
typel="button";
namel="Физический удар";
}
//typel="url";
//namel="http://localhost/kolonisty/main.php?go=n";

if(typel=="link") legendsLink(legendsFindLink(namel), 1);
if(typel=="url") legendsLink(namel, 1);
if(typel=="button") legendsClickB(namel, 1);
}
}
)();
