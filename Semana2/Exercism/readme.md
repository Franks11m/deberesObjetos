# Teora explicativa sobre siguientes 2 ejercisios de Exercism

## Resistor Color Duo

### Introduccion 

"En algunos acentos ingleses, cuando dices "two for" rápidamente, suena como "two fer". Dos por uno es una forma de decir que si compras uno, también obtienes uno gratis. Por lo tanto, la frase "two-fer" a menudo implica una oferta de dos por uno.
Imagina una panadería que tiene una oferta navideña en la que puedes comprar dos galletas por el precio de una ("¡dos por una!"). Aceptas la oferta y (muy generosamente) decides darle la galleta extra a otra persona en la cola."

#### Instrucciones por mi punto de vista 

Para desarrollar el ejercisio se debe tener claro cual es la idea principal; como en este caso es declarar un string juntando dos oraciones pero estas oraciones son deribadas a una oferta de "2x1" ejemplo: si compras 1 producto random  llevas el otro gratis; diciendo lo siguiente, One for you, One for me. lo que quiere decir Uno para ti, otro para mi. podemos remplazarlo con un cualquier nombre  
One for Zhatan, One for me.

ahora dentro de programacion tenemos que declarar cualquier nombre dciendo la frese 

One for you, One for me.

### Resultados

#### export function twoFer(name: string): string 

Aqui nosotros declaramos la funcion "dospor" dentro hay un objeto el cual es nombre que es un string  y este da otro sting.

#### const firstMessage : string = `One for ${name || 'you'}`
#### const secondMessage : string = ', one for me.'

Aqui declaramos con una variable const dos mensajes; el 1er sera lo que estara en el string ya mencionado en la anterior linea de codigo, diciendo ${name || 'you'}` que sigifica qé entre name y you hay un operador que los separa el cal es el OR donde segun regalmentariamnete cualquiera de los dos si es verdadero salen verdadero si es NAME o YOU cualquiera; y de la misma manera para e segundo con le string llamamos  ', one for me.'

#### return firstMessage + secondMessage

finalmente; devolvemos el mensaje sumando los 2 Messages donde albitrariamente nos repondera.

One for you, One for me.

## Resistor Color Trio

### Introduccion 
Si quieres construir algo con una Raspberry Pi, probablemente usarás resistencias. Para este ejercicio, necesitas saber dos cosas sobre ellos:
Cada resistencia tiene un valor de resistencia.
Las resistencias son pequeñas, tan pequeñas de hecho que si imprimiera el valor de resistencia en ellas, sería difícil de leer.
Para solucionar este problema, los fabricantes imprimen bandas codificadas por colores en las resistencias para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.
Las primeras 2 bandas de una resistencia tienen un esquema de codificación simple: cada color se asigna a un solo número.
En este ejercicio vas a crear un programa útil para que no tengas que recordar los valores de las bandas.

#### Instrucciones por mi punto de vista 
En este ejercisio nos da como introduccion la codificacion que emite una resistencia mediante suu colores lo cual no voy programar cuanro es que vale la resisitencia en si, si no que voy a establecer un orden coóquial de cada color de las resistencias en general proponiendo crear un programa útil para que no tenga que recordar los valores de las bandas.

### Resultados

#### export const COLORS = [ "black", "brown","red","orange","yellow","green","blue","violet","grey","white"];

Aqui inicialmente exporto ua const llamada COLORS en dondeexiste un conuunto de Array, el cual son los coloores que tiene cada banda de  las resistencias; los coloque de manera ordenada.

#### export const colorCode = (color:string) => 

Aqui exporto una constante coloCode con el objeto color igual a un string; dondepuedo argumentar que esta constante trabajara en buscar dentro del Array el color como esta en tipo string

#### return COLORS.indexOf(color) 

Finalmnete, devolvemos toda la cadena de codificacion primero con la constante del Array el cual es COLORS con un INDEX DE porque (color) y asi devulve  el color solicitado ejemplo:

describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  }) 

  black es inicialmente 1 para nosotros como programadores es el 0 que seria la respuesta.

# Link por youtube para una explicacion mas detallada:

Link por youtube:  https://youtu.be/6qjZQ9a9KoI
