import React from 'react'

const ListaProductos = () => {

const ListaProductos = ['Producto 1', 'Producto 2','Producto 3'];

  return (
    <div>
      <ul>
      {ListaProductos.map (p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}

export default ListaProductos