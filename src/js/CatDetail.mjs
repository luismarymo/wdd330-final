import { getIndexFromId } from "./utils.mjs";

export default class CatDetail {
    constructor(catId) {
        this.catId = catId;
        this.cat = {};
        // this.dataSource = dataSource;
    }

    async init() {
        const storedBreeds = JSON.parse(localStorage.getItem("breedList"));

        if (Array.isArray(storedBreeds)) {
            this.cat = storedBreeds.find((cat) => cat.id == this.catId);

            if (!this.cat) {
                throw new Error("This cat wasn't found. Meow!");
            }
        } else {
            throw new Error("No cats found. Meow!")
        }

        this.displayDetailedCat();

        document.querySelector("#purrToCat").addEventListener("click", this.saveCat.bind(this));
    }

    displayDetailedCat() {
        const catContainer = document.querySelector("#cat-detail");

        document.title = `${this.cat.breeds[0].name}`;

        catContainer.innerHTML = `
        <h1>${this.cat.breeds[0].name}</h1>
        <button type="button" id="purrToCat" data-id="${this.cat.id}">
            <img class="detail__purr" src="https://picsum.photos/20" alt="placeholder">
        </button>
        <img class="" src="${this.cat.url}" alt="Image of ${this.cat.breeds[0].name}">
        <h2>From ${this.cat.breeds[0].origin}</h2>
        <p>${this.cat.breeds[0].description}
        <p>Weight: ${this.cat.breeds[0].weight.metric}Kg</p>
        <p>Personality: ${this.cat.breeds[0].temperament}</p>
        <p>Life expentacy: ${this.cat.breeds[0].life_span} years</p>
        <p class="detail__link">More info at <a href="${this.cat.breeds[0].wikipedia_url}" target="_blank">${this.cat.breeds[0].name}</a></p>
        `;
    }

    saveCat() {
        let savedCats = JSON.parse(localStorage.getItem("savedCats"));
        if (!Array.isArray(savedCats)) {
            savedCats = [];
        }

        let savedIndex = getIndexFromId(savedCats, this.catId);

        if (savedIndex != -1){
            alert("You already purred to this cat! No need to do it again");
        } else {
            savedCats.push(this.cat);
            alert(`You purred to ${this.cat.breeds[0].name}! Find it in the purred cats page`);
        }

        localStorage.setItem("savedCats", JSON.stringify(savedCats));
    }
}