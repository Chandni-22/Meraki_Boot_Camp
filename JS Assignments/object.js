// let subtract = (a, b) => a - b;
// console.log(subtract(5,3));

// let user = {
//     name: "Puran",
//     addition: (a, b) => {
//         console.log(a + b);
//     },
//     subtraction: (a, b) => {
//         console.log(a - b);
//     }
// };

// user.addition(2, 3);
// user.subtraction(5, 7);

// let object={
//     first:"Chandni",
//     last:"Vishwakarma",
//     join:function(){
//         console.log(this.first +" "+this.last);
//     },
// };

// object.join();


// let object={
//     value:0,
//     increment:function(){
//         return (this.value=this.value+1);
//     },
//     decrement:function(){
//         return (this.value=this.value-1);
//     },
//     reset:function(){
//         return (this.value=0)
//     }
// };

// console.log(object.increment());
// console.log(object.decrement());
// console.log(object.increment());
// console.log(object.increment());
// console.log(object.increment());
// console.log(object.increment());
// console.log(object.reset());
// console.log(object.decrement());


// let employees={
//     Emp1:50000,
//     Emp2:60000,
//     Emp3:55000,
//     Emp4:58000,
//     Emp5:52000,
// };

// let keys=employees.keys;
// for (let keys in employees){
//     console.log(`${keys}:${employees[keys]+1000}.`);
// };

let a={
    name:"chandni",
};
let b=a;
a.name="sangeet";
console.log(a);
console.log(b);
