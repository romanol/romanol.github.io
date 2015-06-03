// ==Userscript==
// @name Kolonisty
// @description kolo
// @author Deimon
// @include http://kolonisty.ru/*
// ==/Userscript==
(function(){
//Настройкиcsd
var sop1=2; //шанс на подбор
var joy=1; //вывод на главной всех параметров
//localStorage.setItem('jnckvfsd', "хз");












for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("http"))
{
location.href=document.links[i].href;
}
}


var dvs=(Math.floor(Math.random() * (2 - 1 + 1)) + 1);




var sbor = localStorage.getItem('sbor');
if(sbor=="yes")
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("На главную"))
{
location.href=document.links[i].href;
}
}

kk=0;
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("атаковать"))
{
var go = document.forms[q].elements[y];
setTimeout(function(){location.href=go.click();}, num);
kk=1;

}
}
}

//var mk2=(Math.floor(Math.random() * (2 - 1 + 1)) + 1);
//if(mk2==1)
//{

for(var i=0;i<document.getElementsByTagName("a").length;i++)
{
if (document.getElementsByTagName("a")[i].innerHTML.match("Сбор:"))
{
var num=(Math.floor(Math.random() * (44 - 1 + 1)) + 1)*1000;
//num=1;
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num);
}
}




//}
//else
//{





for(var i=0;i<document.getElementsByTagName("a").length;i++)
{
if (document.getElementsByTagName("a")[i].innerHTML.match("Существа")&&kk==0)
{
//var go = document.getElementsByTagName("a")[i];
//location.href=go.href; break;
}
}




//}



}


var auta = localStorage.getItem('auta');
if(auta=="yes")
{
var num=(Math.floor(Math.random() * (15 - 1 + 1)) + 1)*100;
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("воин"))
{
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num);}
}
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("кастовать"))
{
//kk=1;
//document.forms[q].elements[y].click();
}
}
}
kk=0;
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("атаковать"))
{
kk=1;
//num=1;
var go = document.forms[q].elements[y];
setTimeout(function(){location.href=go.click();}, num);
;
}
}
}
//var bbb=(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
//i=bbb*2;
//do {
//if (document.links[0].text.match("ур"))
//{
//document.getElementsByTagName("a")[i].click();
//location.href=document.links[i].href;


//}


var cj=0;

var cjs=0;
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("стрелок")||document.links[i].text.match("воин"))
{
cjs=1;
//location.href=document.links[i].href; break;
}
}
var xsvds=0;
if(cjs==0)
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("3"))
{
var xsvds=1;
//location.href=document.links[i].href; break;
}
}
}
if(xsvds==0)
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("2"))
{
//location.href=document.links[i].href; break;
}
}
}


for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("ур")&&cjs==0)
{
//num=1;
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num); break;
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Существа")&&kk==0)
{
//num=1;
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num);
}
}
}






var autp = localStorage.getItem('autp');
if(autp=="yes"){
if(dvs==1)
{
var num=(Math.floor(Math.random() * (15 - 1 + 1)) + 1)*100;

for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Вещи под ногами"))
{
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num);
}
}
}
var num=(Math.floor(Math.random() * (15 - 1 + 1)) + 1)*100;

var xj = localStorage.getItem('xj');
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Забрать всё"))
{
var go = document.getElementsByTagName("a")[i];
setTimeout(function(){location.href=go.href;}, num);
localStorage.setItem('xj', 'yes');
}
}
if(xj=="yes")
{
localStorage.setItem('xj', 'no');
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("На главную"))
{
location.href=document.links[i].href;
}
}
}
}





var vamn="";

if(joy==11)
{
//line=document.getElementsByClassName("line")[0];
//if(sbor=="yes")
//vamn="Сбор -  ";
//if(auta=="yes")
//vamn+="Бой - ";
//if(autp=="yes")
//vamn+="Вещь - ";
//lline=line.innerHTML;
//line.innerHTML=vamn+""+lline;
}





//Подцепление клавиш
document.onkeydown=function(e) {
e=e||event;


if(e.keyCode==80)//h
{
localStorage.setItem('terrainA', 0);
localStorage.setItem('terrainB', 11);
localStorage.setItem('magazine', 0);
localStorage.setItem('jnckcdvfsd', "хз");
localStorage.setItem('dange', 0);
localStorage.setItem('dangev', 0);
localStorage.setItem('hohod', 1);
}





//Биение:
if(e.keyCode==70)//h
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].href.match("blok=pluseg&do=1"))
{
location.href=document.links[i].href; break
}
}
}
if(e.keyCode==71)//h
{
if (document.links[0].text.match("ур"))
{
location.href=document.links[2].href;
}
}
if(e.keyCode==72)//h
{
if (document.links[0].text.match("ур"))
{
location.href=document.links[4].href;
}
}
if(e.keyCode==74)//h
{
if (document.links[0].text.match("ур"))
{
location.href=document.links[6].href;
}
}
if(e.keyCode==75)//h
{
if (document.links[0].text.match("ур"))
{
location.href=document.links[8].href;
}
}
if(e.keyCode==76)//h
{
if (document.links[0].text.match("ур"))
{
location.href=document.links[10].href;
}
}








