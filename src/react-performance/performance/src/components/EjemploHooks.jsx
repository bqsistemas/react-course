import React, { useMemo, useCallback } from 'react'

// const resultado = useMemo(() => componentOrValue(a, b), [])

const MiComponente = ({name}) => {

    useCallback(
      () => {
        // todo: hacer algo
      },
      [name],
    )
    

    return (
        <h1>
            Mi Componente
        </h1>
    )
}

// const memoization = useMemo(() => MiComponente, [a, b])