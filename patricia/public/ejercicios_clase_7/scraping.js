// Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown.

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