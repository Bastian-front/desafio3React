
import React, {useState} from 'react'

const ListaTareas = () => {
const [tarea, setTarea] = useState('')
const [LstTareas, setLstTareas] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3'])

const agregarTarea = (e) => {
    e.preventDefault ();
    const nuevoArreglo = [...LstTareas, tarea];
   setLstTareas (nuevoArreglo);
}


  return (
    <div>
        <form onSubmit={agregarTarea}>
        <input type='text' id='nombreTarea' name='nombreTarea' onChange={(e) => setTarea(e.target.value)}></input>

        <button>Agregar Tarea</button>

        </form>
        <ul>
           {LstTareas.map(t => <li key={t}>{t}</li>)}
        </ul>

    </div>
  )
}

export default ListaTareas