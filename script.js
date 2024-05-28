1.//Square of element
/*const array = [2, 6, 8, 15, 5];
const square = array.map( array => array * array);
console.log(array);
console.log("Square of each element is : " + square);



2.//student's score using ternary operator
function Grade(score) {
    return (score >= 90) ? 'A' :
           (score >= 80) ? 'B' :
           (score >= 70) ? 'C' :
           (score >= 60) ? 'D' :
                           'F';
}
let userScore = prompt("Enter your score:");
let Score = parseFloat(userScore);
if (!isNaN(Score)) {
    let grade = Grade(Score);
    console.log("Your grade is: " + grade);
} else {
    console.log("Please enter a valid number.");
}




3.//objects 
const car = {
    CompanyName: "Porsche",
    model: "Cayenne",
    year: 2021
};
function changeYear(newYear) {
    car.year = newYear;
}
changeYear(2024);

const { model, year } = car;
console.log("Model:" + model);
console.log("Year:" + year);




4.//prime number using filter function
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);





5.//diff usecases of map filter and reduce function
const numbers = [1, 22, 3, 14, 5, 16];
const cubes = numbers.map(num => num * num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(cubes);
console.log(evenNumbers);
console.log("sum of all elements is: " + sum);





6.//
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}*/





7.//
const person1 = {
    name: "Mansi katariya",
    address: {
        street: "12 Prem nagar",
        city: "Mumbai",
        zip: "8656"
    },
    contact: {
        email: "mansik76@gmail.com",
        phone: "555-1234"
    }
};
const phoneNumber1 = person1.contact?.phone;
console.log("Phone Number of person 1:", phoneNumber1);

const person2 = {
    name: "Priyansh shah",
    address: {
        street: "45 mira road",
        city: "Mumbai",
        zip: "64590"
    }
};
const phoneNumber2 = person2.contact?.phone;
console.log("Phone Number of person 2:", phoneNumber2);

