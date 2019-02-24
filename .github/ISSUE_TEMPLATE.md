Para generar una incidencia nueva dependiendo del tipo utiliza alguno de los siguientes templates con ejemplos y borra este texto y el texto sobrante:

Antes de nada asegurate de definir un título descriptivo como por ejemplo:
- Error en lógica de validación de email en formulario de login
- Implementación de lógica de validacion en formulario de login

---

Si vas a definir un `bug` utliza la siguiente estructura:
### REPRODUCIR
ESTADO INICIAL:
- En la pantalla de login
- Sin logar
- Navegador
- Branch desplegado

1. Rellenar email con `asdfg @123456`
1. Perder el foco del input de email

### COMPORTAMIENTO OBTENIDO
Se muestra un mensaje indicando de que el email es correcto

### COMPORTAMIENTO ESPERADO
Debería mostrar un mensaje de error indicando que el email no es correcto

---

Si vas a definir una `feature`/`refactor` utliza la siguiente estructura:
Como **usuario** quiero que el formulario de login valide los datos que introduzco indicandome si son correctos o incorrectos una vez he terminado de editarlos.

### Notas

- Los inputs deben autovalidarse una vez que han sido editados en el momento en que pierden el foco
- Los mensajes de validación relativos a cada input deben desaparecer en le momento en que este se vuelve a editar

### Diseños
- link a diseño (2018-10-25) <- fecha en la que se referencio el diseño
- link a diseño (2018-10-31)

### Requerimientos técnicos
- Branch
