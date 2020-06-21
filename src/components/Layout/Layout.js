
//The layout component which covers the whole layout of the page
import React from 'react';

import Auxi from '../../hoc/Auxi';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar'
const layout=(props)=>(
    <Auxi>
    <Toolbar/>
    <main className={'Content'}>
        {props.children}
    </main>
    </Auxi>
);

export default layout;