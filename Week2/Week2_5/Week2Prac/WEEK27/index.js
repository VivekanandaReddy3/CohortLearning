// Map, Filter and arrow Functions

// function sum(a,b){
//     return a+b;
// }
// const sum = (a,b) =>{
//     return a+b;
// }

// MAP & FILTER
// Given an array, give me back a new array in which every value is multiplied by 2

// REGULAR METHOD:
const input = [1,2,3,4,5];
// const newArray = [];

// for (let i =0;i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray);

// But by using MAP function 
// We could map two function, map(arr,f) ig where f is transformation function

// function transform(i){
//     return i*2;
// }

// const ans = input.map(transform);
// console.log(ans);

// // The more cleaner function is 

// const ans1 = input.map(function(i){
//     return i*2;
// });
// console.log(ans1)





// Given an input array give me back all the even values from it

const newArr = [];
// BY USING FILTER FUNCTION
function FilteringLogic(n){
    if (n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = input.filter(FilteringLogic);
console.log(ans);