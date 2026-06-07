import Paciente from "../models/Paciente.js";


const agregarPaciente = async (req, res) => {
    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;

    try {
        const pacienteGuardado = await paciente.save();
        return res.json(pacienteGuardado);
    } catch (error) {
        console.log(error);
    };
};

const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find().where('veterinarios').equals(req.veterinario);

    res.json(pacientes);
};

export {
    agregarPaciente,
    obtenerPacientes
};