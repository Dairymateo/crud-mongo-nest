# Backend - CRUD con NestJS + MongoDB

Este proyecto es el backend de una aplicación CRUD que permite gestionar usuarios conectados a una base de datos MongoDB usando Mongoose.

## Tecnologías usadas

- **NestJS** 11
- **MongoDB** + **Mongoose**
- **TypeScript**
- **Jest**: Testing
- **ESLint + Prettier**: Linter y formateador

## Instalación y uso

```bash
# 1. Clonar el proyecto
cd backend

# 2. Instalar dependencias
npm install

# 3. Iniciar el backend en modo desarrollo
npm run start:dev
```


## Estructura del proyecto

```
src/
├── users/
│   ├── dto/
│   ├── entities/
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.module.ts
└── main.ts
```

## Dependencias del backend (NestJS)

```json
"dependencies": {
  "@nestjs/common": "^11.0.13",
  "@nestjs/core": "^11.0.13",
  "@nestjs/mapped-types": "^2.1.0",
  "@nestjs/mongoose": "^11.0.3",
  "@nestjs/platform-express": "^11.0.1",
  "class-transformer": "^0.5.1",
  "class-validator": "^0.14.1",
  "mongoose": "^8.13.2",
  "reflect-metadata": "^0.2.2",
  "rxjs": "^7.8.1"
},
"devDependencies": {
  "@nestjs/cli": "^11.0.0",
  "@nestjs/schematics": "^11.0.0",
  "@nestjs/testing": "^11.0.1",
  "@types/express": "^5.0.0",
  "@types/jest": "^29.5.14",
  "@types/node": "^22.14.0",
  "@types/supertest": "^6.0.2",
  "eslint": "^9.18.0",
  "eslint-config-prettier": "^10.0.1",
  "eslint-plugin-prettier": "^5.2.6",
  "jest": "^29.7.0",
  "prettier": "^3.4.2",
  "supertest": "^7.0.0",
  "ts-jest": "^29.2.5",
  "ts-loader": "^9.5.2",
  "ts-node": "^10.9.2",
  "typescript": "^5.7.3"
}
```

## Endpoints disponibles

| Método | Ruta       | Descripción                |
|--------|------------|----------------------------|
| GET    | /users     | Obtener todos los usuarios |
| POST   | /users     | Crear un nuevo usuario     |
| PUT    | /users/:id | Actualizar usuario         |
| DELETE | /users/:id | Eliminar usuario           |

---
