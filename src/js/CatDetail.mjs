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
    }

    displayDetailedCat() {
        const catContainer = document.querySelector("#cat-detail");

        document.title = `${this.cat.breeds[0].name}`;

        catContainer.innerHTML = `
        <h1>${this.cat.breeds[0].name}</h1>
        <img class="" src="${this.cat.url}" alt="Image of ${this.cat.breeds[0].name}"/>
        <h2>From ${this.cat.breeds[0].origin}</h2>
        <p>Weight: ${this.cat.breeds[0].weight.metric}Kg</p>
        <p>Personality: ${this.cat.breeds[0].temperament}</p>
        <p>Life expentacy: ${this.cat.breeds[0].life_span} years</p>
        `;
    }
}