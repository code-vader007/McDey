
//The whole burger stateless component.

import React from 'react';
import './Burger.css'

import Ingridients from './Ingridients/Ingridients'
const burger=(props)=>{
    
    let transformed=Object.keys(props.ingridients).map(ig=>{
        return [...Array(props.ingridients[ig])].map((_,i)=>{
            return <Ingridients key={ig+i} type={ig} />;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformed.length===0){
        transformed=<p>Welcome to McDey. Add your taste</p>
    }
    return(
            <div className={'Burger'}>
                <Ingridients type='bread-top'/>
                {transformed}
                <Ingridients type='bread-bottom'/>
            </div>
    
    );
};

export default burger;