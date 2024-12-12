import { loadHeaderFooter } from "./utils.mjs";
import CatData from "./CatData.mjs";
import CatListing from "./CatListing.mjs";

const catData = new CatData();

const listElement = document.querySelector(".listing");

const catListing = new CatListing(catData, listElement);

catListing.init();

loadHeaderFooter();