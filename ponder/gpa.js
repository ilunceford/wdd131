function getGrades(inputSelector) {
    // Get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // Split them into an array
    const gradesArray = grades.split(",");
    // Clean up any extra spaces, and make the grades all uppercase
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase()).filter(grade => grade !== "");
    
    console.log(cleanGrades);
    return cleanGrades;
}

function lookupGrade(grade) {
    // Convert the letter grade to its GPA point value
    const gradePoints = {
        "A": 4,
        "B": 3,
        "C": 2,
        "D": 1,
        "F": 0 // Ensure 'F' is handled
    };
    
    return gradePoints[grade] ?? null; // Return null for invalid grades
}

function calculateGpa(grades) {
    if (grades.length === 0) {
        return "N/A"; // Handle empty input case
    }

    // Convert letter grades to GPA points, filtering out invalid ones
    const gradePoints = grades.map(lookupGrade).filter(point => point !== null);

    if (gradePoints.length === 0) {
        return "N/A"; // Avoid division by zero if all grades are invalid
    }

    // Calculate the GPA
    const gpa = gradePoints.reduce((total, num) => total + num, 0) / gradePoints.length;
    
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    // Display GPA in the output element
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
}

function clickHandler() {
    // Get the grades entered into the input
    const grades = getGrades("#grades");
    // Calculate the GPA from the grades entered
    const gpa = calculateGpa(grades);
    // Display the GPA
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
