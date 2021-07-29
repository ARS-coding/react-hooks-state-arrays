import React from 'react'

function Food({ foodObj, handleRemove, handleIncreaseHeat }) {
    return (
        <li key={foodObj.id}>
            Name: {foodObj.name} | Cuisine: {foodObj.cuisine} | Heat Level: {foodObj.heatLevel}
            <button id={foodObj.id} onClick={handleRemove}>X</button>
            <button id={foodObj.id} onClick={handleIncreaseHeat}>Increase Heat</button>
        </li>
    )
}

export default Food
