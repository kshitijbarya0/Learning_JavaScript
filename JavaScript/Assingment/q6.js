/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/
let num = 8
let sum = 0
let ini = 1
do{
    sum += ini
    ini++;
}while(ini <= sum);
console.log(`Sum form 1 to ${num} :${sum}`)