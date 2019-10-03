import React , { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../compnents/Burger/Burger'
import BuildControls from '../../compnents/Burger/BuildControls/BuildControls';

const PRICE_OF_EACH_INGREDIENT = {
    salad:30,
    cheese:50,
    meat:100,
    bacon: 200
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice : 150
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log("Old Count",oldCount);
        const updatedCount = oldCount + 1;
        console.log("Updated Count",updatedCount);
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        console.log("Updated Ingredients",updatedIngredient);
        const calculatedPrice = PRICE_OF_EACH_INGREDIENT[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + calculatedPrice;
        this.setState({totalPrice:newPrice , ingredients:updatedIngredient})

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount);
        const updatedCouunt = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCouunt;
        console.log(updatedIngredient);
        const calculatedPrice = PRICE_OF_EACH_INGREDIENT[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - calculatedPrice;
        this.setState({totalPrice:newPrice , ingredients:updatedIngredient})
    }

    render() {
        return (
            <Aux>
                <Burger 
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}/>
                <BuildControls  
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;