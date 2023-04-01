import React from 'react';
import './Bookmarked.css'
const Bookmarked = ({bookmarked}) => {
    return (
        <div className='card'>
            <h4>Bookmarked Blog:{bookmarked.length} </h4>
            <div>
                {
                    bookmarked.map((title,index) => <h2
                        key = {index}
                        className='title' >{title}</h2>)
                }
            </div>
        </div>
    );
};

export default Bookmarked;
