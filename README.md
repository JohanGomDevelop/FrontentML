# Test Front end React ML
El proyecto implementa 3 vistas
### Caja de búsqueda
![](screen/screen1.png)

### Resultados de la búsqueda
![](screen/screen2.png)

### Detalle del producto
![](screen/screen3.png)


 El proyecto consume los endpoint de la api ApiTestML ubicado en https://github.com/JohanGomDevelop/ApiTestML

Los enpoint son:

- http://localhost:3000/api/items?q=:query
- http://localhost:3000/api/item/:id

## ¿Como correr el proyecto?
Ejecuta los comandos
- npm install
- npm run dev

Generar proyecto en dev
- npx run serve:dev

Correr test 
- npm run test

El proyecto proyecto corre en el pueto 8080 por defecto.

## Configuración de entorno de desarrollo
El proyecto fue creado desde cero instalando todas las dependecias
se configura Webpack, Babel y los loders necesarios para el proyecto
como sass-loader.

## SEO 
Se implementa el cambio de titulo y description de la pagina con el
componente helmet


## Performance

- Se implementa React.memo para evitar renderización repetitiva de compoentes,
cuando no es necesario

- se Implementa React.lazy para eviatr cargar componentes que no se estan cargando

## TEST
- se realiza un test de integracion con la herramiente cypress
![](screen/cypress.png)
## Autor
JOHAN ALBERTO GÓMEZ GIRÓN 


