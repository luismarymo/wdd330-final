import { isInStorage, renderListWithTemplate, setStorage } from "./utils.mjs";

function catCardTemplate(cat) {
    return `
    <li class="cat-card">
        <a href="detail.html?cat=${cat.id}">
            <img class="card__img" src="${cat.url}" alt="Image of ${cat.breeds[0].name}"/>
            <div class="card__info">
                <h2 class="card__name">${cat.breeds[0].name}</h2>
                <h3 class="card__origin">Origin: ${cat.breeds[0].origin}</h3>
            </div>
        </a>
    </li>`;
}

export default class CatListing {
    constructor(dataSource, listElement) {
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        let listing = isInStorage("breedList");

        if (listing.length == 0) {
            listing = await this.dataSource.getData(this);
            setStorage("breedList", listing);
        }

        this.displayCatList(listing);
        this.toggleListView();
    }

    displayCatList(listing) {
        renderListWithTemplate(catCardTemplate, this.listElement, listing);
    }

    toggleListView() {
        document.querySelector(".view-buttons").addEventListener("click", (event) => {
            if(event.target.id == "list" || event.target.alt == "List View Button") {
                this.listElement.classList.add("list-view");
                this.listElement.classList.remove("grid-view");
            }

            if(event.target.id == "grid" || event.target.alt == "Grid View Button") {
                this.listElement.classList.add("grid-view");
                this.listElement.classList.remove("list-view");
            }
        })
    }
}