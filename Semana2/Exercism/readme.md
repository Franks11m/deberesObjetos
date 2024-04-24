# Teora explicativa sobre los siguientes 2 ejercisios de Exercism

## Resistor Color Duo

### Introduccion 

"Este ejercisio es la continuidad del anterior del cual trataba; identificar el valor de un color de una resistencia; ahora me pide un programa que ayude a encontrar dos valores numericos segun los colores que se encuentre en una resistencia; basandonos en la tabla de colores de la resistencia"

#### Instrucciones por mi punto de vista 

Para resolver este ejerciso tenemos que crear un codigo que use todos los colores de tabla y codifique cada uno por su valor; por lo tanto si tengo marrón-verde debería devolver 15 marrón-verde-violeta también debería devolver 15, ignorando el tercer color.

### Resultados

#### export function decodedValue(input: string[]): number 

 Aquí estamos definiendo una función llamada decodedValue que toma un array de strings como entrada y devuelve un número.

#### const colors = [ ... ];

 Creamos un array llamado colors que contiene los nombres de los colores codificados según las especificaciones dadas en el ejercicio.
 
#### let decodedNumber = 0;
 
 Inicializamos una variable decodedNumber que utilizaremos para almacenar el número decodificado.

 #### for (let i = 0; i < 2 && i < input.length; i++) 

Comenzamos un bucle for que se ejecutará dos veces o hasta que se agoten los elementos en la entrada, lo que ocurra primero. Esto asegura que solo consideraremos las primeras dos bandas de color.

#### const colorIndex = colors.indexOf(input[i])

Para cada color en la entrada, obtenemos su índice en el array colors. Esto nos dará el valor numérico asociado con ese color según la codificación dada.

#### if (colorIndex !== -1) 

Verificamos si el color está presente en la lista colors. Si colorIndex no es igual a -1, significa que el color existe en la lista y podemos continuar con el proceso de decodificación.

#### decodedNumber = decodedNumber * 10 + colorIndex
Aquí actualizamos el número decodificado multiplicándolo por 10 y luego sumando el índice del color. Esto asegura que los números se concatenen correctamente para formar el número de dos dígitos.

#### return decodedNumber
Devolvemos el número decodificado después de procesar las primeras dos bandas de colores en la entrada.


## Resistor Color Trio

### Introduccion 
Si quieres construir algo con una Raspberry Pi, probablemente usarás resistencias. Para este ejercicio, necesitas saber dos cosas sobre ellos:
Cada resistencia tiene un valor de resistencia.
Las resistencias son pequeñas, tan pequeñas de hecho que si imprimiera el valor de resistencia en ellas, sería difícil de leer.
Para solucionar este problema, los fabricantes imprimen bandas codificadas por colores en las resistencias para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.
Las primeras 2 bandas de una resistencia tienen un esquema de codificación simple: cada color se asigna a un solo número.
En este ejercicio vas a crear un programa útil para que no tengas que recordar los valores de las bandas.

#### Instrucciones por mi punto de vista 

En el siguiente ejercsio se realizara una codificacion de encontrar los 2 primeros colores; siendo En Resistor Color Duo decodificaste los dos primeros colores. Por ejemplo: naranja-naranja obtuvo el valor principal 33. El tercer color representa cuántos ceros se deben agregar al valor principal. El valor principal más los ceros nos da un valor en ohmios. Para el ejercicio no importa qué son realmente los ohmios. Por ejemplo: 
naranja-naranja-negro sería 33 y sin ceros, lo que se convierte en 33 ohmios.

naranja-naranja-rojo serían 33 y 2 ceros, lo que se convierte en 3300 ohmios.

naranja-naranja-naranja serían 33 y 3 ceros, lo que se convierte en 33000 ohmios.

### Resultados
#### export function decodedResistorValue(colors: string[]) 
 Esta línea define una función llamada decodedResistorValue que acepta un array de strings llamado colors. El export indica que esta función puede ser importada y utilizada desde otros archivos.

#### const colorValues 
 Aquí se define un array llamado colorValues que contiene los colores válidos para las bandas de una resistencia según la codificación dada en las instrucciones.
#### if (colors.length !== 3 || colors.some(color => !colorValues.includes(color))) { return "Colores de resistencia inválidos"; }: 
 Esta línea verifica si el array colors contiene exactamente tres elementos y si todos los elementos son colores válidos según colorValues. Si no se cumple esta condición, la función devuelve un mensaje de error indicando que los colores de resistencia son inválidos.
#### const mainValue = colorValues.indexOf(colors[0]) * 10 + colorValues.indexOf(colors[1]);: 
 Aquí se calcula el valor principal de la resistencia multiplicando el índice del primer color en colors por 10 y sumando el índice del segundo color en colors.
#### const zeros = colorValues.indexOf(colors[2]);: 
 Esta línea calcula cuántos ceros se deben agregar al valor principal de la resistencia, tomando el índice del tercer color en colors.
#### let finalValue = mainValue;: 
 Se inicializa la variable finalValue con el valor principal calculado anteriormente.
#### let unit = "ohmios";:
 Se inicializa la variable unit con el valor predeterminado "ohmios", que representa la unidad de la resistencia.
#### if (zeros >= 3 && zeros < 6) { ... } else if (zeros >= 6 && zeros < 9) { ... } else if (zeros >= 9) { ... }: 
 Estas líneas verifican cuántos ceros se deben agregar al valor principal y ajustan finalValue y unit en consecuencia para representar el valor final de la resistencia en la unidad adecuada ("ohmios", "kiloohmios", "megaohmios" o "gigaohmios").
#### return ${finalValue} ${unit};: 
 Finalmente, se devuelve una cadena que representa el valor de la resistencia seguido de la unidad correspondiente, por ejemplo, "33 ohmios", "3300 ohmios", "33 kiloohmios", etc.


# Link por youtube para una explicacion mas detallada:

Link por youtube:  https://youtu.be/uy5UZQvELTQ
