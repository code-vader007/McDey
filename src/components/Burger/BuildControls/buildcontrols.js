
//The whole menu card component which wraps each and every menu items
import React from 'react'

import './BuildControls.css'

import BuildControl from './BuildControl/buildcontrol'  //The menu items are imported
//The label object which identifies the label for each menu item
const labels=[
    { label:'Salad',type:'salad' },
    { label:'Bacon',type:'bacon'},
    { label:'Cheese',type:'cheese'},
    { label:'Meat',type:'meat'}
]

//The menucard component.
const buildControls=(props)=>(
    <div className={'BuildControls'}>
    <p>Payment:{props.price}</p>
        {labels.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=>props.ingridientadded(ctrl.type)}
            removed={()=>props.ingridientremoved(ctrl.type)}
            />
        
        ))};

    <button className='OrderButton' onClick={props.ordered}>CHECKOUT</button>
    </div>

);

export default buildControls;