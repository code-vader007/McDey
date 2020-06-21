
//A srateless component which contains the list of menu items.

import React, {Component} from 'react';
import './BurgerIngredient.css'
import PropTypes from 'prop-types';


//The ingridients component
class ingridients extends Component{
    
    render(){
        let ingri=null;
    
        switch(this.props.type){
            case('bread-bottom'):
            ingri=<div className={'BreadBottom'}></div>
            break;
            case('bread-top'):
            ingri=(<div className={'BreadTop'}>
                   <div className={'Seeds1'}></div>
                   <div className={'Seeds2'}></div>
                   </div>
                  );
            break;
            case('meat'):
            ingri=<div className={'Meat'}></div>
            break;
            case('cheese'):
            ingri=<div className={'Cheese'}></div>
            break;
            case('bacon'):
            ingri=<div className={'Bacon'}></div>
            break;
            case('salad'):
            ingri=<div className={'Salad'}></div>
            break;
            default:
            ingri=null;
        }
        return ingri;
    }
}
    
ingridients.propTypes={
    type:PropTypes.string.isRequired
}    


export default ingridients;