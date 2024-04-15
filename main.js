"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
const person = {
    name: "Zohaib",
    age: 39,
    city: "Karachi",
};
const jsonstring = JSON.stringify(person);
console.log(jsonstring);
console.log("\n");
// Question 134: Take a JSON string and parse it into a JavaScript object.
const jsonstring1 = '{"name":"Zohaib","age":39,"city":"Karachi"}';
const person1 = JSON.parse(jsonstring1);
console.log(person1);
console.log("\n");
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
const jsonstring2 = JSON.stringify(person, null, 2);
console.log(jsonstring2);
