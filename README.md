## Scaffolding básico para empezar una aplicación utilizando Angular,nodejs y Saas.

El proyecto es una base estructural utilizando Angularjs al estilo de Jhon Papa, nodejs, sass y gulp. Esta base contiene la estructura base con una barra de navegación y con las traducciones configuradas.

Es útil para empezar proyectos e incluso aprender a hacer el deploy antes de añadir ás módulos.

## Demo 

[Findmenu.tk](https://findmenu.tk)

### John Papa's Style Guide
 **[John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1)**. Es una forma interesante de trabajar en AngularJs. Le recomendamos que aprenda más sobre * John Papa *.

### Client
**[AngularJs](https://angularjs.org/)**.Este lenguaje es un buen marco porque simplemente realiza diferentes tareas. Puede generar vistas, uso de vinculación de datos, rutas, organización de componentes en módulos, comunicación con el servidor ...

### Server
**[node.js](https://nodejs.org/)**. Es un entorno Javascript basado en servidor, basado en eventos. En realidad es un lenguaje de programación muy de moda por su velocidad.. 

En el proyecto también se utiliza **html**, **css** , **sass-css**, **gulp** y **bower**.

## Running angular base en modo desarrollo

1.- Descargarse el proyecto desde github.

2.- Instalar paquetes:

   2.1- Instala paquetes npm en global. 

   `npm install -g bower gulp nodemon`.

   2.2- Ejecutar el comando `npm install`.

   2.3- Ejecutar el comando `bower install`.

3.- Run the project with `gulp serve-dev` modo desarrollo para modificar la aplicación.

   3.1- Al modificar el estilo refresca el navegador.

## Optimice angular base to build version

Antes de lanzar la aplicación en modo producción debemos optimizarla, para ello existen una tareas que debemos pasar ya que después en el modo build también se ejecutarán y no funcionarán si no estan correctas.

### Code Analysis

- `gulp vet`

    Realiza análisis de código estático en todos los archivos javascript.Utiliza jshint and jscs.

- `gulp vet --verbose`

    Muestra todos los archivos afectados y la información extendida sobre el análisis de código.

- `gulp plato`

    Realiza el análisis de código utilizando plato en todos los archivos javascript. Plato genera un informe en la carpeta de informes.

### Testing

- A fecha de 16/03/2017 hay fallos en laslibrerías de bard y sinon y no funcionan bien, estan deshabilitados en build.

- `gulp serve-specs`

    Sirve y navega a la página html en un navegador de pruebas y ejecuta las pruebas de unidad en ella. Inyecta cualquier cambio sobre la marcha y vuelve a ejecutar las pruebas. Vista rápida y fácil de las pruebas como una alternativa a la terminal a través de `gulp test`.

- `gulp test`

    Ejecuta todas las pruebas unitarias usando karma, mocha, chai y sinon con phantomjs. Depende de la tarea del vet, para el análisis de código.

## Running angular base en modo build

1.- Lanza la aplicación en modo build `gulp serve-build`.

- Esto optimizará el código en la carpeta build y lanzará el servidor..

## Angular base deploy

Para desplegar la aplicación debemos haber hecho funcionar la aplicación en modo serve-build en local y deberemos tener en cuenta los mismos pasos que hemos realizado y además losficheros que no se actualizan en git.

Realiza un git clone de la aplicación en tu carpeta home del vps.

Importa la base de datos y crea los ficheros que no están en git en sus directorios.

- config.db.js
- .env
- privatekey1.pem
- cert1.pem

Realiza un prueba `sudo PORT=3000 NODE_ENV=build ./src/server/app.js` y conecta con la url https://tudominio:3000, si cierras la consola la aplicación se parará.

Para tener la aplicación siempre funcionando debes intalar un paquete.

- `npm install forever -g`
- Ahora ejecuta dentro del directorio el siguiente comando `sudo PORT=3000 NODE_ENV=build forever start ./src/server/app.js` cierra la terminal y comprueba que sigue funcionando.
- Ejecutando `sudo forever list` podrás observar que la tarea sigue en curso. Ahora ya tienes la aplicación funcionando.
- La configuración que utilizo actualmente es redirigir desde Apache mediante proxy a la url findmenu.tk con el puerto 3000. El motivo es porque soloes una prueba y de esta forma puedo lanzar mas aplicaciones de la misma forma.

## Notas:

Este proyecto no está completamente terminado pero tiene una buena base de ejemplos para poder ampliarlo o rectificado.

Aceptamos todo tipo de comentarios, correcciones o dudas sobre el mismo.