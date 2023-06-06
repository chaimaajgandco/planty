import React from 'react'; 

function Recommandation () {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (!isSpring) {
        return (
            <div>
                <p>Ce n'est pas le moment de rempoter !</p>
            </div>
        )
    }

    return (
        <div>
            <p>C'est le moment de rempoter !</p>
        </div>
    )
}

export default Recommandation;