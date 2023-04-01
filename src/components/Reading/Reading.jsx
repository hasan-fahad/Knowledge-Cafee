import React from 'react';
import './Reading.css'
const Reading = ({reading}) => {
    return (
        <div>
            <h3>Spent Time on Read : {reading} min</h3>
        </div>
    );
};

export default Reading;