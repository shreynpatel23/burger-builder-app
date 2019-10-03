import React from 'react';
import './BuildControl.css';


const buildControl = (props) => (
    <div className="BuildControl">
        <p className="Label">{props.ingredientName}</p>
        <button className="Less" onClick={props.remove}>Remove</button>
        <button className="More" onClick={props.add}>Add</button>
    </div>
)

export default buildControl;