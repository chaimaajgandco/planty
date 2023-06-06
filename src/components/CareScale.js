import React from 'react';
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

const quantite = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale ({ scaleValue, careType }) {
    // const scaleValue = props.scaleValue;
    // const {scaleValue, careType} = props;
    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? <img src={sun}/> : <img src={water}/>;

    return (
        <div onClick={() => alert(`Cette plante requiert ${quantite[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>
			{range.map((rangeElem) => scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null )}
		</div>
    )
}

export default CareScale;