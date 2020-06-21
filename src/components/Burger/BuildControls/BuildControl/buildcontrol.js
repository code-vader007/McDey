
//Each of the menu item is componentenonized  here so that it can be presented in the form of a list
import React from 'react';
import './BuildControl.css'

const buildcontrol=(props)=>(
    //The menu item component
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='More' onClick={props.added}>Add</button>
        <button className='Less' onClick={props.removed}>Remove</button>
        </div>
);

export default buildcontrol;