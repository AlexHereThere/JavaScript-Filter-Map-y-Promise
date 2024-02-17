//funciones
crearAsig = () => {
    let lista_nombre_clave = 
    [{nombre:'Matemáticas Discretas',clave:36279},
    {nombre:'Sistemas de Control',clave:36284},
    {nombre:'Diseño Digital',clave:36287},
    {nombre:'Ciencia, Tecnología y Sociedad',clave:36283},//lista de materias posibles
    {nombre:'Redes de Computadoras',clave:36294},
    {nombre:'Programación Orientada a Objetos',clave:36282}];

    let num_nombre_clave = Math.floor(Math.random()*6);//determinar cual materia sera
    
    let año = Math.floor(Math.random()*4)+2020; //determinar fecha

    let mes;
    if(año==2023) mes = Math.floor(Math.random()*6); //si es 2023, no puede pasarse del 6 mes
    else mes = Math.floor(Math.random()*12); //si no, si puede
    let dia = Math.floor(Math.random()*30)+1;

    let asig = {
        clave:lista_nombre_clave[num_nombre_clave].clave,//crear registro
        creditos:Math.floor(Math.random()*5)+4,
        nombre:lista_nombre_clave[num_nombre_clave].nombre,
        calificacion:Math.floor(Math.random()*101),
        fecha:new Date(año,mes,dia)
    };
    return asig;
}
crearNuevoReg = (asig) => { 
    let registro = {
            clave:asig.clave,
            calificacion:asig.calificacion,//crear registro nuevo buscado.
            fechaStr:asig.fecha.getDate()+"/"+(asig.fecha.getMonth()+1)+"/"+asig.fecha.getFullYear()
        };
    return registro;
}
determinarSiReprobo = (asig) => {//boleano para determinar si reporbado
    return asig.calificacion<60;
}
determinarSiReciente = (asig) => {//boleano para determinar si reciente
    return asig.fecha.getTime()>new Date("01/01/2023");
}

filtrarAsigs = (asigs) => {
    let asigsBuscados=[]; //crear nuevo registro de lo buscado

    asigs = asigs.filter(determinarSiReprobo);//solo agarrar los reprobados 
    asigs = asigs.filter(determinarSiReciente);//solo agarrar los recientes (1-1-2023 -- 30-6-2023)
    asigsBuscados = asigs.map(crearNuevoReg); //crear nueva lista con retorno de funcion
    return asigsBuscados
}

//codigo principal
let N = (process.argv[2]);
try{
    if(N==undefined) throw "no introdujo parametro"//crear errores
    if(N<0) throw "numero de asignaturas debe ser mayor que 0.";
}catch(err){
    console.log("ERROR: "+err);
    return;//salir del programa, brincarme las otras instrucciones
}

let asigs = []
for(let i=0;i<N;i++)
{
    asigs.push(crearAsig());
}
let asigsB = filtrarAsigs(asigs);

console.log(asigs);
console.log(asigsB);

