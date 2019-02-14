// Ponemos en consola:

function setConsole() {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  console = iframe.contentWindow.console;
  window.console = console;
}

// Llamamos a la función

setConsole()

// Prueba:

console.log('been hacked')

// been hacked
// unefined

