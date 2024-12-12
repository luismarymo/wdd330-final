import { renderListWithTemplate } from "./utils.mjs";

function catCardTemplate(cat) {
    return `
    <li class="cat-card">
        <a href=#>
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
        const listing = await this.dataSource.getData(this);

        this.displayCatList(listing);
        this.toggleListView();
    }

    displayCatList(listing) {
        renderListWithTemplate(catCardTemplate, this.listElement, listing);
    }

    toggleListView() {
        document.querySelector(".view").addEventListener("click", (event) => {
            
            if(event.target.id == "list") {
                this.listElement.classList.add("list-view");
                this.listElement.classList.remove("grid-view");
            }

            if(event.target.id == "grid") {
                this.listElement.classList.add("grid-view");
                this.listElement.classList.remove("list-view");
            }
        })
    }
}