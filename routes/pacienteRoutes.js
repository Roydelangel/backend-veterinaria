import express from 'express';
import { agregarPaciente, obtenerPacientes } from '../controllers/pacienteController.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
.post(checkAuth, agregarPaciente)
.get(checkAuth, obtenerPacientes);


export default router; 