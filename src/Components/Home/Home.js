import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';

const Home = () => {
    const  tshirts=useLoaderData()
    return (
        <div>
            {
                tshirts.map(tshirt=><Tshirts tshirt={tshirt}></Tshirts>)
            }
        </div>
    );
};

export default Home;