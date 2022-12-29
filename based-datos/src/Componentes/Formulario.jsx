import React from 'react'
import { useState } from 'react';

const Formulario = ({setlstColaboradores, lstColaboradores, setListaFiltrada}) => {

    const [nombre, setNombre] = useState ('');
    const [email, setEmail] = useState ('');

    const agregarColaborador = (e) => {
        
        e.preventDefault ();
        setlstColaboradores([...lstColaboradores, {nombre: nombre, correo: email}]);
        setListaFiltrada([...lstColaboradores, {nombre: nombre, correo: email}]);
    }
  return (
    <div>
         <form onSubmit={agregarColaborador}>
    <div>
        <input type='text' id='nombre' name='nombre' placeholder='Nombre Colaborador' 
        onChange={(e)=> setNombre (e.target.value)}
        ></input>
   </div>
   <div>
   <input type='email' id='email' name='email'placeholder='Email Colaborador'
   onChange={(e)=> setEmail (e.target.value)}
        ></input>
   </div>
        <button className='btn btn-primary'>
            Agregar Colaborador
        </button>

        </form>
    </div>
  )
}

export default Formulario