// ==Userscript==
// @name legendsgame_bot
// @description бот для легенд крови
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http://velikozemie.ru/*
// ==/Userscript==
(function(){
speed=100000;

function legendsCoord(hh) {for(var i=0;i<document.getElementsByTagName('b').length;i++){if(document.getElementsByTagName('b')[i].innerHTML.match("/")){var sdf=document.getElementsByTagName('b')[i].innerHTML;var hgf=sdf.split('/');y=hgf[0];x=hgf[1];i=document.getElementsByTagName('b').length;}}if(hh=="x") {return x;} if(hh=="y") {return y;}}
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}


//3
dy = new Array('269', '269', '268', '268', '269', '268', '267', '266', '265', '264', '263', '262', '261', '260', '259', '258', '257', '256', '255', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269');
//2
dx = new Array('236', '237', '237', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '238', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237', '237');
//1
dp = new Array('в', 'с', 'в', 'ю', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'с', 'з', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'ю', 'з');
tr = 'нельзя';
k = 5;
if(legendsFindLink('построить пост')) {
for(i=0;i<=k;i++) {
if(legendsCoord('x')==dx[i]&&legendsCoord('y')==dy[i]) {
legendsLink(legendsFindLink('построить пост'), 1000/2);
break;
}
}
if(legendsFindText('Ослабление')) {
legendsLink(legendsFindLink('Обновить'), 30000);
}
}
if(legendsFindLink('Здания')) {
for(i=0;i<=k;i++) {
if(legendsCoord('x')==dx[i]&&legendsCoord('y')==dy[i]) {
if(dp[i]=="з") legendsLink(legendsFindLink('Зaп'), 100/2);
if(dp[i]=="с") legendsLink(legendsFindLink('Ceв'), 100/2);
if(dp[i]=="ю") legendsLink(legendsFindLink('Югъ'), 100/2);
if(dp[i]=="в") legendsLink(legendsFindLink('Boc'), 100/2);
break;
}
}
}
legendsLink(legendsFindLink('Да, продолжаем экспансию!'), 1000/2);
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 1000/speed);
}
if(legendsFindText("Цель")) {
legendsClick("удaрить", 1000/speed);
}
legendsLink(legendsFindLink("На главнxую"), 2);

/*document.onkeydown=function(e) {
e=e||event;

}*/
}
)();
