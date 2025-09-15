/* 
Funciones a elaborar:

* printByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* printByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js
*/
const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]
/**
 * 
 * @param {delay} delay y además dentro 2 bucles forEach para cada parte del corazon
 * @returns devuelve el corazon carácter por carácter
 */
const printByChart = (delay) => {
    let contador = 0;
    asciiHeart.forEach((partecorazon) => {
        partecorazon.split("").forEach((puntoscorazon, posicion) => {
            setTimeout(() => {
                process.stdout.write(puntoscorazon)
                if (posicion == partecorazon.length - 1) process.stdout.write("\n");    
            }, delay * contador++)
        })
    })
}

/**
 * 
 * @param {delay} delay  y además dentro un forEach que imprime por linea saltando de linea
 * @returns devuelve la función línea por línea el AsciiHeart
 */
const printByLine = (delay) => {
    asciiHeart.forEach((lineacorazon, posicion) => {
        setTimeout(() => {
            console.log(lineacorazon)
        }, delay * posicion);
    });
}


printByChart(150); 
/* printByLine(400); */ 

/* Solo se puede imprimir uno a la vez */ 





