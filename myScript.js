//Modern browsers support ES5 modules with import/export as normal
// import { getElementByIdOrFail } from "./utils.js";
// import { antiHeroes } from "./antiheroes.js";
import { characters } from "./characters.js";
const arrayOfLiElements = [];

renderCharacterListToHTML();
setupSearchButton();
setupCauseAnErrorButton();
removeCharacterButton();

function renderCharacterListToHTML() {
    const characterLiElements = makeLiElementsForCharacters();
    const myList = document.getElementById("charactersUL");
    for (const li of characterLiElements) {
        myList.appendChild(li);
    }
}

function createOneLiElementForCharacter(character) {
    const focusedCharacterParagraph = document.getElementById(
        "focusedCharacterParagraph"
    );
    //This new element will not yet be attached to any point in the DOM tree
    const element = document.createElement("li");

    element.innerHTML = character.name + " from " + character.book;

    element.addEventListener("click", () => {
        alert(character.name.toUpperCase() + ": " + character.powers.join(", ").toUpperCase());
    });

    element.addEventListener("mouseover", () => {
        focusedCharacterParagraph.innerText =
            character.name + ": " + character.powers.join(", ");
    });
    return element;
}

function makeLiElementsForCharacters() {
    for (const character of characters) {
        const element = createOneLiElementForCharacter(character);
        arrayOfLiElements.push(element);
    }
    return arrayOfLiElements;
}

function removeCharacterButton() {
    const myRemoveButton = document.getElementById("removeCharacterButton");
    myRemoveButton.addEventListener("click", () => {
        const myList = document.getElementById("charactersUL");
        const liToRemove = myList.lastElementChild;
        if (liToRemove !== null) {
            myList.removeChild(liToRemove);
        } else {
             alert("nothing to remove")
        }
    });
}

function setupSearchButton() {
    const searchTermDisplay = document.getElementById("searchTermDisplay");

    const myButton = document.getElementById("mySearchButton");
    myButton.addEventListener("click", () => {
        const searchTerm = prompt("input search term");
        searchTermDisplay.innerHTML =
            "You said: " +
            searchTerm +
            " but we don't do anything with this info yet";
    });
}

function setupCauseAnErrorButton() {
    const myButton = document.getElementById("causeAnErrorButton");
    myButton.addEventListener("click", screwUpIntentionally);
}

function screwUpIntentionally() {
    console.log("i am about to cause an error");
    const x = 10;
    x = 20;
    console.log("This function is about to finish normally");
}

