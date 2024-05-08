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

// let a={
//     name:"chandni",
// };
// let b=a;
// a.name="sangeet";
// console.log(a);
// console.log(b);


/*-------------------------->Task: CRUD Functionality<--------------------------*/

/*Q) Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
Implement the following functionalities:

a) Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
b) Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
c) Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
d) Delete a contact: Allow users to delete a contact by entering their name.*/

// let phoneBook={
//     contacts:[],
//     addNewContact: function(name,phoneNumber,email){
//         let user={
//             name:name,
//             phoneNumber:phoneNumber,
//             email:email,
//         };
//         this.contacts.push(user);
//         console.log(`Contact ${name} added successfully!`);
//     },

//     searchContact: function(name){
//         let found=false;
//         for (let i=0;i<(this.contacts.length);i++){
//             if(this.contacts[i].name===name){
//                 console.log(`Name:${this.contacts[i].name}.`);
//                 console.log(`Phone Number:${this.contacts[i].phoneNumber}.`);
//                 console.log(`Email:${this.contacts[i].email}.`);
//                 found=true;
//                 break;
//             }
//         }
//         if(!found){
//             console.log(`Contact ${name} not found!`);
//         };
//     },
    
//     updateContact: function(name, newPhoneNumber, newEmail){
//         for (let i=0;i<(this.contacts.length);i++){
//             if(this.contacts[i].name===name){
//                 this.contacts[i].phoneNumber=newPhoneNumber;
//                 this.contacts[i].email=newEmail;
//                 console.log(`Contact ${name} updated successfully!`);
//                 return;
//             };
//         };
//         console.log(`Contact ${name} not found!`);
//     },

//     deleteContact: function(name){
//         for (let i=0;i<(this.contacts.length);i++){
//             if(this.contacts[i].name===name){
//                 this.contacts.splice(i,1);
//                 console.log(`Contact ${name} deleted successfully!`);
//                 return;
//             };
//         };
//         console.log(`Contact ${name} not found!`);
//     },
// };

// phoneBook.addNewContact("chandni","99999999","chandni@gmail.com");
// phoneBook.addNewContact("nisha","0977777772","nisha@gmail.com");
// console.log(phoneBook.contacts);

// phoneBook.searchContact("nisha");
// phoneBook.searchContact("sana");

// phoneBook.updateContact("nisha","9876543210","nishaishere@gmail.com");
// console.log(phoneBook.contacts);

// phoneBook.deleteContact("nisha");
// console.log(phoneBook.contacts);

// phoneBook.searchContact("nisha");
