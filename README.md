# Documentación defensa proyecto

## Motivación

Los agentes comerciales hacen de intermediario entre las fábricas y sus clientes (las tiendas que compran los productos que estas fabrican). Para ello visitan a las tiendas mostrando los productos de la fábrica y dando la opción de hacer pedidos a través de una aplicación que manda el pedido directamente a la fábrica, y con eso el agente comercial controla que el pedido se envíe y se reciba correctamente.

La motivación para realizar esta aplicación surgió tras la necesidad de mi padre de una aplicación que permita realizar pedidos más adaptables tanto por parte de la fábrica como por parte de los clientes, de esta forma aprovecho la oportunidad para crear un programa que mejore la relación de los agentes comerciales, fábricas y sus clientes a la vez que tengo la oportunidad de poder ayudar a mi padre en su trabajo.

## Objetivos

El objetivo es conseguir crear una aplicación web que servirá servirá para que los agentes comerciales puedan realizar los pedidos de sus clientes para luego enviarlos a la fábrica, con la peculiaridad de que al añadir productos se podrán añadir ciertas reglas sobre estos, como marcar que productos serán visibles para un cliente en concreto y cuales no. Esta aplicación sólo debería ser usada por los agentes comerciales y las fábricas, no por los clientes.

## Descripción técnica

La aplicación web utilizará una arquitectura en tres capas divididas en interfaz, lógica de negocio y acceso a datos, en la que además introduciremos test unitarios para poder comprobar que la aplicación se desarrolla con el menor número posible de errores.

Para la capa de interfaz, emplearé React, una librería de JavaScript, ya que considero que la estructura que utiliza para generar contenedores que contienen componentes capaces de generar datos de forma dinámica es muy útil, además es una librería que se enfoca más en la creación de vistas. También utiliza manejadores de estado para poder manejar los datos que contienen los componentes, para facilitar el manejo de estos estados utilizaré Redux, una librería que se integra muy bien con React. Para desarrollar esta capa usaré el IDE gratuito Visual Studio Code.

En cuanto a la capa de lógica de negocio, crearé una API Rest utilizando ASP.NET Core, un framework open-source de C# que se ejecuta sobre .NET Core y que está enfocado a desarrollo web. Utilizaré esta tecnología ya que quiero mejorar mis conocimientos en C# para poder usarlo en proyectos futuros, además ASP.NET Core es muy escalable y en caso de ser necesario da la opción de generar código asíncrono debido a la posibilidad que tiene de ejecutarse en multihilo. Para los casos test unitarios utilizaré NUnit y para desarrollar esta capa usaré el IDE Visual Studio Community 2019, ya que es la versión gratuita pero aún así tiene las funcionalidades que necesito y más.

En cuanto a la capa de acceso a datos, utilizaré un módelo no relacional mediante NOSQL en MongoDB. Aún sabiendo que probablemente no sea lo más óptimo para la aplicación que planteo, si es un tipo de base de datos que manejo mejor que SQL y que me genera mayor interés. Además posee herramientas que ofrecen una gran facilidad para trabajar con MongoDB como pueden ser MongoAtlas que ofrece la posibilidad de tener la base de datos alojada en el propio servicio de Mongo o MongoCompass que te permite ejecutar queries y visualizar la base de datos de manera muy sencilla. Para manejar estos datos desde mi aplicación usaré el paquete de drivers oficial de MongoDB para C#.

Además de esto, para testear y ayudar al desarrollo de la API Rest, además de las propias librerías de test unitarios, también usaré Postman y Curl para hacer peticiones a los endpoints de la API y comprobar que permite realizar peticiones que devuelvan la información correcta.
![Diagrama arquitectura](/documentationImages/diagramaArquitectura.png)
_Diagrama de la arquitectura de la aplicación_

![Diagrama front](/documentationImages/diagramaFront.png)
_Diagrama de componentes de la parte cliente_

![Diagrama back](/documentationImages/diagramaBack.png)
_Diagrama de componentes de la parte servidor_

