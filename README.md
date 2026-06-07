# APV - Administrador de Pacientes de Veterinaria

Backend para la administración de pacientes de una veterinaria. Proyecto desarrollado con Node.js, Express y MongoDB.

## Tecnologías

- **Node.js** con **Express 5**
- **MongoDB** con **Mongoose 9**
- Autenticación con **JWT**
- Encriptación de contraseñas con **bcrypt**

## Scripts

```bash
npm run dev    # Inicia el servidor en desarrollo con nodemon
npm start      # Inicia el servidor en producción
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/api/veterinarios` | CRUD de veterinarios |
| `/api/pacientes` | CRUD de pacientes |

## Variables de entorno

Crea un archivo `.env` en la raíz con:

```
PORT=4000
MONGO_URI=<uri_de_mongodb>
JWT_SECRET=<secreto_jwt>
```
