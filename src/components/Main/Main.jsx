import React from 'react';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Main = ({product, handleReadTime, handleBookmarked}) => {
  
    return (
        <div className='main-container'>
            <div>
                <img src={product.img} alt="" />
                <div className='container'>
                    <div className='main-body'>
                        <img src={product.client} alt="" />
                        <div className='name'>
                        <h4>{product.name}</h4>
                        <h6>{product.published}</h6>
                        </div>
                    </div>
                    <div className='reading-contaier'>
                        <p className='reading'>{product.reading} min read</p>
                        <button onClick={() => handleBookmarked(product.description)} className='book-mark-btn'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                <div>
                   <h1 className='description'>{product.description}</h1>
                   <button onClick={() => handleReadTime(product.reading)}  className='read-btn'>Mark as Read</button>
                </div>
            </div>
           
        </div>
    );
};

export default Main;