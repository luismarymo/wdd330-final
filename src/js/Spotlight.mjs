let imgIndex = 0;

function displayCarousel() {
    let images = document.querySelectorAll(".carousel-img");

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    imgIndex++;

    if (imgIndex > images.length) {
        imgIndex = 1;
    }

    images[imgIndex-1].style.display = "block";
    setTimeout(displayCarousel, 2500);
}

export default class Spotlight {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    async init() {
        displayCarousel();

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