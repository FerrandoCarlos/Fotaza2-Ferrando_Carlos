import { Router } from 'express';

/**
 * @fileoverview Rutas principales de la aplicación.
 * @modules routes/index
 */

const router = Router();

/**
 * @route GET /
 * @description Página de inicio.
 */
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Fotaza 2 | Inicio' });
});

export default router;
