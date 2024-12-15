import CatDetail from "./CatDetail.mjs";
import { getParameter, loadHeaderFooter } from "./utils.mjs";

const catId = getParameter("cat");

const cat = new CatDetail(catId);

cat.init();

loadHeaderFooter();