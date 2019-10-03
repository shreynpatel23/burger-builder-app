import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {key:"Salad", label:"salad"},
    {key:"Cheese", label:"cheese"},
    {key:"Meat", label:"meat"},
    {key:"Bacon", label:"bacon"},
]

const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(
            control => (
                <BuildControl 
                key={control.label} 
                ingredientName={control.label} 
                add={() => props.addIngredient(control.label)}
                remove={() => props.removeIngredient(control.label)} />
            )
        )}
    </div>
)

export default buildControls;