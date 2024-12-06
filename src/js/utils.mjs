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
    console.log("Loaded template from", path, template);
    return template;
  }

// dynamically loads the header and footer into a page
export async function loadHeaderFooter() {
    const header = await loadTemplate("../public/partials/header.html");
    const footer = await loadTemplate("../public/partials/footer.html");

    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(header, headerElement);
    renderWithTemplate(footer, footerElement);
}