// Find the last element of the following arrays.arr1=[3,7,34,90,12]arr2=[true,"green","where",12,56]

let arr1 = [3,7,34,90,12];
console.log(arr1[arr1.length -1]);

let arr2 = [true, "green", "where", 12, 56]
console.log(arr2[arr2.length-1]);

// Write a JS program that will join the following array elements into a string myPets = ["Cow", "Bird", "Snake", "Dog"]
myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join());


// Write a JS script to sort the following array items var arr3 = [-5,9,5,3,2,-3,6,8,4,1];

let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
arr3.sort();
console.log({arr3});


// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
 let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

let uniqueArr = [...new Set(arr)];
let withDuplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log({uniqueArr});
console.log({withDuplicates});


// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4]

let arr5 = ["the", "way", "x", 4];
 if((arr5.includes("food"))){
    console.log({arr5});
 }
 else{
    console.log("the search word was not found");
 }


// Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
let modifiedWord = word.split("").sort().join("");
console.log(modifiedWord);

// Using an array of fruits with length 10, insert "Tomato" at the 5th index

let fruits = ["Guava", "Pear", "Banana", "Mango", "Pineapple", "Apple", "Grape", "Plums", "Pawpaw", "Watermelon"]

fruits.splice(5,1, "Tomato");
console.log({fruits});
