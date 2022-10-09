import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [ring,setRing]=useContext(ringContext)

    return (
        <div>
            <h1>{ring}</h1>
            <button onClick={()=>setRing(ring+1)}>increase</button>
        </div>
    );
};

export default Uncle;