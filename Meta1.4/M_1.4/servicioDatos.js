let finDeTransmisionDeDatos = function(id) {
    console.log('Transferencia',id,'terminada');
}

let obtenDatosDeInternet =  function (id,duracion) {
    console.log('Proceso',id,'obteniendo datos de Internet');
    return new Promise((resolve) => {
        setTimeout(() => {
            finDeTransmisionDeDatos(id);
            resolve();
        },duracion);
    });
}

module.exports.getDatos = obtenDatosDeInternet;