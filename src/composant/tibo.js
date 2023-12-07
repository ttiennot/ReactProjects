import React, { useState } from 'react';

const Tibo = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <div>
            <div onMouseOver={changeColor} style={{ color }}>
                Je suis un composant
            </div>
            <div>
                <button onClick={changeColor}>Changer la couleur.</button>
            </div>
        </div>
    );
};

export default Tibo;