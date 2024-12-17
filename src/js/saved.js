import { loadHeaderFooter } from "./utils.mjs";
import Saved from "./SavedList.mjs";

const saved = new Saved("savedCats", document.querySelector(".saved"));

saved.init();

loadHeaderFooter();