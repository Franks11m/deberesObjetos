# Teora explicativa sobre 2 ejercisios de Exercism

## Leap

### Introduccion
El concepto de años bisiestos se refiere a aquellos años que, en el calendario gregoriano, tienen un día extra en el mes de febrero. Esto se hace para ajustar el calendario al ciclo de las estaciones de manera más precisa. Las reglas para determinar si un año es bisiesto son:

El año debe ser divisible por 4 para ser considerado bisiesto.
Sin embargo, si el año es divisible por 100, entonces no será bisiesto a menos que también sea divisible por 400.
Estas reglas aseguran que el calendario se mantenga sincronizado con el ciclo de las estaciones y que el equinoccio de primavera siga ocurriendo aproximadamente el 20 o 21 de marzo.

### Solucion
export function isLeap(year: number): boolean {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

### Explicacion del codigo

export function isLeap(year: number): boolean {

#### Se define una función llamada isLeap que toma un parámetro year de tipo número y devuelve un valor booleano (true si el año es bisiesto y false si no lo es).

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {

#### Esta línea implementa la lógica para determinar si el año es bisiesto. Verifica si el año es divisible por 4 (year % 4 === 0) y, al mismo tiempo, verifica que no sea divisible por 100 (year % 100 !== 0) o que sea divisible por 400 (year % 400 === 0). Esto sigue las reglas del calendario gregoriano para los años bisiestos.

return true;

#### Si la condición en el if se cumple, es decir, si el año es bisiesto según las reglas, la función devuelve true.

return false;

#### Si la condición en el if no se cumple, es decir, si el año no es bisiesto según las reglas, la función devuelve false.

Esta implementación proporciona una forma clara y directa de determinar si un año dado es bisiesto según las reglas establecidas por el calendario gregoriano.

## RNA Transcription

### Introduccion 

La situación se desarrolla en una empresa de bioingeniería especializada en terapias terapéuticas. El equipo de ingenieros ha sido asignado a un nuevo proyecto centrado en el desarrollo de una terapia específica para un tipo poco común de cáncer. Esta terapia busca utilizar una técnica conocida como interferencia de ARN, la cual implica la creación de una molécula precisa llamada microARN para evitar la sobreproducción de una proteína específica que puede tener efectos perjudiciales en el organismo.

### Solucion

En la solución presentada, se utiliza una interfaz M junto con un objeto Map para asociar cada nucleótido del ADN con su correspondiente en el ARN. Este enfoque de mapeo facilita la conversión directa y eficiente de los nucleótidos, lo cual se logra utilizando el método replace de las cadenas de texto en JavaScript.

Al emplear un objeto Map en lugar de múltiples condicionales if o switch, el código se vuelve más claro y sencillo de mantener. Además, la validación inicial de la cadena de ADN garantiza que solo se procesen entradas válidas, lo que contribuye a la robustez y fiabilidad del programa.

### Explicacion del codigo

interface M {
    [key: string]: string
}

#### Aquí se define una interfaz M que especifica un diccionario donde las claves son cadenas de texto (string) y los valores también son cadenas de texto (string). Esto es útil para definir el objeto Map que se usará más adelante.

typescript
Copy code
const Map: M = { 
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

#### Se crea un objeto Map que utiliza la interfaz M anteriormente definida. Este objeto asigna cada nucleótido del ADN (G, C, T, A) a su correspondiente en el ARN (C, G, A, U).


export function toRna(dna: string): string {

#### Se exporta una función llamada toRna que acepta una cadena de ADN (dna) como argumento y devuelve una cadena de ARN como resultado.


if(/[^ACGT]/.test(dna)) {
    throw 'Invalid input DNA.'
}

#### Aquí se realiza una verificación para asegurarse de que la cadena de ADN solo contenga los caracteres válidos (A, C, G, T). Si la cadena contiene algún carácter que no sea uno de estos, se lanza una excepción con el mensaje 'Invalid input DNA.' Esto garantiza que la función solo procese cadenas de ADN válidas.


return dna.replace(/[ATCG]/g, m => Map[m])

#### Esta línea utiliza el método replace de las cadenas de texto en JavaScript para reemplazar cada nucleótido del ADN (indicado por la expresión regular [ATCG]) por su correspondiente en el ARN utilizando la función de reemplazo proporcionada (m => Map[m]). En esta función de reemplazo, m representa cada nucleótido coincidente (A, C, T, G) y Map[m] devuelve su complemento en el ARN según el objeto Map definido anteriormente.

En resumen, el código crea un objeto Map que asigna cada nucleótido del ADN a su correspondiente en el ARN, y luego la función toRna utiliza este objeto para convertir una cadena de ADN en su complemento de ARN. La validación previa asegura que solo se procesen cadenas de ADN válidas.


Link por youtube:  https://youtu.be/6qjZQ9a9KoI
