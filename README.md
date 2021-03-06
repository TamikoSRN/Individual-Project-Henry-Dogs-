<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

Welcome to my individual project from the Soy Henry bootcamp!
This project consisted in the development of a SPA (Single Page Application), which makes use of an API data (The Dog API), and then part of the information it's extracted and stored in a Data Base, so it can be used later at convenience.

## Technologies implemented:

### Data Base:
Sequelize (PostgreSQL) |

### Back-End:
NodeJS - ExpressJS |

### Front-End:
React | React-Router-Dom | Redux | CSS pure |


## How to run the project!

In order to make this project works, you must follow a few steps:

Open the the API folder in your console and run the following commands:

To install all the dependencies of the project (you won't be able to open it without this):

### npm install
To start running the page in your browser:

### npm start
Open http://localhost:3000 to view it in your browser.

In your localhost:3000, open the following route: "http://localhost:3000/temperament to charge the temperaments inside your database (which its tables were already created in this project), now the page should be able to access to all the temperaments (It's not mandatory, but it's required to access to ALL the functionalities, like the filter by temperaments or the creation of a dog)

---

Open the the PUBLIC folder in your console and run the following commands:

### npm install
To start running the page in your browser:

### npm start
Open http://localhost:3001 to view it in your browser.


The page will reload when you make changes.
You may also see any lint errors in the console.


# <--------------------------------------------------------------------------->


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores pr??cticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Horarios y Fechas

El proyecto tendr?? una duraci??n m??xima de tres semanas. En el caso de que completan todas las tareas antes de dicho lapso podr??n avisar a su Instructor para coordinar una fecha de presentaci??n del trabajo (DEMO).

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendr??n un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la ??ltima versi??n estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versi??nes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versi??n tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estar?? el c??digo del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene informaci??n sensible (las credenciales).

Adicionalmente ser?? necesario que creen desde psql una base de datos llamada `dogs`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicaci??n en la cual se puedan ver distintas razas de perro junto con informaci??n relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros

__IMPORTANTE__: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando `?api_key={YOUR_API_KEY}` al final de cada endpoint. Agregar la clave en el archivo `.env` para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde all??.

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### ??nicos Endpoints/Flags que pueden utilizar

  - GET https://api.thedogapi.com/v1/breeds
  - GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

### Requerimientos m??nimos:

A continuaci??n se detallaran los requerimientos m??nimos para la aprobaci??n del proyecto individial. Aquellos que deseen agregar m??s funcionalidades podr??n hacerlo. En cuanto al dise??o visual no va a haber wireframes ni prototipos prefijados sino que tendr??n libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

__IMPORTANTE__: No se permitir?? utilizar librer??as externas para aplicar estilos a la aplicaci??n. Tendr??n que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

#### Tecnolog??as necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se debe desarrollar una aplicaci??n de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Bot??n para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener
- [ ] Input de b??squeda para encontrar razas de perros por nombre
- [ ] ??rea donde se ver?? el listado de razas de perros. Deber?? mostrar su:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
    - Temperamento 
    v- Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
   v - Orden alfab??tico 
   v - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por p??gina.

__IMPORTANTE__: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas desde la API como as?? tambi??n las de la base de datos, pero NO est?? permitido almacenar en la base de datos las razas de perros de la API sino que solamente se pueden guardar aquellas creadas desde el form.

__Ruta de detalle de raza de perro__: debe contener
- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] A??os de vida

__Ruta de creaci??n de raza de perro__: debe contener
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Altura (Diferenciar entre altura m??nima y m??xima)
  - Peso (Diferenciar entre peso m??nimo y m??ximo)
  - A??os de vida
- [ ] Posibilidad de seleccionar/agregar uno o m??s temperamentos
- [ ] Bot??n/Opci??n para crear una nueva raza de perro

> Es requisito que el formulario de creaci??n est?? validado con JavaScript y no s??lo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la raza no pueda contener n??meros o s??mbolos, que el peso/altura m??nimo no pueda ser mayor al m??ximo y viceversa, etc.
 
#### Base de datos

El modelo de la base de datos deber?? tener las siguientes entidades (Aquellas propiedades marcadas con aster??sco deben ser obligatorias):

- [ ] Raza con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - A??os de vida
  - Foto
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relaci??n entre ambas entidades debe ser de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a m??ltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que tambi??n son sociables o inteligentes.

__IMPORTANTE__: Pensar como modelar los IDs de las razas de perros en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguna, esta puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no deber??a haber ambig??edad en cual se deber??a mostrar. Por ejemplo si en la API la raza `Pug` tiene id = 1 y en nuestra base de datos creamos una nueva raza `Henry Pug` con id = 1, ver la forma de diferenciarlas cuando querramos acceder al detalle de la misma.

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No est?? permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] __GET /dogs__:
  - Obtener un listado de las razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluir los temperamentos asociados
- [ ] __GET /temperament__:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deber??n obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde all??
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creaci??n de raza de perro por body
  - Crea una raza de perro en la base de datos

#### Testing
- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
# Proyecto-Individual-Henry-Dogs-
//
