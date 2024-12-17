export default class Spotlight {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async init() {
        const cat = await this.dataSource.getData(this);

        this.displaySpotlight(cat);
    }

    displaySpotlight(cat) {
        const spotlightContainer = document.querySelector(".spotlight");

        spotlightContainer.innerHTML = `
        <img src="${cat[0].url}" alt="Image of ${cat[0].breeds[0].name}">
        <h2>${cat[0].breeds[0].name}</h2>
        <p>${cat[0].breeds[0].description}</p>`
    }
}