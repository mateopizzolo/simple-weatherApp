import React from 'react';
import './city.css';

const City = (props) => {
        return (     
            <div>
                <h2 className='place' >{props.localPlace}</h2>          
                <h2 className='descr' >{props.description}</h2>    
                <div className='displayImage'>
                    <img rel="icon" type="image/png" src={props.icon} sizes="32x32" className="imagen"/>  
                </div>
            
                <div className="weatherInfo">
                    <h2 className='time' >Time: {props.time}</h2>
                    <h2 className='degr' >Degrees: {props.degrees}</h2>
                    { console.log(props) }
                </div>
            </div>
            
        )
    }


export default City;