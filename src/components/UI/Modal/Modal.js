

//The modal component which shows the animation of the backdrop and the invoie popping down
import React from 'react'
import Auxi from '../../../hoc/Auxi'

import BackDrop from '../BackDrop/BackDrop'

import './Modal.css.css'
const modal =(props)=>(
    <Auxi>
    <BackDrop show={props.show} clicked={props.modalClosed}/>
    <div 
    className={'Modal'}
    style={{
        transform:props.show ? 'translateY(0)':'translateY(-100vh)',
        opacity:props.show ? '1':'0'
    }}
    >
        {props.children}
    </div>
    </Auxi>
)

export default modal;