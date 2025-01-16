const newP = document.createElement("p");
newP.textContent = "hello, world!";
document.body.append(newP);

const newI = document.createElement("img")
newI.setAttribute ("src", "https://picsum.photos/200");
newI.setAttribute ("alt", "new photo")
document.body.appendChild(newI);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2> <p>This was added through Javascript</p>";
document.body.append(newSection);