// ==Userscript==
// @name tkа6767
// @description tk
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http:///tkonline.mobi/*
// ==/Userscript==
(function(){

if(location.href.match('tkonline.mobi')) {

var i=0;
var tx='';
dragon = "Мнемент"; //Имя дракона
//pus1 = "не используем"; //от этого уровня сздавать бой в пустоши
pus2 = 11; //до этого уровня создавать бой в пустоши (твой уровень-2)
mana = "4038"; //Максимальное количество маны
percent = 20; //Лечимся когда здоровье становится столько процентов
speed=1;
function legendsHrefLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].innerHTML.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legendsSelect(n,a) {objSel = document.getElementsByName(n)[0];objSel.options[a].selected=true;}
function legendsSelCount(n) {objSel = document.getElementsByName(n)[0]; return objSel.options.length;}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}
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
d = document.body.innerHTML;
l = '<div id="tty" style="display: block; width: 120px; height: 20px; background: #ffffff; position: fixed; left: 0; top:0;"><center><b id="enable">ВЫКЛ</b></center></div>';
document.body.innerHTML = l+d;

document.onkeydown=function(e) {
e=e||event;
if(e.keyCode===48&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '0');
localStorage.setItem('kk', '0');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ВЫКЛ";
}
if(e.keyCode===49&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '1');
localStorage.setItem('kk', 'бой');
document.getElementById('enable').innerHTML="Пустошь";
}
if(e.keyCode===50&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '2');
localStorage.setItem('pov', 'п');
document.getElementById('enable').innerHTML="Окраина";
}
if(e.keyCode===51&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '3');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Дракон";
}
if(e.keyCode===52&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '4');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Слоты";
}
if(e.keyCode===53&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '5');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Рыбалка";
}
if(e.keyCode===57&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '9');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Путь";
}
if(e.keyCode===55&&e.ctrlKey) {//Лечение в лабе
e.preventDefault();
localStorage.setItem('en', '7');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Med.Tas";
}
if(e.keyCode===56&&e.ctrlKey) {//Бой орденов
e.preventDefault();
localStorage.setItem('en', '8');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="Orden.fght";
}

}






