import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import Aux from '../../hoc/aux';
const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
    .map(
        igKey =>{
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }    
    ).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(ingredients.length === 0){
        ingredients = <p>Please add some ingredients</p>
    }
    const style = {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'24px'
    }
    return (
        <Aux>
            <div className = "Burger">
                <BurgerIngredient type="bread-top" />
                {ingredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
            <p style={{textAlign:'center'}}>The price for the burger is <span style={style}>{props.price}</span></p>
        </Aux>
    )
}

export default burger;