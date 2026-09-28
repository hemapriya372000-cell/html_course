// var name;
// var name1='Priya' //char,strib
let name1 = 'priya';
name1 = 'hema';
let age = 20;
let adminname = null;
console.log(`user name is ${name1} and age is ${age}`);
console.log(typeof (20 + 30 + true));
console.log(20 + 30 + { age: 24 }) - 50 + '1';
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Number('hema'));
let num1 = 20;
// console.log('1o' == 10, '1' === true, 2>1>3<true>false</true>)

//2>1 true>0 1>3 false 0<1 true 1>0 true
//== tr
num1++;
--num1;
let num2 = num1--; // -- 20
// let num2=++num1 //-num1-- 1+num1 --21 --21
let num3 = num1++; // -- 20
// 0,1,
let studentMarks = [
  { name: 'hema', marks: 20 }, //0
  { name: 'priya', marks: 30 },
  { name: 'sneha', marks: 40 },
];
let studentObject = {
  name: 'Hema',
  marks: 20,
};
let key = 'marks';
console.log(studentMarks[0][key]); // {name: 'hema', marks: 20}

'Nan' + 5;
// -NaN5

let name = 'Hema'; //tdz
name = 'hema1';
console.log(name);
// var name1='Priya'
const name2 = 'admin'; //tdz
console.log(name2);
// let age = [20,30,40,50];
let marks = 'this is marks';

console.log(Number(marks) + 5); //Nan  not a number
{
  let name = 'hema';
}
console.log(name);
// display();
//function declaration
function keys(data) {
  // let age = 19;
  // let age1 = 20; //unddefined
  // let gender = 'female';
  // if (age1 <= 18) {
  //   // false && true = false
  //   console.log('age below 19');
  // } else if (age1 > 18 && age1 <= 45) {
  //   console.log('age between 19 and 45');
  // } else {
  //   console.log('not within the age limit');
  // }
  return data
}
var display1 = undefined;
//function expressoion
// let display1 = function () {
//   console.log('function created with variable');
// };
// display1();
// function using arrow function -- =>
let display2 = () => {
  console.log('function created with variable');
};

let array=[20,30,40,50]
// array[0]
//array.length = 4
// console.log(1)
for (let i = 0; i < array.length; i++) {
  // console.log(array[i]) //index i -- 0,1,2,3 -- array[i] -- 20,30,40,50
}

// let i=0;
// for(;i<101;){
//   i++
//   console.log(i)
// }

for (let item of array) {
  console.log(item); //value item -- 20,30,40,50
}

let i = 5;
do {
  console.log(i, 'i less than 4');
} while (i < 4);
// {
//   console.log(i, 'i less than 4');
//   // i++
// }

// map,filter,reduce

// let array = [1, 2, 3, 4, 5, 6];

// strict equality vs loose equality
let a = 5;
let b = '5';//5
console.log(a == b); //loose equality 5 == 5 true
console.log(a === b);//strict equality false
const objdata={
  name:'Hema',
  age:25,
  marks:'35',
}
const newobj ={
  ...objdata,
  address:'xyz'
}
console.log(newobj)
Object.seal(objdata)

objdata.email = 'dummy@gmail.com'
objdata.name = 'priya'
console.log(objdata)
// freeze vs seal

// Object.seal(objdata)
// objdata.prototype,__proto__
// console.log(objdata.dummy())
const obj1={
  adress:'dummyadrres',
  phone:'0987654321',
}
const arrData=[1,2,1,3,4,5,6,7]

console.log(Object,Array,Object.prototype,Array.prototype)
console.log(Object.values(objdata))
// {
//   prototype:{}-- declare ,
//   __prot
// }
// const obj=Object.create({
//   name:'Hema'
// })
const obj =Object.assign({minimummark:'45'},objdata,obj1)
obj.email='random@gmail.com'
console.log(obj)
//spread operator -- ...
//map,filter,find,reduce
arrData.push(80)
arrData.unshift(0)
arrData.shift()

console.log(arrData)

const newArray= arrData.map(i => i*2) //returns new array
const filterdArray=arrData.filter(i => i%2===0) //[1,1]
const arrfound = arrData.find(i => i ===1) // 1
console.log(filterdArray, arrfound)
let isValid = false
arrData.forEach(i => {
 if(i ===5 || i ===7){ // includes [1,2,3].includes(5)
   isValid = true
 }
})
let role = 'admin' // role -- admin, user, client,developer
let isContain=['admin','user','client','developer'].includes(role) // true or false
console.log(isContain)

function dummy(){
  console.log('dummy called')
}
 const funccallled= dummy()
 console.log(funccallled)
 //spread operator vs rest operator -- ...
// pure function
function add(first, second, ...remaining){
  let result = first+second
  console.log(remaining)
  return result
}
const addValue = add(30,40,50,60,70,80)
const addValue1 = add(50,40)
console.log(addValue,addValue1)
//impure function
function randomValue(){
  const random=Math.random()
  return random
}
console.log(randomValue())

// slice vs splice

const arrData1=[1,2,1,3,4,5,6,7] // slice - does not modify orignal array, returns new array

const splicedArray = arrData1.slice(1,3)
console.log(splicedArray)
//splice - modifies original array
// arrData1.splice(4 , 2,8,9,10,11,12)
console.log(arrData1)
const joinedArray=arrData1
console.log(joinedArray)
let str = 'john/"s' // -- [a,be,]
let convertedArray = str.split('/')
console.log(convertedArray, convertedArray.join(''))
const reducedVaue=arrData1.reduce((acc,cur)=> acc+cur,0) // --0,1 =1, 1,2= 3, 3,1 = 4
console.log(reducedVaue)

const boolValues = [2,2,2,2,2]
 console.log(boolValues.every(i=> i === 2 ))
const loopedArray  = [1,2,3,[4,5,6,[7,8,9]]] // -- [1,2,3,4,5,67,8,9]
console.log(loopedArray.flat(Infinity))

 

// pass by value vs passs by reference

let firstStr= 'first'
let copiedStr= firstStr; //'first
firstStr = 'second'
console.log(firstStr,copiedStr)
 // firststr - first , copiedtr - 'first
 //obj8 - address1 -- copiedobj --  address1 , obj -- {} - addresss2
 
let obj8 = {
  name:'John'
}

let copiedObj = obj8

obj8.name ='doe'

console.log(obj8,copiedObj)
