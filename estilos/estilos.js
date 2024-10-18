// Función para calcular el factorial de un número
function calcularFactorial() {
    // Solicitar al usuario que ingrese un número
    // prompt() abre una ventana emergente donde el usuario puede escribir un valor
    var numero = prompt("Ingresa un número para calcular su factorial:");

    // Convertir el valor ingresado en un número entero
    // parseInt() convierte el valor de texto (string) que devuelve prompt en un número entero
    var numeroConvertido = parseInt(numero);

    // Verificar si el número ingresado es un número válido
    // isNaN() verifica si el valor ingresado no es un número. Si es así, o si el número es menor que 0, mostramos un mensaje de error
    if (isNaN(numeroConvertido) || numeroConvertido < 0) {
        // Mostrar un mensaje en la pantalla si el valor ingresado no es válido (no es un número o es negativo)
        document.write("Por favor, ingresa un número entero positivo.");
    } else {
        // Si el número es válido, comenzamos a calcular el factorial
        // Inicializamos la variable factorial en 1, ya que el factorial de cualquier número empieza en 1
        var factorial = 1;

        // Creamos una variable cadena para almacenar la secuencia de multiplicación
        var secuencia = "";

        // Ciclo para calcular el factorial
        // Este bucle for comienza en 1 y sigue hasta el número ingresado por el usuario
        for (var i = 1; i <= numeroConvertido; i++) {
            // En cada iteración, multiplicamos el valor actual de factorial por i
            factorial *= i;

            // Si es la primera iteración, simplemente asignamos el valor de i a la secuencia
            if (i === 1) {
                secuencia = i.toString(); // Convertir a cadena
            } else {
                // En las siguientes iteraciones, agregamos "x" seguido de i para formar la secuencia de multiplicación
                secuencia += "x" + i;
            }
        }

        // Mostrar la secuencia de multiplicación y el resultado en la pantalla usando document.write()
        // Esto escribe directamente en el documento HTML lo que sigue en la cadena
        document.write(secuencia + " = " + factorial);
    }
}

// Llamar a la función para que se ejecute
// Esto ejecuta la función calcularFactorial() cuando se carga el script
calcularFactorial();
