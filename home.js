//console.log("achumanatata")
//alert('hi')
//var a='store the variable'
//console.log(a)


//var age=prompt("what your age");
//document.getElementById("Write something").innerHTML=age;

var num1=50;
//Increment num1 by 1
num1=num1+1;
num1++;
//Decrement num1 by 1
num1=num1-1;
num1--;
console.log(num1)
//Divide /,multiply *,remainder %
console.log(num1%4)
//Increment or decrement whatever you want
num1+=10;
console.log(num1)

//functions
function fun()
{
    alert("function concept");

}
//call function
fun();
/* let's create a function that take in an name and says hello followed by your name */
function greeting(){
    var name=prompt("what is your name");
    var res="hello "+name;
    console.log(res)    
}
//greeting();
//how do arguments work in function
// add two numbers
function sum(a,b)
{
    var res=a+b;
    console.log(res)
}
sum(10,40);

//while loop
/*var num=3;
while(num < 100){
    num+=1;
    console.log(num);

}*/

for (let num=3;num < 100;num++){
    console.log(num)
}


var fruits="orange";
console.log(fruits.slice(2,6))


let fruitss=['apple','banana','orange','pineapple']
fruitss=new Array('apple','banana','orange','pineapple');
console.log(fruitss)

for(let i=0; i < fruitss.length;i++){
    console.log(fruitss[i])
}


console.log(fruitss.pop(),fruitss)
console.log(fruitss.push("blackberry"),fruitss)
console.log(fruitss[3]);
fruitss.shift();
console.log(fruitss)
fruitss.unshift("apple")
console.log(fruitss)


let veg=['tomato','onion','cabbage']
let allitems=fruitss.concat(veg)
console.log(allitems)

let numb=[2,5,3,7,9,4,1,6];
console.log(numb.sort())

console.log(numb.sort(function(a,b) {return b-a}))

let emptyArray=new Array();
for ( let i=0;i <=15; i++){
    emptyArray.push(i);
}
console.log(emptyArray)
var age=prompt('what is your age');
if ((age >=18) && (age <=35)){
status='target demo';
console.log(status)
}
else{
    status='no target found'
    console.log(status)
}
let vegg=['tomato','onion','cabbage']
let allitemss=fruitss.concat(vegg)
console.log(allitemss)

switch (5){
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';

}
console.log(text)