import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const ringContext=createContext()
 

const Grandpa = () => {
    const [ring, setRing]=useState(123456789)
    return (
        <ringContext.Provider value={[ring,setRing]}>
            <div>
            <h1>this is grandpa</h1>
            <Father></Father>
            <Uncle ring={ring}></Uncle>
            
        </div>
        </ringContext.Provider>
    );
};

export default Grandpa;