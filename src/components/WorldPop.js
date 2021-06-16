import React from 'react' 

const WorldPop = ({countries}) => {

    let totalPop = 0

    for(let i=0; i < countries.length; i++){
        totalPop += countries[i].population

    }


    return (
        <h1>World population: {totalPop}</h1>
    )
}

export default WorldPop;