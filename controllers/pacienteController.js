const { request, response } = require ('express')
const { findAll } = require('../service/pacienteService')


const findAllController = async (req = request, res = response ) => {
    const pacientes =  await findAll();
    res.json(pacientes);
}

const findByIdController = (req = request, res = response ) => {
    res.json('findById pacientes')
}

const insertController = (req = request, res = response ) => {
    res.json('insert pacientes')
}

const updateController = (req = request, res = response ) => {
    res.json('update pacientes')
}

const deleteByIdController = (req = request, res = response ) => {
    res.json('delete pacientes')
}

module.exports = {
    findAllController, 
    findByIdController, 
    insertController, 
    updateController, 
    deleteByIdController
}