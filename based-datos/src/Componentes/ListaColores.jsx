import React, {useState} from 'react'


const ListaColores = () => {

    const colores = ['red','yellow','blue','green'];
    const [color, setColor] = useState ('');
    const agregarColor = () =>{
        
    }

  return (
    <div>
        <form onSubmit={agregarColor}>
        <input type='text' id='nombreColor' name='nombreColor' 
        onChange={(e) => setColor(e.target.value)}></input>

        <button>
            Agregar Color
        </button>

        </form>
    </div>
  )
}

export default ListaColores