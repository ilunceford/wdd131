const newP = document.createElement("p");
newP.textContent = "hello, world!";
document.body.append(newP);

const newI = document.createElement("img")
newI.setAttribute("src", "https://picsum.photos/200");
newI.setAttribute("alt", "new photo")
document.body.appendChild(newI);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2> <p>This was added through Javascript</p>";
document.body.append(newSection);

const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];
const portionData = ['1 15oz can', '1 15oz can', '1 tbsp', '8'];

function ingredientTemplate(index) {
    return `<li>${portionData[0]} ${ingredientData[0]}</li>`
}
const myList = document.createElement("ul");
ingredientData.forEach(function(item, index) { 
    myList.innerHTML += ingredientTemplate(index);
})

document.body.append(myList);

myList.classList.add("dark")