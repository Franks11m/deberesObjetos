# Teora explicativa sobre 2 ejercisios de Exercism

## Space Age

### Introduccion 

En el siguiente ejercicio, se planteo la tarea de calcular la edad de una persona en años terrestres y en años de otros planetas del sistema solar. Para poderlo lograr, se proporcionan los períodos orbitales de cada planeta en relación con el año terrestre, y se espera obtener la edad correspondiente en cada uno de estos planetas a partir de los segundos de vida de esa persona.

### Plantamiento y Solucion

Para resolver este problema, se ha optado por utilizar TypeScript debido a su capacidad para estructurar el código de manera clara y modular. En primer lugar, se define una interfaz llamada Planets que enumera los períodos orbitales de cada planeta en el sistema solar.

Luego, se crea una constante RATIOS que almacena estos períodos orbitales expresados en relación con el año terrestre. Esta constante sirve como una referencia centralizada para los cálculos futuros.

La función age recibe el nombre del planeta y la edad en segundos de la persona como parámetros. A través de una fórmula específica, esta función realiza el cálculo necesario para obtener la edad en años en el planeta deseado. Esto se logra dividiendo los segundos totales por la duración de un año terrestre en segundos y por el período orbital del planeta seleccionado.

En resumen, la solución desarrollada ofrece una manera efectiva y organizada de abordar el ejercicio, aprovechando las capacidades de TypeScript para estructurar el código de manera clara y facilitar el cálculo de edades en diferentes planetas del sistema solar.

### Explicacion del codigo

#### Interfaz Planets

Ha creado una interfaz llamada Planets para estructurar los períodos orbitales de cada planeta en el sistema solar. Esta interfaz define un tipo de objeto donde las claves son cadenas (string) que representan el nombre de cada planeta, y los valores son números (number) que indican el período orbital de cada planeta en años terrestres.

#### Constante RATIOS:

Ha creado una constante llamada RATIOS que sigue el tipo definido por la interfaz Planets. Esta constante almacena los períodos orbitales de los planetas en relación con el año terrestre, utilizando cada nombre de planeta como clave y su respectivo período orbital como valor numérico.

#### Función age:

Ha definido una función llamada age que recibe dos parámetros: planet (el nombre del planeta como cadena) y seconds (la edad en segundos de una persona).
Dentro de la función, ha utilizado la fórmula (seconds / 31557600 / RATIOS[planet]) para calcular la edad en años de la persona en el planeta especificado. Esta fórmula divide los segundos totales por la duración de un año terrestre en segundos y luego por el período orbital del planeta seleccionado.
Además, ha utilizado Number((...).toFixed(2)) para redondear el resultado a dos decimales y convertirlo en un número.

#### Conclusión

En resumen, el código desarrollado por [tu nombre] estructura los períodos orbitales de los planetas mediante una interfaz, utiliza una constante para almacenar estos períodos y proporciona una función para calcular la edad de una persona en diferentes planetas del sistema solar, siguiendo las instrucciones del ejercicio de manera precisa y eficiente.

## D&D character

#### Introducción:
En este ejercicio, se plantea la necesidad de generar personajes aleatorios para el juego de rol Dungeons & Dragons (D&D). Cada personaje tiene seis habilidades principales (fuerza, destreza, constitución, inteligencia, sabiduría y carisma), las cuales se determinan lanzando dados de 6 caras y sumando los tres valores más altos de cada lanzamiento. Además, los puntos de golpe iniciales del personaje dependen de su modificador de constitución. El desafío consiste en escribir un programa que genere personajes aleatorios siguiendo estas reglas.

#### Solución y explicación del código:
Para abordar este problema, se implementa una clase llamada DnDCharacter en TypeScript. Esta clase tiene propiedades para almacenar las habilidades del personaje (strength, dexterity, constitution, intelligence, wisdom y charisma), así como los puntos de golpe (hitpoints).

En el constructor de la clase DnDCharacter, se llama a la función generateAbilityScore() seis veces para generar valores aleatorios para cada habilidad del personaje. Esta función simula el lanzamiento de cuatro dados de 6 caras y suma los tres valores más altos, reflejando el proceso de generación de habilidades en D&D.

Además, se implementa la función getModifierFor() para calcular el modificador de habilidad basado en el valor de la habilidad. Esta función sigue la fórmula estándar de D&D, restando 10 del valor de la habilidad y dividiendo por 2, redondeando hacia abajo.

En resumen, el código cumple con los requisitos del ejercicio al generar personajes aleatorios con habilidades válidas y puntos de golpe calculados correctamente, siguiendo las reglas de Dungeons & Dragons.

### Link por youtube para una explicacion mas detallada:

Link por youtube:  https://youtu.be/rTyU_FCc9T8
