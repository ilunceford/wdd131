//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;//the html string made from step
}

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const grade = ['A', 'B', 'A'];
function GradeToPoints(grade) {
    grade = grade.toUpperCase();
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grade.map(GradeToPoints);

function sum(total, current) {
    return total + current;
}
const gpaTotal = gpaPoints.reduce(sum, 0);
console.log(gpaTotal);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortfruits = fruits.filter((fruit) => fruit.length < 6);

console.log(shortfruits);
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);