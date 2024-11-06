# Parcial frontend 2024
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.


## Frontend - development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Backend - mock con json-server
El proyecto tiene un archivo db.json que se puede levantar con json-server para disponer de un set de apis de backend.

### Paquete
https://www.npmjs.com/package/json-server

### Ejecutar el server para levantar las apis
```
npx json-server ./src/assets/data/db.json
```

## Enunciado
- Crear la pagina de "Mis cursos", donde se deberá visualizar el listado de cursos contenido en el archivo db.json
- Agregar la ruta al componente en el archivo correspondiente
- Agregar el link de la pagina al menu
- Crear la interface que representa la estructura del objeto curso
- Crear el servicio para invocar la api y retornar los cursos
- En el caso de que no existan registros en el response, o no se pueda invocar la api, mostrar el mensaje correspondiente





