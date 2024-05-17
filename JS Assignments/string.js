/*Q-1.)Given a sentence, capitalize the first character of each word.
input - this is javascript
output - This Is JavaScript*/

// function firstCharacterCapital(s){
//     let l=s.length;
//     let dub="";
//     dub+=s[0].toUpperCase();
//     for(let i=1; i<l;i++){
//         if (s[i]===" "){
//             dub+=" ";
//             dub+=(s[i+1]).toUpperCase();
//             i++;
//         }else{
//             dub+=s[i];
//         };
//     };
//     return(dub);
// };

// let s="hello guyes good";
// console.log(firstCharacterCapital(s));


/**Q-2.)Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
	input - ["javascript", "react", "node"]
	output - [true, false, false]
	
	input - ["java","python","c"]
	output - [false, false, false]*/

// function isJS(arr){
//     let l=arr.length;
//     let result=[];
//     for(let i=0; i<l; i++){
//         if ((arr[i]).toUpperCase()==="JAVASCRIPT"){
//             result.push(true);
//         }else{
//             result.push(false);
//         };
//     };
//     return(result);
// };

// let arr=["javasCript", "react", "node"];
// console.log(isJS(arr));


/*Q-4.)Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
	input - below, elbow
	output - true

	input - night, thing
	output - true*/

// function isAnagrams(s,s2){
//     if (s.length===s2.length){
//         let S=s.toUpperCase().split('').sort().join();
//         let S2=s2.toUpperCase().split('').sort().join();
//         if (S===S2){
//             return(true);
//         }else{
//             return(false);
//         };
//     }else{
//         return(false);
//     };
// };

// let s="below";
// let s2="elbow";
// console.log(isAnagrams(s,s2));


/*Q-5.)Reverse the given sentence.
	input- i am learning javascript.
	output - tpircsavaj gninrael ma i*/

// function reverseSentence(s){
//     let reversS=s.split('').reverse().join('');
//     return(reversS);
// };

// let s="i am learning javascript";
// console.log(reverseSentence(s));


/*Q-6.)Reveres the given string word by word then return the reversed string.
	input - Success comes to those who work hard
	output - hard work who those to comes Success*/

// function reverseSentence(s){
//     let reversS=s.split(' ').reverse().join(' ');
//     return(reversS);
// };

// let s="i am learning javascript";
// console.log(reverseSentence(s));