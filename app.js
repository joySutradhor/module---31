// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.


const multiply = (num1, num2, num3) => num1 * num2 * num3;

const result = multiply(2,4,2);
console.log(result);

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(sentence);


// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.


const add = (one, two=5) => one + two;
const resultOfAdd = add(4, 7);
console.log(resultOfAdd); 

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result


const arr = (friendsArr) => {
    let newFriendsArray = [];

    for(const friends of friendsArr ){
        if(friends.length % 2 == 0){
            newFriendsArray.push(friends);
        }
    }
            
    return newFriendsArray ;
}     

const friends = ["joy", "jons" , "aonnona", "sumitd" , "jhankerd", "ratuld" , "rakib"];
const friendsName = arr(friends);
console.log(friendsName);

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const square = (elementArr) => {
    let sum = 0 ;
    for(const element of elementArr){
        let square = element * element ;
        sum = sum + square ;
 

    }
    let result = sum / elementArr.length ;
    return parseFloat(result.toFixed(2));
}

const numbers = [7, 5, 7, 8 , 9 , 5];
const nums = square(numbers);
console.log(nums);

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result

const findMax = (array1 , array2) => {
    let minMax = []
    const newArray = [...array1 , ...array2];
    const newArrayMax = Math.max(...newArray);
    minMax.push(" max is : " + newArrayMax)
    const newArrayMin = Math.min(...newArray);
    minMax.push("Min is : " + newArrayMin );
    return minMax ;
}
const list = [1, 3,45, 544,656, 77, 77];
const list2 = [343,545,7,6,455,565,767];
const maxResult = findMax(list , list2);
console.log(maxResult);