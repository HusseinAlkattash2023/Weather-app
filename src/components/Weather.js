import React from 'react'
import '../App.css'
function Weather({city  , celsius ,temp_max , temp_min , descriptoin , weatherIcon}) {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }
    return (
        <div className='container'>
            <div className='card_ p-3'>
                <h1 className='city'>{city}</h1>
                <div className="date">{dateBuilder(new Date())}</div>
                <div className='weather-1'>
                    {celsius ? <h1 className='py-2'>{celsius}&deg;C</h1> :null}
                    <h5 className='py-4'>
                    <i className={`wi ${weatherIcon} display-1`} />
                    </h5>
                </div>
                {minmaxTemp(temp_max , temp_min)}

                <h4 className='px-4 description'>{descriptoin.charAt(0).toUpperCase()+ descriptoin.slice(1)}</h4>
            </div>
        </div>
        );
};

function minmaxTemp(min , max){
    if(min && max){
        return(
            <h3 className='minmaxTemp'>
                <span className='px-3'>Min: {min}&deg;</span>
                <span className='px-3'>Max: {max}&deg;</span>
            </h3>
        )
    }
}

export default Weather
