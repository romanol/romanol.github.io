// ==Userscript==
// @name legendsgame_bot
// @description бот для этих
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http://velikozemie.ru/*
// ==/Userscript==
(function(){
var i=0;
var tx='';
speed=100000;
ves =1;
exit = 11;
ok = 11;
kkk = ''; //Выбросить
zapis = "post"; //post or map
uu = 11000;
kast=0;

mmm = localStorage.getItem('mmmp');
if(mmm=="1"||mmm==1)
{
exit=1;
}


function legendsCoord(hh) {
for(var i=0;i<document.getElementsByTagName('b').length;i++)
{
if(document.getElementsByTagName('b')[i].innerHTML.match("/"))
{
var sdf=document.getElementsByTagName('b')[i].innerHTML;
var hgf=sdf.split('/');
y=parseInt(hgf[0]);
x=parseInt(hgf[1]);
i=document.getElementsByTagName('b').length;
}
}
if(hh=="x") {return x;} if(hh=="y") {return y;}
}




function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}



function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}

function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
if(kkk!='') legendsLink(legendsFindLink(kkk), 500/speed);
if(kkk == "Выбросить") {
legendsLink(legendsFindLink('книга'), 500/speed);
legendsLink(legendsFindLink('Свиток'), 500/speed);
}

function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
if(ok == 1) legendsClick("OK", 100/speed);
if(exit == 1) legendsLink(legendsFindLink("На главную"), 500/speed);
if(legendsFindText('Сейчас в игре')) {
if(legendsFindText('Admin')) {
localStorage.setItem('program', 'false');
}
}
if(legendsFindText('Раунд 4')) {
//localStorage.setItem('program', 'false');
}
if(legendsFindText('Перегруз')) {
localStorage.setItem('program', 'false');
}
if(legendsFindText('маны')) {
localStorage.setItem('program', 'false');
}
if(legendsFindText(' бан ')) {
localStorage.setItem('program', 'false');
}
if(legendsFindLink('почта')) {
localStorage.setItem('program', 'false');
}

if(legendsFindText("Экипировка")) {

}
function legendsStart() {
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Герой"))
{
heroname = document.getElementsByTagName("b")[0].innerHTML;
localStorage.setItem('heroname', heroname);
}
else
heroname = localStorage.getItem('heroname');
}
for(var i=0;i<document.getElementsByTagName('div').length;i++)
{
if(document.getElementsByTagName('div')[i].title.match("%"))
{
var percent=document.getElementsByTagName('div')[i].title;
localStorage.setItem('percent', percent);
}
else
{
percent = localStorage.getItem('percent');
}
}

