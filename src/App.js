import React from 'react';
import Form from './Components/Form/Form';

import bckImage from './assets/pexels.jpg'

const App = () => {
    return(
    <React.Fragment>
      <div style={styles.imagen}>
            <h1 style={styles.text}>Weather app</h1>
            <Form /> 
      </div>
    </React.Fragment>    
    )
}

const styles = {
    text: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '57px',
    fontFamily: 'Montserrat, sans-serif',
    fontFamily: 'Open Sans, sans-serif'   
  },
  imagen: {
    backgroundImage: `url(${bckImage})`,
    backgroundRepeat: 'no-repeat',
    height: '100%'

  }}

export default App;