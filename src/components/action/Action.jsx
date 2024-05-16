import React from 'react';
import './action.css'

const Action = ({text}) => {
    return (
        <button className='action'>
            {text}
        </button>
    );
};

export default Action;