f = document.body.innerHTML;
d='<div id="sa" style="width: 100%; background: #000000; color: #ffffff; height: 20px; border-bottom: 2px solid #ff0000;">'+heroname+', '+percent+', x: '+legendsCoord('x')+' & y: '+legendsCoord('y')+' m = <b id="program">0</b></div>';
document.body.innerHTML=d+f;
}
proo = '';
legendsStart();
legendsI("program", localStorage.getItem('program'));
document.onkeydown=function(e) {
e=e||event;
m = localStorage.getItem('program');

if(e.keyCode==49) {if(m=="откл"||m=="") {localStorage.setItem('program', 'figth'); legendsI("program", "PvE");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}} //Вкл бот 1

if(e.keyCode==50) {if(m=="откл"||m=="") {localStorage.setItem('program', 'auto'); localStorage.setItem('fh', 1); legendsI("program", "auto");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}

if(e.keyCode==51) {if(m=="откл"||m=="") {localStorage.setItem('program', 'лесоруб');  legendsI("program", "лесоруб");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}

if(e.keyCode==52) {if(m=="откл"||m=="") {localStorage.setItem('uu', uu);localStorage.setItem('map', 0); legendsSet('vely', ''); localStorage.setItem('mmmp', 0); localStorage.setItem('ddd', 'первая'); localStorage.setItem('m', 1);legendsI("program", "обнл");} else {localStorage.setItem('map', 1);localStorage.setItem('program', "откл");legendsI("program", "откл");}}

if(e.keyCode==53) {if(m=="откл"||m=="") {localStorage.setItem('program', 'собиратель');  localStorage.setItem('mmmp', 1); legendsI("program", "собиратель");} else {localStorage.setItem('program', "откл");legendsI("program", "откл");}}

if(e.keyCode==54) {
 if(m=="откл"||m=="") {
  localStorage.setItem('program', 'запись'); 
  localStorage.setItem('lbo', 'l'); 
  localStorage.setItem('lbo9', "");
  localStorage.setItem('lbo8', "");
  localStorage.setItem('lbo7', "");
  legendsI("program", "запись");
 } else {
  localStorage.setItem('program', "откл");
  legendsI("program", "откл");
 }
}
if(e.keyCode==48) {
lbo = localStorage.getItem('lbo');
lbo7 = localStorage.getItem('lbo7');
lbo8 = localStorage.getItem('lbo8');
lbo9 = localStorage.getItem('lbo9');
if(zapis == "map") alert(lbo);
if(zapis == "post") alert(lbo9+' / '+lbo8+' / '+lbo7);
}
mkl = localStorage.getItem('program');
if(mkl == "запись") {
if(zapis == "post") {
lbo7 = localStorage.getItem('lbo7');
lbo8 = localStorage.getItem('lbo8');
lbo9 = localStorage.getItem('lbo9');
if(e.keyCode==68) {
localStorage.setItem('lbo9', lbo9+"'в', ");
localStorage.setItem('lbo8', lbo8+"'"+legendsCoord('x')+"', ");
localStorage.setItem('lbo7', lbo7+"'"+legendsCoord('y')+"', ");
legendsLink(legendsFindLink("Boc"), 1000/speed);
}
if(e.keyCode==65) {
localStorage.setItem('lbo9', lbo9+"'з', ");
localStorage.setItem('lbo8', lbo8+"'"+legendsCoord('x')+"', ");
localStorage.setItem('lbo7', lbo7+"'"+legendsCoord('y')+"', ");
legendsLink(legendsFindLink("Зaп"), 1000/speed);
}
if(e.keyCode==83) {
localStorage.setItem('lbo9', lbo9+"'ю', ");
localStorage.setItem('lbo8', lbo8+"'"+legendsCoord('x')+"', ");
localStorage.setItem('lbo7', lbo7+"'"+legendsCoord('y')+"', ");
legendsLink(legendsFindLink("Югъ"), 1000/speed);
}
if(e.keyCode==87) {
localStorage.setItem('lbo9', lbo9+"'с', ");
localStorage.setItem('lbo8', lbo8+"'"+legendsCoord('x')+"', ");
localStorage.setItem('lbo7', lbo7+"'"+legendsCoord('y')+"', ");
legendsLink(legendsFindLink("Ceв"), 1000/speed);
}
} 
if(zapis == "map") {
lbo = localStorage.getItem('lbo');
if(e.keyCode==68) {
localStorage.setItem('lbo', lbo+'в');
legendsLink(legendsFindLink("Boc"), 1000/speed);
}
if(e.keyCode==65) {
localStorage.setItem('lbo', lbo+'з');
legendsLink(legendsFindLink("Зaп"), 1000/speed);
}
if(e.keyCode==83) {
localStorage.setItem('lbo', lbo+'ю');
legendsLink(legendsFindLink("Югъ"), 1000/speed);
}
if(e.keyCode==87) {
localStorage.setItem('lbo', lbo+'с');
legendsLink(legendsFindLink("Ceв"), 1000/speed);
}
}
} else {
if(e.keyCode==68) {
legendsLink(legendsFindLink("Boc"), 1000/speed);
}
if(e.keyCode==65) {
legendsLink(legendsFindLink("Зaп"), 1000/speed);
}
if(e.keyCode==83) {
legendsLink(legendsFindLink("Югъ"), 1000/speed);
}
if(e.keyCode==87) {
legendsLink(legendsFindLink("Ceв"), 1000/speed);
}
}

if(e.keyCode==81) { //Q
if(legendsFindLink("Вещи под ногами")!="") {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 300/speed);
}
}

if(e.keyCode==82)
{
legendsLink(legendsFindLink("добывать руду"), 1000/speed);
legendsLink(legendsFindLink("косить траву"), 1000/speed);
legendsLink(legendsFindLink("рубить деревья"), 1000/speed);
legendsLink(legendsFindLink("осмотреть местность"), 1000/speed);
}



}
m = localStorage.getItem('program');
if(m == "запись") {
lcx = localStorage.getItem('lcx');
lcy = localStorage.getItem('lcy');
lbb = localStorage.getItem('lbb');
lbo = localStorage.getItem('lbo');
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 1000/speed);
}
if(legendsFindText("Цель")) {
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
}
if(legendsFindLink("Вещи под ногами")!=""&&ves==1) {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 700/speed);
}
}
if(m == "figth") {
uuuu = 1992;
if(uuuu==1992) {
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 300/speed);
}
if(legendsFindText("Цель")) {
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
}
if(legendsFindLink("Вещи под ногами")!=""&&ves==1) {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 300/speed);
}
} else {
if(legendsFindText("убил")) {
legendsLink('http://velikozemie.ru/main.php?blok=ekipir&doo=1&dooo=1&idm=62580&rnd=773590', 700/speed);
}
if(legendsFindText("Экипировка")) {
legendsLink(legendsFindLink("На главную"), 300/speed);
}
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 300/speed);
}
if(legendsFindText("Ослабление")) {
legendsLink(legendsFindLink("Обновить"), 5000);
} else {
if((legendsCoord('y')%2==0)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Ceв"), 50000/speed);
}
if((legendsCoord('y')%2==1)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Югъ"), 50000/speed);
}
}

