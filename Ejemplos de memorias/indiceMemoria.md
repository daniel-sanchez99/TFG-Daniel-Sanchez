
# ESTRUCTURA

## 1. Introducción 
	
- Introducción de los temas relacionados.
- Motivación del trabajo a realizar. 
- Objetivos definidos de forma clara.


## 2. Material y Métodos Utilizados

- Metodología
Suele ser iterativa incremental. Mucha gente se mete en alguna ágil como Scrum pero es arriesgado, ya que realmente raro es el que la aplica y al final le caen preguntas incómodas en la defensa sobre si cumplió todo lo del manifiesto ágil (pair programming,...).

- Planificación del trabajo
Sería bueno incluir un diagrama de Gantt con la planificación temporal de las principales etapas del proyecto. Sin excesivo detalle. Aquí, aparte de las etapas típicas de desarrollo, incluiríamos otras tareas como el estudio de herramientas al principio, la generación de documentación durante todo el proyecto, reuniones de control, etc.

- Tecnologías y Herramientas
Hacemos una pequeña comparativa de las opciones que tenemos para realizar el desarrollo y justificamos las elecciones. Hablamos principalmente de lenguajes de programación y entornos de programación, control de versiones, de calidad, etc.


## 3. Presentacion del problema y análisis de requisitos
	
- Requisitos funcionales y no funcionales.
Es recomendable incluir mockups, sobre todo en app móviles y juegos.
Se pueden completar con diagramas de casos de uso, plantillas y dig de secuencia si son necesarios.


## 4. Diseño
	
- Diseño arquitectónico 
Suele ser un 3 capas que modelamos con un diagrama de componentes.

- Diseño detallado
Por cada capa comentamos el diseño detallado. 
Normalmente para persistencia modelamos la estructura de datos... con diagrama de la base de datos, o esquemas XSD,... dependiendo de lo que utilicemos.
Para negocio usualmente, diagrama de clases y de comportamiento si son necesarios.
Para presentación, podemos realizar diagramas de navegación, diseños de pantallas, etc.

- Si hemos utilizado algún otro patrón de diseño lo comentaremos en este apartado. 



## 5. Implementación

La idea es organizar esta sección en 3 partes (las 3 capas), para comentar cómo se ha implementado cada una. Se comentan los lenguajes utilizados y alguna captura parcial del código, a modo de ejemplo pero sin entrar en mucho detalle. De esta forma se da una idea de la complejidad técnica que hay detrás del proyecto y de los distintos lenguajes utilizados.

Lo suyo es ponerlo con cierta trazabilidad. Por ejemplo, en la capa de presentación proporcionar la captura de cierta funcionalidad de la interfaz y explicarla, y luego en la capa de negocio seleccionar una captura de alguna función implicada, y la parte de datos correspondiente.

Dependiendo del contenido de cada proyecto, esta fase podemos estructurarla de otra forma para que quede mejor. Por ejemplo, podríamos integrarla con la anterior "Diseño e implementación", de forma que iríamos comentando capa a capa su diseño a alto nivel, a bajo nivel y su implementación.


## 6. Pruebas

A este apartado hay que prestarle atención, ya que por lo general suele ser flojo y es objeto de preguntas del tribunal. Por un lado hay que comentar bien las pruebas unitarias, pero sin olvidar las demás: integración, sistema (requisitos no funcionales), aceptación.



## 7. Conclusiones

Conclusiones, donde se vea que los objetivos planteados inicialmente han sido cubiertos.
Trabajo futuro.



## Bibliografía

Lo principal es cuidar mucho que las referencias que estén completas y citadas en el texto. En esto se fija el tribunal sí o sí, junto con la calidad de la memoria, tanto en estilo como en contenido.

Algunas referencias de Ingeniería del Software

- Sommerville, 2012. Ingeniería del Software. 9a Edición, Addison-Wesley. 2012.
- E.Gamma, Patrones de Diseño. Addison-Wesley. 2002.
- J.Arlow e I.Neustadt. UML 2 and the Unified Process: Practical Object-Oriented Analysis and Design. Addison-Wesley. 2005.
- D.Pilone. UML 2.0 in a Nutshell. O’Reilly. 2005.
- Alistair Cockburn, “Writting Effective Use Cases”. Addison-Wesley, 2000.
- Richard N. Taylor, Nenad Medvidovic y Eric M. Dashofy. “Software Architecture: Foundations, Theory, and Practice”. 2009.

Apps móviles

- Algún libro o referencia a javascript
- Algo de html y css si quieres, aunque sea el W3C
- Sobre phonegap tenemos este en la biblioteca, aunque sería bueno añadir alguno más reciente... PhoneGap Beginner’s Guide. Andrew, Lunny. Editor: Packt Publishing (2011)
