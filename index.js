'use strict'

//1. String.fromCharCode()
let charCode = String.fromCharCode(97, 98, 99, 100);
//console.log(charCode)//abcde

//2. String.fromCodePoint()
let codePoint = String.fromCodePoint(65, 90, 97, 98);
//console.log(codePoint)//AZab

let str = 'AHello World';
// console.log(str.charAt(10))d
// console.log(str[10])d
let indexArr = []
for(let i = 0; i < str.length; i++){
    indexArr.push(str.charCodeAt(i))
}
console.log(indexArr)