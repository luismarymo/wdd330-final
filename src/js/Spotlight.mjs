export default class Spotlight {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async init() {
        const options = await this.dataSource.getData(this);

        this.displaySpotlight(options);
    }

    displaySpotlight(list) {
        const spotlightContainer = document.querySelector(".spotlight");

        let random = list[Math.floor(Math.random() * list.length)];

        spotlightContainer.innerHTML = `
        <img src="${random.url}" alt="Image of ${random.breeds[0].name}">
        <h2 class="card__name">${random.breeds[0].name}</h2>`
    }
}