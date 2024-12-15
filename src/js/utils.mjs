// inserts objects and a template as html into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML('afterbegin', template);
    if (callback) {
      callback(data);
    }
  }

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }

// inserts a list of objects with a template as HTML into the DOM
export function renderListWithTemplate(templateFunction, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(templateFunction);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// dynamically loads the header and footer into a page
export async function loadHeaderFooter() {
    const header = await loadTemplate(
      new URL("../public/header.html", import.meta.url)
    );
    const footer = await loadTemplate(
      new URL("../public/footer.html", import.meta.url)
    );

    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(header, headerElement);
    renderWithTemplate(footer, footerElement);
}

// retrieves a query parameter value from the URL
export function getParameter(parameter) {
  const urlParameter = new URLSearchParams(window.location.search);
  return urlParameter.get(parameter);
}