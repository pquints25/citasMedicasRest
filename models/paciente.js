class Pacientes {

    constructor(nombre, apellido, id, fecha, hora, genero){
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = id;
        this._fecha = fecha,
        this._hora = hora,
        this._genero = genero
    }
    
    get nombre() {
        return this._nombre;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }
    
    get apellido() {
        return this._apellido;
    }
    
    set apellido(apellido) {
        this._apellido = apellido;
    }
    
    get id() {
        return this._id;
    }
    
    set id(id) {
        this._id = id;
    }
    get fecha() {
        return this._fecha;
    }
    
    set fecha(fecha) {
        this._fecha = fecha;
    }
    
    get hora() {
        return this._hora;
    }
    
    set hora(hora) {
        this._hora = hora;
    }

    get genero() {
        return this._genero;
    }
    
    set genero(genero) {
        this._genero = genero;
    }
}
//exportara clase pacientes.
module.exports = Pacientes;