import React from 'react';
import './form.css'

import City from '../City/City';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            api: 'http://api.weatherapi.com/v1/current.json?key=dde478f910e340a2beb161517212110&q=',
            apiIcon: 'http://api.openweathermap.org/data/2.5/weather?q=',
            apiIconKey: 'd83ac469cf94d1727fa5896a24264a97',
            localTime: '',
            localDegrees: '',
            localPrecipitation: '',
            localDescription: '',
            localIcon: '',
            localMain: '',
            localPlace: ''
        }
    }

    cityInput(text) {
        this.setState(
            { city: text.target.value}, 
            () => this.gettingAPI(), console.log(this.state.city), console.log(this.state.localTime)        
        )
        
    }

    gettingAPI(){
        fetch(this.state.api+this.state.city+'&aqi=no')
            .then( response => response.json(undefined))
            .then( data => {
                console.log(data)
                this.setState({
                    localTime: data.location.localtime,
                    localDegrees: data.current.temp_c,
                    localPrecipitation: data.current.precip_in,
                    localPlace: data.location.name
                })   
            })
            .catch (err => console.log(err))
        
            

        fetch(this.state.apiIcon+this.state.localPlace+'&appid='+this.state.apiIconKey)
            .then( response => response.json())
            .then( data => {
                console.log(data)
                this.setState({
                    localDescription: data.weather[0].description,
                    localIcon: data.weather[0].icon,
                    localMain: data.weather[0].main,
                    
                })   
            })
            .catch (err => console.log(err)) 
    }

    evitarSubmit(event) {
        event.preventDefault()
    }

    weatherIcon(){
        (this.state.precipitation > 0) ? console.log('hay lluvia') : console.log('no hay lluvia');
    }


    render() {
    return(
        <React.Fragment>
        <div className="form">
            <input className="formField" onChange={ (text) => this.cityInput(text) } value={this.state.city} placeholder='City...'/>
        </div>      

        {// ICON 
        }

        <City time={this.state.localTime} degrees={this.state.localDegrees} precipitation={this.state.localPrecipitation} main={this.state.localMain} icon={'https://openweathermap.org/img/w/'+this.state.localIcon+'.png'} description={this.state.localDescription} localPlace={this.state.localPlace}/>
            
        </React.Fragment>
        
    )}
}

export default Form;