if(!legendsFindText("Раунд 1")||legendsFindText("Предмет")) {
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
} else
{
if(legendsFindText("Цель")&&!legendsFindText("Предмет")) {
legendsClick("сменить оружие", 1000/speed);
legendsLink(legendsFindLink("4600"), 1000/speed);
}
}
}
}
if(m == "собиратель") {
if(legendsFindText('Рейтинг')&&legendsFindText('Уровень')&&legendsFindLink('Герой')) {

}


}
if(m == "лесоруб") {
if(legendsFindText("Идёт бой")) {
l=0;

for(i=0;i<document.links.length;i++){
if(document.links[i].text.match('Атакует')) {
l=document.links[i].innerHTML; 
localStorage.setItem('lll', l);
break;
}
}
if(l==0) {
l = localStorage.getItem('lll');
}
d=document.body.innerHTML;
document.body.innerHTML=d+'<div style="width:100%;height:100%;background:#ffffff;color:#000000;font-size: 80pt;position:fixed;top:0;left:0;">'+l+'</div>';
document.onkeydown=function(e) {
e=e||event;
if(e.keyCode==80) {
legendsLink(legendsFindLink("Атакует"), 300/speed);
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
}
}

}
if(legendsFindLink('Местность')) {
l=0;
for(i=0;i<document.links.length;i++){
if(document.links[i].text.match('Местность')) {
l=document.links[i].innerHTML; 
localStorage.setItem('lll', l);
break;
}
}
if(l==0) {
l = localStorage.getItem('lll');
}

d=document.body.innerHTML;
document.body.innerHTML=d+'<div style="width:100%;height:100%;background:#ffff99;color:#000000;font-size: 80pt;position:fixed;top:0;left:0;">'+l+'</div>';

}
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
if(legendsFindLink("Вещи под ногами")!=""&&ves==1) {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 300/speed);
}
}
if(m == "auto") {
oi = 1;
if(oi==2) {
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 1000/speed);
}
if(legendsFindText("Цель")) {
if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);
}
if((legendsCoord('y')%2==0)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Ceв"), 50000/speed);
}
if((legendsCoord('y')%2==1)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Югъ"), 50000/speed);
}

