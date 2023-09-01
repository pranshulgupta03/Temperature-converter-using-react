import React, { useState } from 'react'

const Temperature = () => {
    
    const [Celcius, setCelcius] = useState('0');
    const [Farenheit, setFarenheit] = useState('32');
    
    const HandleCelcius = (e) => {
        const value = e.target.value;
        setCelcius(value)
        setFarenheit(ctof(value));
    };
    
    const HandleFarenheit = (e) => {
        const value = e.target.value;
        setFarenheit(value)
        setCelcius(ftoc(value));
    }

    const ftoc = (Farenheit) => {
        return (Farenheit - 32) * 5/9;
    }

    const ctof = (Celcius) => {
        return Celcius * 1.8 + 32;
    }

  return (
    <div>
      <div>Temperature Converter</div>
      <div>
        <label>Celcius : </label>
        <input type='text' value={Celcius} onChange={HandleCelcius} />
      </div>
      <div>
        <label>Farenheit : </label>
        <input type='text' value={Farenheit} onChange={HandleFarenheit} />
      </div>
    </div>
  )
}

export default Temperature