//Ресурс вкл 3
if(e.keyCode==51)//h
{
localStorage.setItem('sbor', 'yes');
localStorage.setItem('auta', 'no');
}
//Ресурс выкл E
if(e.keyCode==69)//h
{
localStorage.setItem('sbor', 'no');
}
//Автобой выкл q
if(e.keyCode==81)//q
{
localStorage.setItem('auta', 'no');
}
//Автобой ВКЛ 1
if(e.keyCode==49)//1
{
localStorage.setItem('auta', 'yes');
localStorage.setItem('sbor', 'no');
}

if(e.keyCode==72)//q
{
localStorage.setItem('autd', 'yes');
}
if(e.keyCode==74)//q
{
localStorage.setItem('autd', 'no');
}
//Автоподбор ВКЛ 2
if(e.keyCode==50)//2
{
localStorage.setItem('autp', 'yes');
}
//Автоподбор выкл W
if(e.keyCode==87)//w
{
localStorage.setItem('autp', 'no');
}
if(e.keyCode==192)//W
{
//location.href="http://kolonisty.ru/main.php?blok=ekipir&bl=1&do=1&doo=1&list=&wher=&idm=6182&rnd=4666080";
}
//Кнопка "Обновить" (zZ)
if(e.keyCode==90)//W
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Обновить"))
{
location.href=document.links[i].href;
}
}
}
if(e.keyCode==84)//S
{
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("сменить"))
{
kk=1;
document.forms[q].elements[y].click();
}
}
}

}
if(e.keyCode==89)//D
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Да"))
{
location.href=document.links[i].href; break;
}
}
}
if(e.keyCode==78)//D
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Нет"))
{
location.href=document.links[i].href; break;
}
}
}

if(e.keyCode==71)//D
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Выход"))
{
location.href=document.links[i].href; break;
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Логово грызлеров"))
{
location.href=document.links[i].href; break;
}
}
}



if(e.keyCode==84)//D
{
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("пропуск хода"))
{
kk=1;
document.forms[q].elements[y].click();
}
}
}
}
var kk=0;
//Полуавтоматический бой. Нажатие на (A)
if(e.keyCode==65)//S
{
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("атаковать"))
{
kk=1;
document.forms[q].elements[y].click();
}
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("ур"))
{
location.href=document.links[i].href; break;
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("воин"))
{
//location.href=document.links[i].href; break;
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Существа")&&kk==0)
{
location.href=document.links[i].href;
}
}

}





if(e.keyCode==38)//W
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("идти на север"))
{
location.href=document.links[i].href;
}
}
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("атаковать"))
{
document.forms[q].elements[y].click();
}
}
}
}
if(e.keyCode==40)//S
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("идти на юг"))
{
location.href=document.links[i].href;
}
}
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("атаковать"))
{
document.forms[q].elements[y].click();
}
}
}
}
if(e.keyCode==37)//A
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("идти на запад"))
{
location.href=document.links[i].href;
}
}
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value=="<<<")
{
document.forms[q].elements[y].click();
}
}
}
}
if(e.keyCode==39)//D
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("идти на восток"))
{
location.href=document.links[i].href;
}
}
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value==">>>")
{
document.forms[q].elements[y].click();
}
}
}
}



//Сбор ресурсов Xx
if(e.keyCode==88)//Q
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Сбор:"))
{
location.href=document.links[i].href;
}
}
}



//Вещи под ногами (C)
if(e.keyCode==67)//W
{
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Вещи под ногами"))
{
location.href=document.links[i].href;
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Забрать всё"))
{
location.href=document.links[i].href;
}
}
}


//Кастовать (S)
if(e.keyCode==83)//S
{
for(var q=0;q<document.forms.length;q++)
{
for(var y=0;y<document.forms[q].elements.length;y++)
{
if (document.forms[q].elements[y].value.match("кастовать"))
{
document.forms[q].elements[y].click();
}
}
}
for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Атаковать всех"))
{
location.href=document.links[i].href; break;
}
}
}
}








document.body.style="font-size:18px;font-family: comic sans ms; background-color:#b0b0b0; margin: 1px 1px 1px 1px;color: #101010;";


for(var i=0;i<document.links.length;i++)
{
if (document.links[i].text.match("Новая почта"))
{
document.body.style="font-size:18px;font-family: comic sans ms; background-color:#a0a0a0; margin: 1px 1px 1px 1px;color: #101010;";
}
}



}
)();
