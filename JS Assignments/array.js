/*Q-1.) Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.*/
// function sumOfArray(arr){
//     let sum=0;
//     for(let i=0; i< (arr.length); i++){
//         sum=sum+arr[i];
//     };
//      return (`Sum of array:[${arr}] is ${sum}.`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(sumOfArray(arr));

/*Q-2.) Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.*/
// function averageOfArray(arr){
//     let sum=0;
//     arr.forEach(elem=>{
//         sum= sum+elem;
//     });
//     let average=(sum/arr.length);
//     return (`Average of array:[${arr}] is ${average}.`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(averageOfArray(arr));

/*Q-3.)  Find Maximum Element: Write a function to find the maximum element in an array of integers.*/
// function maximumOfArray(arr){
//     let max=Math.max(...arr);
//     return (`Maximum element of array:[${arr}] is ${max}.`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(maximumOfArray(arr));

/*Q-4.) Find Minimum Element: Write a function to find the minimum element in an array of integers.*/
// function minimumOfArray(arr){
//     let min=Math.min(...arr);
//     return (`Maximum element of array:[${arr}] is ${min}.`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(minimumOfArray(arr));

/*Q-5.) Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.*/
// function searchOfelement(arr,element){
//     for (let i=0;i<(arr.length);i++){
//       if(arr[i] === element){
//         return (i);
//       };
//     };
//     return (-1);
// };
// let arr=[1,3,4,5,6,7,1,1];
// let element=7;
// console.log(searchOfelement(arr,element));

/*Q-6.) Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).*/
// function sortingArr(arr){
//     let sortedArr=arr;
//     for(let i=0;i<((sortedArr.length)-1);i++){
//         for(let j=0;j<(((sortedArr.length)-i)-1);j++){
//             if(sortedArr[j]>sortedArr[j+1]){
//                 let swap=sortedArr[j];
//                 sortedArr[j]=sortedArr[j+1];
//                 sortedArr[j+1]=swap;
//             };
//         };
//     };
//     return (`Original array:[${arr}] and after sorting the array:[${sortedArr}].`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(sortingArr(arr));

/*Q-7.) Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.*/
// function evenNumbersArray(arr){
//     let evenNumbers=[];
//     for(let i=0;i<(arr.length);i++){
//        if(arr[i]%2==0){
//         evenNumbers.push(arr[i]);
//        };
//     };
//     return (`Even numbers of arr:[${arr}] are in array evenNumbers:[${evenNumbers}].`);
// };
// let arr=[1,3,4,5,6,7,1,1];
// console.log(evenNumbersArray(arr));



/*<------------------Test------------------>*/

// function addTwoArray(arr1,arr2){
//     let arr3=arr1;
//     arr3.push(...arr2);
//     return (arr3);
// };
// let arr1=[1,3];
// let arr2=[2,5];
// console.log(addTwoArray(arr1,arr2));


// let arr=[1,2,3]
// let arr2=""
// for(let i=0;i<(arr.length);i++){
//     let a=arr[i].toString();
//     arr2+=a;
//     if (i!==(arr.length-1)){
//         arr2+="-";
//     };
// };
// console.log(arr2)
