const servicio = require("./servicioDatos");

ejemploAsync = async function(){
    await servicio.getDatos(1,3000);//usando await para esperar promesas.
    await servicio.getDatos(2,500);
    await servicio.getDatos(3,4000);
    await servicio.getDatos(4,700);
    await servicio.getDatos(5,3500);
}

servicio.getDatos(1,3000)
.then(()=>{
    return servicio.getDatos(2,500);
})
.then(()=>{
    return servicio.getDatos(3,4000);//usando .then para segmentar la ejecucion a partir de promesas
})
.then(()=>{
    return servicio.getDatos(4,700);
})
.then(()=>{
    return servicio.getDatos(5,3500);
})
.then(()=>{
    console.log("AHORA CON AWAIT...")
    ejemploAsync();
})







