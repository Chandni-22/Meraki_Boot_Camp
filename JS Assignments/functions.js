// function vote(name,age){
//     if(age>=18){
//         console.log(`You can vote ${name}.`)
//     }else{
//         console.log(`Hey ${name}, you can't vote, your age is ${age}!`);
//     };
// }

// vote("Chandni",20)
// vote("Eram",17)

//<----------------------Date: 11/04/2024.-------------------->

/*Q-1.) Given length and breadth of a rectangle, return the area of the rectangle.*/
// function printArea(length,breadth){
//     return `Area of rectangle is ${length*breadth}.`;    
// };

// console.log(printArea(23,12));

/*Q-2.) Take a number and print the square of the number.*/
// function printSquare(number){
//     return `Square of ${number} is ${number**2}.`;    
// };

// console.log(printSquare(4));

/*Q-3.) Take two numbers and only print the integer part when a is divided by b.*/
// function printIntegerPart(a,b){
//     let result=Math.floor(a/b);
//     console.log(`Integer part when ${a} is divided by ${b} is ${result}.`);
// };

// printIntegerPart(17,3);

/*Q-4.) Take a number and print out the last digit of the number.*/
// function printLastDigit(number){
//     return `Last digit of ${number} is ${number%10}.`;
// };

// console.log(printLastDigit(34));

/*Q-5.) Take a number and find the cube of that number.*/
// function printCube(number){
//     return `Cube of ${number} is ${number**3}.`;    
// };

// console.log(printCube(5));

/*Q-6.) Take a 3 digit number and print the reverse of that number. Ex- 235 = 532.*/
// function printReverse(number){
//     if(number>=100 && number<=999){
//         let rev_number=number;
//         let rev=0;
//         while(rev_number>0){
//             let a=rev_number%10;
//             rev=(rev*10)+a;
//             rev_number=Math.floor(rev_number/10);
//         };
//         return `Reverse of ${number} is ${rev}.`;
//     }else;{
//         return "Invalid number."
//     };
// };

// console.log(printReverse(567));

/*Q-7.) Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7.*/
// function printFirstDigit(number){
//     let s=String(number);
//     let firstDigit=s[0];
//     return `First digit of ${number} is ${parseInt(firstDigit)}.`;
// };

// console.log(printFirstDigit(456));

/*Q-8.) Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7.*/
// function printSum(number){
//     let s=String(number);
//     let firstDigit=parseInt((s)[0]);
//     let lastDigit=parseInt((s)[s.length-1]);
//     return `The sum of the first and last digit of ${number} is ${firstDigit+lastDigit}.`;
// };

// console.log(printSum(675));

/*Q-9.) Take salary of five employees and print the average salary of all the employees.*/
// function printAverageSalary(emp_1,emp_2,emp_3,emp_4,emp_5){
//     let Average=(emp_1+emp_2+emp_3+emp_4+emp_5)/5;
//     return `The average salary of all the 5 employees is ${Average}.`;
// };

// console.log(printAverageSalary(50000,30000,67000,96000,70000));

/*Q-10.) Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;*/
// function printSwap(a,b){
//     console.log(`Before swap: a=${a},b=${b}`);
//     let c=a;
//     a=b;
//     b=c;
//     return `After swap: a=${a}, b=${b}.`;
// };

// console.log(printSwap(4,5));