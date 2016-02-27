// ==UserScript==
// @name         dream_Bot
// @description  полный
// @author       soloromail@gmail.com, Deimon, Ненчык-патыр, Старовер
// @match        http://dreamwar.ru/*
// ==/UserScript==
/* jshint -W097 */
if(location.href.match('dreamwar.ru')) {
speed=321;
oazis = 14902;
atak = 24;
//###########
//##ФУНКЦИИ##
//###########
//ТЕКСТ
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
//ССЫЛКИ
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)&&!document.links[i].text.match('Собрать все')) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkAn(tx) {for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=i; break;}} return l;}
function legendsFindLinkNoEnd(tx) {l=0;for(i=0;i<document.links.length-1;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else return false;}
function legendsFindLinkEnd(tx) {l=0;for(i=0;i<document.links.length-1;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
//function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*Переход по ссылке с интервалом*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
/*Проверка значения хранилища*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsGet(name) {return localStorage.getItem(name);}


function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}

function legendsCoord(hh) {for(var i=0;i<document.getElementsByTagName('b').length;i++){if(document.getElementsByTagName('b')[i].innerHTML.match("/")){var sdf=document.getElementsByTagName('b')[i].innerHTML;var hgf=sdf.split('/');y=parseInt(hgf[0]);x=parseInt(hgf[1]);i=document.getElementsByTagName('b').length;}}if(hh=="x") {return x;} if(hh=="y") {return y;}}
/*Назначение для хранилища*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legendsAllCheck() {
for(q=0;q<document.getElementsByTagName('input').length;q++){
if(document.getElementsByTagName('input')[q].getAttribute('type') == 'checkbox') document.getElementsByTagName('input')[q].checked = true;
}
}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}
function legendsSelect(n,a) {objSel = document.getElementsByName(n)[0];objSel.options[a].selected=true;}
function legendsSelCount(n) {objSel = document.getElementsByName(n)[0]; return objSel.options.length;}

//###########
//##ФУНКЦИИ##
//###########

if(legendsFindText('503 Service Temporarily Unavailable')){
legendsLink(window.location.href,1);
}






if(!legendsFindText('Коэфф'))legendsLink(legendsFindLink("В бой"),1);


if(location.href.match(/fight_group.php/)&&location.href.match(/h=1/)){
legendsLink(legendsFindLink("Ok"),5000);
legendsLink(legendsFindLink("Обновить"),5000);
//Мы в хаотичных боях
if(!legendsFindLink("присоединиться")&&legendsFindText('Подать заявку')){
legendsSelect('hide',1);
//legendsClick('OK',1000);
}else{

//legendsLink(legendsFindLink("присоединиться"),1/speed);
legendsLink(legendsFindLink("Принято"),1);


}
}
if(location.href.match(/battle_group.php/)){

if(!legendsFindText('вы получите')) legendsLink(legendsFindLink("Принято"),1);
legendsLink(legendsFindLink("Обновить"),5000);
if(!legendsFindText('вы получите')) legendsLink(legendsFindLink("В бой"),1);
if(legendsFindText('вы получите')){
if(legendsFindText("Ожидаем удара противника" )) {
//legendsLink(legendsFindLink("[5] Обновить"), 1000);
legendsLink(legendsFindLink("Обновить"),5000);
}
else
{
//legendsSelect('enemy', legends(0, legendsSelCount('enemy')));
legendsSelect('attack', legends(0, legendsSelCount('attack')));
legendsSelect('defence', legends(0, legendsSelCount('defence')));

//legendsAllCheck();
legendsClick('OK', 100);



}
}

if((legendsFindText('Вы получаете')||legendsFindText('Вы получили'))){//Победа или проигрыш

legendsLink('http://dreamwar.ru/user.php?UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);
}






}else{
if(location.href.match('user.php')){
dd = 0;
if(!legendsFindLink("Благословление")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-1&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(!legendsFindLink("Кровопускание")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-2&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(!legendsFindLink("Анатомия")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-4&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(!legendsFindLink("Предчувствие")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-3&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(!legendsFindLink("Защита органов")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-5&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(!legendsFindLink("Звериная ярость")) {dd=1;legendsLink('http://dreamwar.ru/buff.php?buff=-6&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);}
if(dd==0){
//Баффы есть
legendsLink('http://dreamwar.ru/fight_group.php?h=1&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);
}
}





if(location.href.match('buff.php')){
legendsLink('http://dreamwar.ru/user.php?UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1);
}
if(legendsFindText("Персонаж и снаряжение")&&legendsFindText("Улучшенные возможности"))
{
//if(legends(0,4)==1) legendsLink(legendsFindLink("Мой Боец"),1000/speed); else 
//legendsLink(legendsFindLink("Хаотичные Бои"),1000/speed);
}
}

}
// Your code here...
