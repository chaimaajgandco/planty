import React from 'react'; 
import CareScale from './CareScale'
import { plantList } from '../datas/plantList';
import PlantItem from './plantItem'
import '../styles/shoppingList.css'

function ShoppingList () {
    const categories = plantList.reduce (
        (acc, plant) => 
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )

    return (
        <div>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {categories.map((cat) => (
                    <li key={cat}>Type de plante : {cat}</li>
                ))}
            </ul>
            <ul className='plant_list'>
                {plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem id={id} cover={cover} name={name} water={water} light={light} />
				))}
            </ul>
        </div>
    )
}

export default ShoppingList;