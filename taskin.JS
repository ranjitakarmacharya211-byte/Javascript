// Qno1
let name = "Ranjita";
let age = "18";
let address = "Imadole";
let college = "PCPS";

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
console.log("College:", college);

// // Qno2
let num1 = 46;
let num2 = 25;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Division:", num1 / num2);

// // Qno3
let num = 34;

if (num > 0) {
    console.log("Positive number");
}
else if (num < 0) {
    console.log("Negative number");
}
else {
    console.log("Zero");
}

// //Qno4
let a = 18;
let b = 27;
let c = 36;

if (a > b && a > c) {
    console.log("Largest:", a);
}
else if (b > a && b > c) {
    console.log("Largest:", b);
}
else {
    console.log("Largest:", c);
}

// // Qno5
let marks = 75;

if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else if (marks >= 40) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

// //Qno6
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Qno7
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// // Qno8
let x = 5;

for (let i = 1; i <= 10; i++) {
    console.log(z + " x " + i + " = " + (x * i));
}

// //Qno9
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);