//<----------------------Date: 12/04/2024.-------------------->

/*Q-1.) Write a program that checks if a given number is even or odd.*/
// let a=20;
// let result=(a%2==0) ? `${a} is an even number.` : `${a} is a odd number.`;
// console.log(result);



/*Q-2.) Create a function that takes two numbers as parameters and returns the larger one.*/
// function largestNumber(a,b){
//     if(a>b){
//         return (`${a} is largest number.`);
//     }else if(a<b){
//         return (`${b} is largest number.`);
//     }else{
//         return ('Both are equal.');
//     };
// };

// console.log(largestNumber(36,36));



/*Q-3.) Write a function that determines if a given year is a leap year.*/
// function leapYear(year){
//     if(((year%4==0) && (year%10!=0)) || (year%100==0)){
//         return (`${year} is a leap year.`)
//     }else{
//         return (`${year} is not a leap year.`)
//     };
// };

// console.log(leapYear(2002));



/*Q-4.) Implement a program that checks whether a given character is a vowel or consonant.*/
// function vowelOrConsonant(alpha){
//     let a=String(alpha);
//     if ((a.length)==1){
//         if ((a>="a" && a<="z")||(a>="A" && a<="Z")){
//             if ((a=="a"||a=="e"||a=="i"||a=="o"||a=="u") || (a=="A"||a=="E"||a=="I"||a=="O"||a=="U")){
//                 return (`${a} is vowel.`);
//             }else{
//                 return (`${a} is consonant.`);
//             };
//         }else{
//             return ('Not an alphabet.');
//         };
//     }else{
//         return ('Invalid input.');
//     };
// };

// console.log(vowelOrConsonant("0"));



/*Q-5.)  Create a function that takes three numbers as input and returns the largest among them.*/

// function largestNumber(a,b,c){
//     let largest;
//     if (a>b){
//         largest=a;
//     }else{
//         largest=b;
//     };

//     if (largest>c){
//         return (`${largest} is largest number.`);
//     }else{
//         return (`${c} is largest number.`)
//     };
// };

// console.log(largestNumber(3,1,4));



/*Q-6.) Write a program that checks if a given number is positive, negative, or zero.*/
// let number=0;
// if (number>0){
//     console.log(`${number} is a positive number.`);
// }else if(number<0){
//     console.log(`${number} is a negative number.`);
// }else{
//     console.log(`${number} is zero.`);
// };



/*Q-7.) Implement a function that calculates the grade of a student based on their score.*/
// function grade(score){
//     if(score>=95){
//         return ('You got grade A+');
//     }else if(score>=90){
//         return ('You got grade A');
//     }else if(score>=85){
//         return ('You got grade B+');
//     }else if(score>=80){
//         return ('You got grade B');
//     }else if(score>=75){
//         return ('You got grade C+');
//     }else if(score>=70){
//         return ('You got grade C');
//     }else if(score>=65){
//         return ('You got grade D+');
//     }else if(score>=60){
//         return ('You got grade D');
//     }else if(score>=55){
//         return ('You got grade E+');
//     }else if(score>=45){
//         return ('You got grade E');
//     }else{
//         return ('You got grade F');
//     };
// };
// console.log(grade(56));



/*Q-8.) Create a program that determines if a given string is a palindrome.*/
// function palindrome(str){
//     let a=str.toLowerCase();
//     let lent=a.length;
//     let reverse='';
//     for(let i=lent-1; i>=0; i--){
//         reverse+=a[i]
//     };
//     if (a==reverse){
//         return (`${str} is a palindrome.`);    
//     }else{
//         return (`${str} is not a palindrome.`);
//     };
// };

// console.log(palindrome("Moon"));



/*Q-9.) Write a function that checks whether a person is eligible to vote based on their age.*/
// function eligibleForVote(age){
//     let result=(age>=18) ? 'You can vote.' : `Hey, your age is ${age}.`;
//     return (result);
// };

// console.log(eligibleForVote(23));



/*Q-10.) Implement a program that determines the type of a triangle based on the lengths of its sides.*/
// let side_1=50,side_2=50,side_3=80;

// if(side_1>0 && side_2>0 && side_3>0){
//     if(((side_1+side_2)>side_3)||((side_1+side_3)>side_2)||((side_2+side_3)>side_1)){
//         if((side_1==side_2)&&(side_2==side_3)){
//             console.log('This is an equilateral triangles.');
//         }else if((side_1==side_2)||(side_1==side_3)||(side_2==side_3)){
//             console.log('This is an isosceles triangles.');  
//         }else{
//             console.log('This is a scalene triangles.');
//         };
//     }else{
//         console.log('Not a triangle, the sum of any two sides must be greater than the remaining side.');
//     };
// }else{
//     console.log('Invalid input.');
// };