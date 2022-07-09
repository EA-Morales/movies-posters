# Objetivo

Realizar una mini-webapp en la que se mostrará un listado de películas con su póster y título. Una vez que se clickee en la imagen de alguna de ellas se visualizará un detalle de los datos de la película en una modal.

Buscador en tiempo real de peliculas.

> Objetivo largo plazo:

- creacion de usuarios
- login/logout
- peliculas y series favoritas
- recordatorio de proximas emisiones

## Condiciones:

- Desarrollar usando vite o nextjs
- Se puede utilizar cualquier librería de componentes, sea pública o propia.
- El guardado de información debería hacerse con react-redux o los hooks useContext+useReducer. (Cualquier gestor de estados globales valdría)

## Herramientas

> PNPM (npm para nodejs)

> VITE (frontend tooling)

> Eslint and Prettier (linting)

> Tailwind css (css framework)

### Posibles herramientas a usar

[ ] Chakra ui / Material UI

[x] Axios

### API the movie db

> DOCS
https://developers.themoviedb.org/3/getting-started/introduction

### Variables de entorno

- Crear en root el archivo .env.local e inicializar esta variable

VITE_API_KEY='(AQUI VA TU API KEY SIN LOS PARENTESIS)'