## Metodología de desarrollo

En cuanto al proceso de desarrollo utilizaré el modelo de desarrollo incremental ya que considero que es el que mejor se adapta a mi forma de trabajar y me facilitará poder implementar las historias de usuario en orden de importancia. Usaré git como control de versiones para poder tener mayor control sobre el desarrollo y poder desarrollar cada incremento en una nueva rama. Además me ayudaré de la TDD para desarrollar la aplicación minimizando los posibles errores.

En la fase de análisis se definirán las funcionalidades que tendrá el proyecto, además este anteproyecto formaría parte del análisis, también se definirá qué diseño de interfaz tendrá la aplicación y que importancia tiene cada historia de usuario para tener claro en qué orden deberían implementarse.

A continuación, para cada incremento que vaya a añadir habrá que repetir un ciclo de 3 fases: diseño, codificación y mantenimiento.

En cuanto al diseño, se define qué clases, estructuras de datos, modelos y colecciones de la base de datos se necesitan para poder construir el incremento y, además, definir qué diseño de interfaz tendrá este incremento sobre el diseño global de la aplicación. Con esto se consigue tener una idea aproximada de que se necesita programar, aunque luego esta idea suele tener ciertos cambios a medidad que se codifica.

Tras esto, se empieza a programar la tarea intentando que el código se mantenga lo más abierto posible a la extensión sin tener que modificar el código existente e intentando que, en el caso que sea necesario, el código pueda ser reutilizado para evitar la repetición de código.

En la fase de mantenimiento, tras comprobar que la nueva funcionalidad funciona como debería, revisamos que el código escrito sea mantenible cumpliendo al menos los requisitos explicados en el apartado de codficiación, y en caso de no serlo, se refactoriza el código para que pueda cumplir con ello.

Para la gestión de tareas se ha utilizado Trello por su simplicidad y facilidad a la hora de trabajar utilizando esta herramienta como un panel Kanban.

Mediante git, se han creado ramas para cada apartado de la aplicación y así poder facilitar realizar reverts cuando ha sido necesario sin miedo a perder cambios en la rama principal de desarrollo (dev) o en la rama principal de la aplicación (master).

## Diagrama de Gantt

![Diagrama de Gantt antes](/documentationImages/ganttAntes.png)
_Diagrama de Gantt antes_
![Diagrama de Gantt después](/documentationImages/ganttDespues.png)
_Diagrama de Gantt después_

Uno de los motivos principales de la diferencia de tiempo ha sido el mal análisis de las historias de usuario, ya que al crearlas no tuve en cuenta lo suficiente las tecnologías que iba a usar y mis conocimientos en ese momento de estas, cosa que ha provocado que haya hecho ciertas partes de la aplicación de una forma diferente a la que tenía pensada y eso ha dificultado la implementación de ciertas historias de usuario que en un principio parecían más sencillas de lo que realmente han sido. Además de que de ciertas tecnologías tenía muy pocos conocimientos y otras he tenido que actualizar los conocimientos que tenía por los cambios que habían introducido en el último año.

## Clockify

![Clockify](/documentationImages/clockify.png)
_Clockify_

## Presupuesto de la app para el comprador

Coste de proyecto:
- Visual Studio Professional 45€/mes * 2 meses = 90€
- Desarrollo 22€/hora * 92 horas = 2024€
- Diseño de interfaz 19€/hora * 15 horas = 285€
- Análisis 18€/hora * 12 horas = 216€
- Diseño de BBDD 22€/hora * 5 horas = 110€
- Despliegue 20€/hora * 3.5 horas = 70€
Total = 2887.34€

Pago mensual para mantener el back-end:
- Azure App Service 46.17€/mes

Y en caso de ser necesario debido a un tráfico muy alto de la aplicación se deberían añadir los siguientes pagos mensuales:
- MongoDB Atlas Dedicated Clusters 57€/mes
- Firebase Blaze Plan pay as you go (pago en base al tráfico).
