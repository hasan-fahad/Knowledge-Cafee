import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Bookmarked from '../Bookmarked/Bookmarked';

const Home = ({handleReadTime ,handleBookmarked}) => {
    const [products, setProducts] = useState ([])
    useEffect( () => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='card home-container'>
            <div>
                {
                    products.map(product => <Main
                        key = {product.id} 
                        product={product}
                        handleReadTime={handleReadTime}
                        handleBookmarked ={handleBookmarked} 
                        ></Main>)
                }
                
            </div>
        </div>
    );
};

export default Home;