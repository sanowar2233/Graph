import React from 'react';

const Tshirts = ({tshirt}) => {
    const {price}=tshirt
    return (
        <div>
            <h1>{price}</h1>
        </div>
    );
};

export default Tshirts;