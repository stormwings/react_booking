# react_booking

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/1280px-Trivago.svg.png" align="right"
     title="Trivago booking" width="180" height="58">

**Aplicación** landing page de booking creada con ReactJS.
**Components** siguiendo conceptos de high order components (dumb and smart components).
**Estructura** basada en modulos separados para cada tipo de archivos.
**Estilos** SASS, sin ninguna otra libreria para estilos o el responsive.
**Responsive** completamente en todas las resoluciones.
**Deploy** se utiliza zeit para generar un deploy de testing.

<p align="center">
  <img src="https://i.ibb.co/RvWKHSS/descarga.png" alt="Size Limit CLI" width="738">
</p>

## Librerias

- [React](https://github.com/facebook/react)
- [Prop-types](https://github.com/facebook/prop-types)
- [React-datepicker](https://github.com/Hacker0x01/react-datepicker)
- [React-select](https://github.com/JedWatson/react-select)
- [React-slick](https://github.com/akiran/react-slick)

## Usage

Pasos para levantar la aplicación en local.

0. `prerequisitos` para levantar la aplicacion:

   ```json
     "NPM >= 10"
     "NODE >= 5"
   ```

1. `clonar` el repositorio:

   ```json
     "SSH": "git@github.com:stormwings/react_booking.git"
     "HTTPS": "https://github.com/stormwings/react_booking.git"
   ```

1. ingresar y ejecutar:

   ```js
   npm install
   ```

   ```js
   npm start
   ```

## Estructura de carpetas

- **assets**: aquí colocamos los archivos estáticos (jsondata e imágenes svg)
- **components**: componentes separados en smart and dumb components.
- **helpers**: textos urls y functions que vamos a utilizar en la webapp.
- **styles**: estilos globales para nuestra aplicación.
- **App.js**: nuestra principal view.

## Pasos durante el desarrollo

1. **Commit 4f5a3d8a0626d88b235038c84129d60c2f87c007**
   Creamos el primer maquetado layout. Solo maquetamos lo necesario para después reutilizar
2. **Commit 4f0ccc54158541f14dad9a0e237415a6215374e1**
   Finalizamos el maquetado, también agregamos algunos assets e imágenes.
3. **Commit 5ca7afb8634d98d909ec2125e84ce7cd83b700de**
   Creamos los primeros componentes inteligentes, utilizamos los html del maquetado para separarlos
   Ademas creamos los estilos globales
4. **Commit e66ca9a16b5e1d541b033b52dc4dddc46e4c773e**
   Abstraemos el componente navbar y lo separamos en dumb components
   También agregamos un json con la información de las currencies y constant links
5. **Commit d5bf4c3b3142a6dfc1797c994e9c85dec76ebbc0**
   Separamos el componente hero y creamos sus dumb components
   Tambien agregamos más constantes
6. **Commit e4b7a619debfc4ab4063cd387e5d4cc1d0d84c93**
   Separamos el componente question y creamos un componente para manejar los bloques de textos
   Agregamos el contenido del texto en copys.js
7. **Commit 256bd8b0fa4f973311110c4a621961244a31ec5c**
   Separamos tanto magazine como guide en dumb components, creamos un json data para
   guardar la información y copys en nuestro archivo correspondiente
8. **Commit 256bd8b0fa4f973311110c4a621961244a31ec5c**
   Separamos destination y footer en dumb components, usamos la información necesaria en
   copy.js y json.
9. **Commit e2c90cbf152033ec7c3b3929ffd758ab535e079a**
   Mejoramos nuestros dumb components adaptandolos a nuestro nuevo smart component "suggestion"
   el mismo esta hecho de componentes reutilizables.
   Agregamos nuestro json list con la información que necesitamos y aplicamos algunas improves
   a otros componentes
10. **Commit 87f5e662c9b9bcd76a6f40a7c296efd48d354bf4**
    mejoramos estilos y responsive a nuestros ultimos componentes utilizados
11. **Commit fd5651b1ae88cac3f7f520e6a4ac2d17f1c34e2b**
    Desarrollamos nuestros input components para nuestro hero. Agregamos nuestras constantes,
    iconos (componentes jsx/svg) e información necesaria.
12. **Commit e1cd8a0870f946c542d8f83adf23e5501eabdd96**
    Agregamos mejoras en el manejo de los imports, en los nombres de componentes y clases
    mejoramos un poco los estilos. También agregamos los comentarios necesarios donde haga falta
    para facilitar la lectura del código.
13. **Commit 6a7f310327d755c76533297cafb71e8cf8b074f6**
    Ultimos cambios, proptypes para nuestros componentes reutilizables
14. **Ultimo**
    Documentación
