import React, { useEffect, useState } from 'react'

const ComponenteEstado = ({nombre}) => {

    const[contador,setContador] = useState(0)

    const products=[
        {id:'1', name:'Opcion1', description:'', stock:'1'},
        {id:'2', name:'Opcion2', description:'', stock:'1'},
        {id:'3', name:'Opcion3', description:'', stock:'1'},
        {id:'4', name:'Opcion4', description:'', stock:'1'}
    ]
    useEffect( () => {
        getProducts()
        console.log('se ejecuto el evento');
        return () => {
            console.log('Limpieza al unmount');
        }
    }, [])

    const getProducts = () => {
        const getProductsPromise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products)
            }, 3000);
        })
        getProductsPromise.then( response => {
            console.log(response);
        })
    }
    const sumarHandler = () => {
        setContador(contador + 1)
    }
    const restarHandler = () => {
        setContador(contador - 1)
    }
    console.log('render de ComponenteEstado');

return (
    <>
        <div>ComponenteEstado</div>
        Total: {contador}
        <br></br>
        <button onClick={restarHandler}>-</button>
        <button onClick={sumarHandler}>+</button>

        {products.map(p => <li key={products.id}>{products.name}</li>)}
    </>
)
}

export default ComponenteEstado