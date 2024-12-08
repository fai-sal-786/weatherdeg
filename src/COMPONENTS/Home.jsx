import React from 'react'
import   { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=7522f4fb94f9feac1269b3d83731009b&unit=metric
function Home() {
     const [data, setData] = useState({
        celcius: 10,
        name: 'london',
        humidity: 10,
        speed: 2
     })
    const [name, setName] = useState('');
     useEffect(() => {
        
     }, [])
    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&lahore&imperial&appid=7522f4fb94f9feac1269b3d83731009b&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    console.log(res.data);
                   setData({...data, celcius: res.data.main.temp, name:res.data.name, humidity: 
                    res.data.main.humidity, speed: res.data.wind.speed})
            })
            .catch(err => console.log(err)); 
        }
    }
  return (
    <div className='container'>
          <div className="weather">
              <div className="search">
                  <input type='text' placeholder='Enter City Name' onChange={e =>setName(e.target.value)} />
                  <button><img src="./images/download.png" onClick={handleClick} alt=""/></button>
              </div>
              <div className="winfo">
                  <img src='./images/download1.png' alt="" />
                  <h1>{Math.round(data.celcius)}°c</h1>
                  <h2>{data.name}</h2>
                  <div className="details">
                      <div className="col">
                          <img src="./images/humudity.png" alt="" />
                          <p>{Math.round(data.humidity)}%</p>
                          <p>Humidity</p>
                      </div>                      
                      <div className="col">
                          <img src="./images/wind1.png" alt="" />
                          <p>{Math.round(data.speed)}km/h</p>
                          <p>wind</p>
                      </div>
                      
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Home;