fk=localStorage.getItem('en');
kk=localStorage.getItem('kk');
if(fk == "7") { //Лаб
document.getElementById('enable').innerHTML="Lab.heal";
if(legendsFindText('Лабиринт')) {
//legendsClick("Исцеление", 20000);

if(legendsFindText('Ждите')) legendsLink(legendsFindLink("Обновить"), 1000);
if(!legendsFindText('Ждите')) legendsLink(legendsFindLink("Обновить"), 5000);

if(legendsFindText('Найден родник Маны!')&&!legendsFindText(mana)) {
legendsLink(legendsFindLink("Восполнить ману"), 1000/speed);
}
legendsClick("Выбрать", 200/speed);
}

legendsSelect('heal', legends(0, legendsSelCount('heal')));
if(legendsFindText('Лабиринт')) {
legendsClick("Исцеление", 1);
}
}
if(fk == "8") { //Орден
document.getElementById('enable').innerHTML="Orden.fight";

if(legendsFindLink('Создать бой')) {
typel='link';
namel='Создать бой';
}
if(legendsFindText('Режим боя')) {
legendsSelect('mode', '2');
legendsSelect('min_level', '0');
legendsSelect('max_level', pus2);
typel='button';
namel='Создать бой';
}
if(legendsFindLink('Обновить')) {
legendsLink(legendsFindLink("Обновить"), 1000);
}
if(legendsFindText('Ждут начала')&&legendsFindText('Ордены: Адаптация Пчёл, ')) {

if(legendsFindLink('Начать бой!')) {
typel='link';
namel='Начать бой!';
}
}
if(legendsFindText('Противники')) {
typel='button';
namel='Атаковать';
}
if(legendsFindLink("Выйти из боя")) {
typel='link';
namel='Выйти из боя';
}
if(legendsFindLink("Орден 3-")) {
typel='link';
namel='Орден 3-';
}
if(legendsFindText('Вам не удалось попасть в команду')) {
location.href=location;
}
}
if(fk == "9") { //Приключения
document.getElementById('enable').innerHTML="Путь";
if(legendsFindText("Дух древних")) {
legendsClickN("Взять", 2000/speed);
}
if(legendsFindText("Оренгольд")) {
typel='link';
namel='Путь Падших';
}
if(legendsFindLink("Создать поход")) {
typel='link';
namel='Создать поход';
}
if(legendsFindText("Заклинание защиты")) {
legendsClickN("Создать обычный поход", 200/speed);
}
if(legendsFindText("Артефакт победителя")) {
typel='link';
namel='Выбрать руны';
}
if(legendsFindText("Сложность")) {
legendsLink(legendsFindLink("Обновить"), 5000/speed);
}
if(legendsFindText("Этап пройден")) {
if(legendsFindLink('Забрать награду')) {
typel='link';
namel='Забрать награду';
}
else
{
legendsLink(legendsFindLink("Обновить"), 5000/speed);
}
}
if(legendsFindText("Боевой маг")) {
if(legendsFindLink('Обновить')) {
legendsLink(legendsFindLink("Обновить"), 3000/speed);
} else {
typel='button';
namel='Заколдовать';
//namel='Ударить';
}
}
}
if(fk == "5") { //Рыбалка
document.getElementById('enable').innerHTML="Рыбалка";
if(legendsFindText('Оренгольд')) {
if(legendsFindLink('Лес')) {
typel='link';
namel='Лес';
}
}
if(legendsFindText('Гиблый Лес')) {
typel='link';
namel='Озеро грез';
}
if(legendsFindText("Озеро грез")) {
legendsLink(legendsFindLink("Забросить удочку"), 500/speed);
legendsLink(legendsFindLink("Выловить рыбу"), 500/speed);
legendsLink(legendsFindLink("Обновить"), 10000/speed);
}
legendsLink(legendsFindLink("Повторить"), 1000/speed);
}
if(fk == "4") { //Казино
document.getElementById('enable').innerHTML="Казино";
if(legendsFindText("ВолшеБар")&&!legendsFindText("недостаточно")) {
legendsLink(legendsFindLink("Поставить"), legends(1, 7));
}
if(!legendsFindText("ВолшеБар")) {
location.href=location;
}
}
if(fk == "3") { //Драконы
document.getElementById('enable').innerHTML="Драконы";
if(legendsFindText('Логово драконов')) {
if(legendsFindLink('Создать отряд')) {
typel='link';
namel='Создать отряд';
}
if(legendsFindText('Создайте отряд драконоборцев')) {
typel='link';
namel=dragon;
}
if(legendsFindLink('Обновить')) {
legendsLink(legendsFindLink("Обновить"), 10000);
}
if(legendsFindLink('Начать бой!')) {
typel='link';
namel='Начать бой!';
}
if(legendsFindLink('Атаковать')) {
typel='link';
namel='Атаковать';
}
if(legendsFindText('ПОБЕДА!')) {
typel='link';
namel='Выйти из боя';
}
}
if(legendsFindText('Оренгольд')) {
if(legendsFindLink('Логово')) {
typel='link';
namel='Логово';
}
}
}
if(fk == "2") { //Окраины
if(!legendsFindText("Приключения")) {
document.getElementById('enable').innerHTML="Окраины";
if(legendsFindText("Окраины Логова")) {
legendsLink(legendsFindLink("Пройти дальше"), 1500/speed);
legendsClick("Ударить", 1000/speed);
//legendsLink(legendsFindLink("Обновить"), 3000/speed);

legendsLink(legendsFindLink("Обновить"), 3000/speed);
d = document.getElementsByClassName('heal_m')[0].style.width;
d=parseInt(d);
if(d<=20) legendsLink(legendsFindLink("Исцелиться"), 1000/speed);


if(legendsFindText('Найден родник здоровья!')||legendsFindText('Найден родник Маны!')) {
if(legendsFindText('Найден родник здоровья!')&&d!=100) {
legendsLink(legendsFindLink("Подлечиться"), 3000/speed);
} else {
if(legendsFindText('Найден родник Маны!')&&!legendsFindText('3176')) {
legendsLink(legendsFindLink("Восполнить ману"), 1000/speed);
} else {
legendsLink(legendsFindLink("Сразу в бой"), 1000/speed);
}
}
} else {
legendsLink(legendsFindLink("Сразу в бой"), 1000/speed);
}
if(legendsFindText('Родник иссяк')) {
legendsLink(legendsFindLink("Сразу в бой"), 12/speed);
}
}
if(legendsFindText("ПОХОД ЗАВЕРШЕН")) {
//legendsLink(legendsFindLink("В город"), 1000/speed);

}
}
if(legendsFindText("Приключения")) {
legendsLink(legendsHrefLink("water"), 50/speed);
legendsLink(legendsFindLink("Обновить"), 3000/speed);
if(legendsFindText("Награда")) {
legendsLink(legendsFindLink("Обновить"), 50/speed);
}
}
}
if(fk == "1") { //пустошь
if(legendsFindText('Оренгольд')) {
if(legendsFindLink('Пустошь')) {
typel='link';
namel='Пустошь';
}
}
if(legendsFindText('Пустошь')) {
if(legendsFindLink('Создать бой')) {
typel='link';
namel='Создать бой';
}
if(legendsFindText('Режим боя')) {
legendsSelect('mode', '0');
legendsSelect('min_level', '0');
legendsSelect('max_level', pus2);
typel='button';
namel='Создать бой';
}
if(legendsFindText('Ждут начала')) {
if(legendsFindLink('Обновить')) {
legendsLink(legendsFindLink("Обновить"), 10000);
}
if(legendsFindLink('Начать бой!')) {
typel='link';
namel='Начать бой!';
}
}
}
if(legendsFindLink('Выйти из боя')) {
typel='link';
namel='Выйти из боя';
}
if(legendsFindText('Противники')) {
typel='button';
namel='Атаковать';
if(legendsFindLink('Обновить')&&!legendsFindText('Общий чат')) legendsLink(legendsFindLink("Обновить"), 3000);
}
}



if(typel=="link") legendsLink(legendsFindLink(namel), 1000/speed);
if(typel=="links") legendsLink(legendsFindLinks(namel), 1000/speed);
if(typel=="url") legendsLink(namel, 1000/speed);
if(typel=="button") legendsClick(namel, 1000/speed);
}
}
)();
