import CatData from "./CatData.mjs";
import Spotlight from "./Spotlight.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const catData = new CatData();

const spotlight = new Spotlight(catData);

spotlight.init();

loadHeaderFooter();
