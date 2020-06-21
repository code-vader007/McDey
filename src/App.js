import React, { Component } from 'react';

//The main react app execution file which runs when the development server is run from the react app

import Layout from './components/Layout/Layout'; //The main component for the app is the layout component which covers the whole pan of the app.
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';//The burgerbuilder component which is the main UI of the app and is enclosedby layout.
class App extends Component {
  render() {
    return (
      <div>
        <Layout>                    
            <BurgerBuilder/>        
        </Layout>
      </div>
    );
  }
}

export default App;
