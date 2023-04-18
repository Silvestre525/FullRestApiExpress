import path from "path";

const controller = {
    empleados:(req,res)=>{
        res.send('obteniendo empleados');
    },
    postEmpleados:(req,res)=>{
        res.send('Creando Empleados');
    },
    putEmpleados:(req,res)=>{
        res.send('Actualizando Empleados');
    },
    deleteEmpleados:(req,res)=>{
        res.send('Eliminando Empleados o Empleadas');
    } 

}


export default controller;