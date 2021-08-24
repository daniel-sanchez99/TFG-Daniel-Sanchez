# TFG-Daniel-Sanchez
ANTEPROYECTO subido esperando a ser aprobado
Presenta el 17 septiembre

# 1. Base de la aplicación

App para jugar solo ( y todo lo más simple posible ).

Sin puntos, ni vidas, ni tiempo, ni nada, traer preguntas una a una y contestarlas hasta que falles una.
- categoria (cualquier categoria)
- dificultad (cualquier dificultad)
- tipo(verdadero o falso)
https://opentdb.com/api.php?amount=1&type=boolean

Aquí vamos a decidir si React o Android Studio. 
Primero probar con React y compilarlo para web, android, iOS
Si se complica el tema, pasar a Android Studio (java)


# Hacer el anteproyecto
Una vez sepamos la tecnología (React o Android Studio), escribo el anteproyecto con las cosas que seguro se van a hacer (varios modos de juego, clasificaciones, ).

—————————————————

# 2. Características extra
Que servirán para los distintos modos de juego

## Tipos de pregunta
Meter el tipo de elección multiple

## Sistema de puntos
Un punto por cada pregunta, en principio
Luego los modos de juego añadirán más puntos por combos, dificultad, etc.

## Vidas
Que el jugador cuente en cada partida con x vidas que va perdiendo según falla.
Y si queremos, que se recarguen al acertar x preguntas.


—————————————————
# 3. Clasificaciones online

## Subir clasificaciones online
Subir a una única lista
Luego tendremos más listas por tipo de juego, dificultad, etc.

## Bajar tabla de clasficaciones 
Y mostrarla en la aplicación
(los x mejores, todos, lo que sea)

—————————————————

# 4. Tipos de juego
Sería muy interesante implementar varios, ya que la parte básica ya la tendrías hecha y le da mucha variedad a la aplicación.
Luego cada tipo de juego tiene una parte nueva que puede ser más o menos difícil de implementar (contador de tiempo, sistema para llevar las categorías desbloqueadas, etc.)


## Training or Free game
Seleccionas categoria y dificultad, 
y a contestar preguntas hasta que quieras salir

## Survival 
Tienes x vidas y vas contestando hasta las que llegues 
(puedes recargar una vida al contestar bien x preguntas)

Puedes plantearlo como que eliges el modo de dificultad y todas las preguntas son de ese tipo.
Aquí podrías tener 3 clasificaciones (supervivencia-easy...) o una en la que ponderes, considerando que las medias valen 2 puntos y las difíciles 3 o algo así.

También se puede plantear como que empiezas en modo fácil, cuando aciertes x pasas a medio y luego a difícil (aquí tendrías una clasificación). 
Puntuación = número de preguntas acertadas (lo lejos que has llegado)

## Time Attack
Contestar todas las que puedas en un tiempo x 
De igual forma puedes plantearlo seleccionando al principio el modo de dificultad o que vaya subiendo. 
Idea de sumar más puntos por combos, al acertar varias seguidas.

## Master of categories
Se selecciona una categoria al azar ( o la eliges )
Se te ponen 3 preguntas fáciles, 2 medias y 1 dificil, que te daria la categoria (como el quesito)
Si fallas alguna respuesta te quita una vida y te cambia de categoría ( o eliges una que tu quieras )
Se ha de ver en algún sitio las categorías que tienes desbloqueadas y que se guarde en el móvil para tenerlas de una partida a otra.

—————————————————

# 5. Estadísticas

Será un menú que se accede desde el principal de la app.
Se han de ir guardando en el dispositivo en cada partida.

Puede ser una estadística fácil. 
Número de preguntas contestadas, acertadas/falladas, %exito
Tiempo jugado. 
etc.

O más compleja.
Categoría en la que eres mejor / peor
O hasta un gráfico (librería externa) en el que se vean todas las categorías con su % de exito
Aquí sin que se nos complique mucho hay muchas cosas que se pueden poner

—————————————————

# 6. Otros

- Compartir 
El menú tipico para compartir en redes sociales, correo, etc
Se compartiría algo tipo "estoy jugando al trivial fulanito y he sacado la puntuación x en el modo y, a ver si puedes batir mi record"
