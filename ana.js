let d=new Date();
var s=d.getSeconds(),m=d.getMinutes(),h=d.getHours();
var a=s*6,b=((m*6)+(s*1/10)),c=((h*30)+(m*1/2)+(s*1/120));
setInterval(abc,1000);
function abc()
{
  a=a+6;
  b+=1/10;
  c+=1/120;
  document.querySelector("#ma").play();
document.querySelector("#d4").style.transform="rotate("+ a +"deg)";
document.querySelector("#d3").style.transform="rotate("+ b +"deg)";
document.querySelector("#d2").style.transform="rotate("+ c +"deg)";


console.clear();

console.log(h+":"+m+":"+s);
console.log(c);
if(a>=360)
{a=0;}
if(b>=360)
{b=0;}
if(c>=720)
{c=0;}

}
