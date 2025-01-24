function circleArea(radius) {
    const PI = 3.14;
    let area = radius * radius * PI;
    return area; 
}


let area1 = circleArea(3);
console.log("Circle Area1:", area1); // Output: 28.26

let area2 = circleArea(4);
console.log("Circle Area2:", area2); // Output: 50.24
