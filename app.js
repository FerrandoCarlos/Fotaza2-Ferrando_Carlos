import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sequelize from './config/db.js';
import indexRouter from './src/routes/index.js';

dotenv.config();

/**
 * @fileoverview Entry point de la app
 * @module app
 */

const app = express();
const PORT = process.env.PORT || 3000;

// Para usar __direname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);

// Motor de plantillas
app.set('view engine', 'pug');
app.set('views', join(__direname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__direname, 'public')));

// Rutas
app.use('/', indexRouter);

/**
 * @description Sincroniza la BD y arranca el servidor
 */
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('✅ Base de datos sincronizada.');
    app.listen(PORT, () => {
      console.log(
        `🚀 Fotaza 2 corriendo en http://${process.env.DB_HOST}:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.error(`❌ Error al conectar la BD: ${err.message}`);
  });
