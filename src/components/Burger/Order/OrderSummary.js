
//The summary of the order component(stateless) which contains the summary of the order.


import React from 'react'
import Auxi from '../../../hoc/Auxi'

import Button from '../../UI/Button/Button'

const order=(props)=>{
    
    
    const summary=Object.keys(props.ingridients).map(key=>{
        
        return(<li key={key}><span>{key}</span>:{props.ingridients[key]}</li>);
    });
    
    return(
        <Auxi>
            <h3>Your happy meal</h3>
            <p>Enjoy your meal</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Auxi>
    
    )
}

export default order;