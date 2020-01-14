$(document).ready(function()
{

let equation1 = document.getElementById("equation1");
let equation2 = document.getElementById("equation2"); 
let equation3 = document.getElementById("equation3");
let equation4 = document.getElementById("equation4");
let equation5 = document.getElementById("equation5");
    
function getRandomInt(max) {
    
  return Math.floor(Math.random() * Math.floor(max));
}
var b1 = getRandomInt(4);

if (b1 === 0){
        b1 = 1;
    }
var c1 = getRandomInt(-5);
if (c1 === 0) {
        c1 = 1;
    }
var b2 = getRandomInt(10);

if (b2 === 0){
        b2 = 1;
    }
var c2 = getRandomInt(5);
if (c2 === 0) {
        c2 = 1;
    }
var b3 = getRandomInt(10);

if (b3 === 0){
        b3 = 1;
    }
var c3 = getRandomInt(-5);
if (c3 === 0) {
        c3 = 1;
    }
var b4 = getRandomInt(15);

if (b4 === 0){
        b4 = 1;
    }
var c4 = getRandomInt(-10);
if (c4 === 0) {
        c4 = 1;
    }
var b5 = getRandomInt(15);

if (b5 === 0){
        b5 = 1;
    }
var c5 = getRandomInt(10);
if (c5 === 0) {
        c5 = 1;
    }
    
equation1.innerHTML = "1) Знайдіть корені рівняння x²" + "+" + b1 + "x"  + c1 + "=0;" + " та запишіть їх через кому у порядку зростання.";
equation1.style.fontSize = "25px";
equation2.innerHTML = "2) Знайдіть корені рівняння x²" + "+" + b2 + "x" + "+" + c2 + "=0;" + " та запишіть їх через кому у порядку зростання.";
equation2.style.fontSize = "25px";
equation3.innerHTML = "3) Знайдіть найменший корінь рівняння x²" + "+" + b3 + "x" + c3 + "=0;" + " та запишіть його.";
equation3.style.fontSize = "25px";
equation4.innerHTML = "4) Знайдіть значення виразу х1*х2 для рівняння x²" + "+" + b4 + "x" + c4 + "=0;" + " та запишіть відповідь.";
equation4.style.fontSize = "25px";
equation5.innerHTML = "5) Визначте кількість коренів рівняння x²" + "+" + b5 + "x" + "+" + c5 + "=0;" + " та запишіть відповідь.";
equation5.style.fontSize = "25px"; 
let D1 = b1*b1 - 4*c1;
let D2 = b2*b2 - 4*c2;
let D3 = b3*b3 - 4*c3;
let D4 = b4*b4 - 4*c4;
let D5 = b5*b5 - 4*c5;
   
D1 = D1.toFixed(3);
D2 = D2.toFixed(3);
D3 = D3.toFixed(3);
D4 = D4.toFixed(3);
D5 = D5.toFixed(3);
   
let x1 = ((-b1+Math.sqrt(D1))/2);
let x2 = ((-b1-Math.sqrt(D1))/2);
    
let x3 = ((-b2+Math.sqrt(D2))/2);
let x4 = ((-b2-Math.sqrt(D2))/2);
    
let x5 = ((-b3+Math.sqrt(D3))/2);
let x6 = ((-b3-Math.sqrt(D3))/2);

let x7 = ((-b4+Math.sqrt(D4))/2);
let x8 = ((-b4-Math.sqrt(D4))/2);
   
let answer1 = x1.toFixed(3) + ", " + x2.toFixed(3);
let answer2;
let answer3;
let answer4 = x7*x8;
let answer5;
    
answer4 = answer4.toFixed(3);
    
if (D2 < 0)
    {
        answer2 = "Корені відсутні";
    } else {
        answer2 = x3.toFixed(3) + ", " + x4.toFixed(3); 
    }
if (x5 > x6)
    {
        answer3 = x6.toFixed(3);
    } else {
        answer3 = x5.toFixed(3);
    }
if (D5 > 0)
    {
        answer5 = 2;
    } else if (D5 == 0)
        {
            answer5 = 1;
        } else {
            answer5 = 0;
        }
    rcalc.onclick = function()
{
    let sum = 0;
    var form2 = this.form;
    if (form2.ransw1.value == answer1)
        {
            sum++;
        }
    if (form2.ransw2.value == answer2)
        {
            sum++;
        }
    if (form2.ransw3.value == answer3)
        {
            sum++;
        }
    if (form2.ransw4.value == answer4)
        {
            sum++;
        }
    if (form2.ransw5.value == answer5)
        {
            sum++;
        }
    form2.rresult.value = sum;
}
});