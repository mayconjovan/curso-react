import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') :
        setParOuImpar('impar')
    })

return (
    <div>
        <h1>{contador}</h1>
        <h3>{parOuImpar}</h3>
        <button onClick={() => setContador(contador + 1)}>inc</button>
    </div>
)
}