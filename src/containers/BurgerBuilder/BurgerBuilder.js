
//This is the main JS file for the app and the only component in the app which is stateful 

import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';  //The higher order component used as a wrap up for layout
import Burger from '../../components/Burger/Burger' //The burger component which displays the dynamic preview of the burger
import BuildControls from '../../components/Burger/BuildControls/buildcontrols' // The build controllers used to add the ingridients
import Modal from '../../components/UI/Modal/Modal' //The invoice for the order
import Summary from '../../components/Burger/Order/OrderSummary'    //The summary of the order
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'
//The prices object which contains the prices of each of the ingredients.
const PRICES = {
        meat:4.0,
        cheese:2.0,
        salad:1,
        bacon:3
    
    };

//The burger builder stateful component.
class BurgerBuilder extends Component{
    //constructor(props){
      //  super(props);
        //this.state
    //}
    
    //The initial state of the Component.
    state={
        ingridients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        price:4.0,
        purchasing:false,
        loading:false
    };


    //The event handler which handles the state of the Component and changes state accordingly to the addition of ingridients
    addIngredientHandler=(type)=>{
        const updatedcount=this.state.ingridients[type]+1;
        const updatedingridients={
            ...this.state.ingridients
        };
        updatedingridients[type]=updatedcount
        const newprice=this.state.price+PRICES[type]
        this.setState({ingridients:updatedingridients,price:newprice})
    
    }
    //The event handler which handles the state of the Component and changes state accordingly to the deduction of ingridients
    removeIngredientHandler=(type)=>{
        if(this.state.ingridients[type]===0){
            return;
        }
        const updatedcount=this.state.ingridients[type]-1;
        const updatedingridients={
            ...this.state.ingridients
        };
        updatedingridients[type]=updatedcount
        const newprice=this.state.price-PRICES[type]
        this.setState({ingridients:updatedingridients,price:newprice})
    
    }
    //The event handler which handles the order button and puchase event
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    
    }
    //The event handler which cancels a purchase
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    //The event handler which continues a purchase to completion
    purchaseContinueHandler=()=>{
        this.setState({loading:true})
        const order={
            ingedients:this.state.ingridients,
            price:this.state.price
        }
        axios.post('/burgers.json',order)
            .then(response=>this.setState({loading:true,purchasing:false}))
            .catch(error=>this.setState({loading:true,purchasing:false}))
    }
                
    render(){
        
        let modal = <Summary ingridients={this.state.ingridients} purchaseCancel={this.purchaseCancelHandler}   
                purchaseContinue={this.purchaseContinueHandler} price={this.state.price}/>;
        if(this.state.loading){
        modal=<Spinner/>
    }
        
        return(
            <Auxi> 
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>              
                    {modal}
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls ingridientadded={this.addIngredientHandler} ingridientremoved={this.removeIngredientHandler} price={this.state.price} ordered={this.purchaseHandler}/>
            </Auxi>
            
        )
    }
}

export default BurgerBuilder;