if((legendsFindLink('косить траву')||legendsFindLink('добывать руду')||legendsFindLink('рубить деревья'))&&!legendsFindText("Ты добыл")&&!legendsFindText("Нельзя добывать")&&!legendsFindText("Надо отдохнуть")) {
legendsLink(legendsFindLink("рубить деревья"), 900/speed);
legendsLink(legendsFindLink("добывать руду"), 900/speed);
legendsLink(legendsFindLink("косить траву"), 900/speed);
}
if(legends(0,2) == 0) {
if(legendsFindLink("Вещи под ногами")!="") {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 300/speed);
}
}
}  else {
uuu = localStorage.getItem('uu');
parseInt(uuu);
if(legendsFindText('убил')) {
yya=uuu-1;
localStorage.setItem('uu', yya);
}
var monster = new Array();
monster[0] = "Ледяной воcлк ";monster[1] = "Снежный крcаб ";monster[2] = "Белый медвеcдь ";monster[3] = "Снежный голем ";monster[4] = "Ледяной изверг ";monster[5] = "Снежный призрак ";monster[6] = "Ледяной тролль ";monster[7] = "Замёрзший ";monster[8] = "Белый скелет ";monster[9] = "Блуждающая душа ";monster[10] = "Белая молния ";monster[11] = "Ледяной монстр ";monster[12] = "Ледяной убийца ";monster[13] = "Морозный призрак ";monster[14] = "Призрак чудовища ";monster[15] = "щслывщлсщлщлсщл";monster[16] = "Валтар ";monster[17] = "щслывщлсщлщлсщл";monster[18] = "щслывщлсщлщлсщл";monster[19] = "щслывщлсщлщлсщл";monster[20] = "Призрак Красного Корсара ";monster[21] = "щслывщлсщлщлсщл";monster[22] = "щслывщлсщлщлсщл";monster[23] = "щслывщлсщлщлсщл";monster[24] = "Призрак Адмирала ";monster[25] = "Страж цитадели ";monster[26] = "Страж-воин башни ";monster[27] = "Страж-маг башни ";monster[28] = "Бейлор ";monster[29] = "Древний Вампир ";monster[30] = "Дух Велара ";monster[31] = "Морской Дьявол ";monster[32] = "Бессмертный Страж ";monster[33] = "Великий Вампир ";monster[34] = "щслывщлсщлщлсщл";
uuu = localStorage.getItem('uu');
uuu = parseInt(uuu);
if(uu!=0&&!legendsFindLink("воскр")) {
if(uuu<=uu&&uuu>0) {
if((legendsCoord('y')%2==0)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Ceв"), 50000/speed);
}
if((legendsCoord('y')%2==1)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Югъ"), 50000/speed);
}
}
} else {
if(!legendsFindLink("воскр")) {	
if((legendsCoord('y')%2==0)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Ceв"), 50000/speed);
}
if((legendsCoord('y')%2==1)&&typeof(legendsCoord('y'))=="number") {
legendsLink(legendsFindLink("Югъ"), 50000/speed);
}
}
}
if(legendsFindText("Идёт бой")) {
legendsLink(legendsFindLink("Атакует"), 1000/speed);

f=0;
for(ko=0;ko<=34;ko++) {
if(legendsFindText(monster[ko])) {
f=2;
	break;
}
}
if(f==0) {if(kast == 0) legendsClick("выстрелить", 1000/speed);
if(kast == 1) legendsClick("кастовать", 1000/speed);}
}
if(legendsFindLink("Вещи под ногами")!="") {
legendsLink('http://velikozemie.ru/main.php?blok=veschy&do=2', 300/speed);
}





}
legendsLink(legendsFindLink("На главную"), 500/speed);
}

if(legendsFindText("Входящие писxьма")) window.history.go(-1);


legendsLink(legendsFindLink("velikozemie"), 2000);

}
)();
