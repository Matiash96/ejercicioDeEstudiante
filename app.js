const readlineSync = require('readline-sync')
const {mostrarListasEstudiantes} = require('./listaEstudiantes')

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes a registrar: ")
    const estudiantes = [];

    for ( let i = 0; i < cantidadEstudiantes; i++) {
        const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i + 1}: `);
        const edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);

        const estudiante = {
            nombre,
            edad
        };;
        estudiantes.push(estudiante);
    }

    mostrarListasEstudiantes (estudiantes);
};

registrarEstudiantes();