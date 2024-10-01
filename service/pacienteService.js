const fs = require('fs');
const readline = require('node:readline');
const Pacientes = require('../models/paciente');

const findAll = async () => {
    const arregloPacientes = [];
    const fileStream = fs.createReadStream('./data/pacientes.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        const arregloLinea = line.split(',');
        const paciente = new Pacientes(arregloLinea[0], arregloLinea[1], arregloLinea[2], arregloLinea[3], arregloLinea[4], arregloLinea[5]); //posible error
        arregloPacientes.push(paciente);
        
    }
    return arregloPacientes;
}

const findById = (id) => {

}

const insert = (paciente) => {

}

const update = (paciente) => {

}

const deleteById = (id) => {

}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
}