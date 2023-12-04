const mostrarListasEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados:");
    estudiantes.forEach(estudiante => {
        console.log(`nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
}
module.exports = {mostrarListasEstudiantes}