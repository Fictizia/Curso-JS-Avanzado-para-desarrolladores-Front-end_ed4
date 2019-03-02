/**
 * 1 - Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown.
 * https://www.fictizia.com/planes/desarrollo-interactivo-y-web
 */

// Sólo cursos y másters
let coursesList = Array.from(document.querySelectorAll('.mastersList > article')).concat(Array.from(document.querySelectorAll('.coursesList > article')));
let text = "# Cursos de Fictizia en el Área de Desarrollo interactivo y Web\n\n";
coursesList.forEach((el) => {
    const hours = el.querySelector('.mainTag').innerText;
    const anchor = el.querySelector('header h1 a');
    text += `- [${anchor.text} (${hours})](${anchor.href})\n`;
})
console.log(text);

// Cursos, másters y workshops
let coursesList = Array.from(document.querySelectorAll('.plansWrapper > section > article'));
let text = "# Cursos de Fictizia en el Área de Desarrollo interactivo y Web\n\n";
coursesList.forEach((el) => {
    const hours = el.querySelector('.mainTag').innerText;
    const anchor = el.querySelector('header h1 a');
    text += `- [${anchor.text} (${hours})](${anchor.href})\n`;
})
console.log(text);

/**
 * 2 - Hagamos la web del Metro más divertida.
 * Saca el estado actual de todas las líneas del metro de Madrid por consola.
 * https://www.metromadrid.es/es
 */

let linesList = Array.from(document.querySelectorAll('.list__otraslineas > li'));
let text = "Estado de la red de Metro\n";
linesList.forEach((el) => {
    let lineImg = el.querySelector('a > img');
    let lineName = "";
    if (lineImg) {
        lineName = (lineImg.className).toLocaleUpperCase().replace(/-/g, " "); 
    }

    let lineSpan = el.querySelector('span');
    if(lineSpan) {
        if(lineSpan.classList.contains('has-tip')) {
            let tooltipId = lineSpan.getAttribute("aria-describedby");
            let tootltipText = document.getElementById(`${tooltipId}`).innerText;
            text += `Circulación interrumpida en ${lineName}. ${tootltipText}.\n`;
        } else {
            text += `Circulación normal en ${lineName}.\n`;
        }
    } 
});
console.log(text);

/**
 * 3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.
 * https://placekitten.com/
 * https://www.elmundotoday.com/noticias/tecnologia/ 
 */

let imagesList = Array.from(document.querySelectorAll('.entry-thumb'));

imagesList.forEach((el) => {
    el.src = `http://placekitten.com/${el.width}/${el.height}`
});

/**
 * 4 - Nos creamos un array de objetos con la informacion, links y fotografias de l@s profes de Fictizia
 * https://www.fictizia.com/profesorado
 */

let cardList = Array.from(document.querySelectorAll(".microCard"));
let profesores = [];
cardList.forEach((el) => {
    let profesor = {};

    let img = el.querySelector(".withMedia > img");
    let infoContainer = el.querySelector("div:nth-child(2)");
    let snButtons = Array.from(infoContainer.querySelectorAll(".microBtns > li > a"));
    let snn = {};
    snButtons.forEach((el) => {
        let snName = el.innerText;
        let url = el.href;
        snn[`${snName}`] ? snn[`${snName}`].push(`${url}`) : snn[`${snName}`] = Array(`${url}`);
    });

    profesor.name = infoContainer.querySelector("h3").innerText;
    profesor.bio = infoContainer.querySelector("p").innerText;
    profesor.photo = img.src;
    profesor.socialNetworks = snn;
    profesores.push(profesor);
});
console.log(profesores);
