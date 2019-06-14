import React from 'react';

export default ({task, onDelete}) => 
    <div>
        <span>{task}</span>
        <button onClick={onDelete}>DEL</button>
    </div>;