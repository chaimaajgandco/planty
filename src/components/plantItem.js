import React from 'react';
import CareScale from './CareScale';
import '../styles/plantItem.css'

function handleClick(plantName) {
    alert(`Plante : ${plantName}, cela vous convient ?`);
}

function PlantItem ({name, cover, id, light, water}) {
    return (
        <div>
            <li key={id} className='plant_item' onClick={() => handleClick(name)}> 
                <img className='cover_plant' src={cover} alt={`${name} cover`} />
                {name}
            </li>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} /> 
            </div>
        </div>
    )
}


export default PlantItem;