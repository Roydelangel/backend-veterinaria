import express from 'express';
import { perfil, registrar, confirmar, autenticar, olvidePassowrd, comprobarToken, nuevoPassword } from '../controllers/veterinarioController.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassowrd);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// Private
router.post('/perfil', checkAuth, perfil);

export default router;