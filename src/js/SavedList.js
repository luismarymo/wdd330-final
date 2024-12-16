import { getIndexFromId, renderListWithTemplate } from "./utils.mjs";

function savedCatTemplate(cat) {
    return `
        <li class="saved-cat">
            <a href="detail.html?cat=${cat.id}">
                <h2 class="">${cat.breeds[0].name}</h2>
            </a>
            <button type="button" class="remove-cat" data-id="${cat.id}">X</button>
            <a href="detail.html?cat=${cat.id}">
                <img class="" src="${cat.url}" alt="Image of ${cat.breeds[0].name}">
            </a>
        </li>`;
}

export default class Saved {
    constructor(key, listElement) {
        this.key = key;
        this.listElement = listElement;
    }

    init(){
        this.displaySavedCats();
    }

    getSavedCats() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    setSavedCats(cats) {
        localStorage.setItem(this.key, JSON.stringify(cats));
    }

    removeCat(id) {
        const savedCats = this.getSavedCats();
        let savedIndex = getIndexFromId(savedCats, id);
        savedCats.splice(savedIndex, 1);

        this.setSavedCats(savedCats);
        this.displaySavedCats();
    }

    addRemoveCatListeners() {
        const removeButtons = document.querySelectorAll(".remove-cat");
        removeButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                let id = event.target.dataset.id;
                this.removeCat(id);
            });
        });
    }

    displaySavedCats() {
        this.listElement.innerHTML = "";

        const savedCats = this.getSavedCats();

        if (savedCats.length == 0) {
            this.listElement.innerHTML = `<p class="">You haven't purred to any cats!</p>`;
        } else {
            renderListWithTemplate(savedCatTemplate, this.listElement, savedCats);
            this.addRemoveCatListeners();
        }
    }
}