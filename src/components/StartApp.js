import React from 'react';
import '../App.css'
function StartApp({loadweather ,error}) {
    return (
        <div className="container">
            <form onSubmit={loadweather} className="p-2 m-5">
                <div>{error ? error_():""}</div>
                    <div className='d-flex flex-column align-center justify-content-center'>
                        <div className="md-3 m-3">
                            <input type="text" className="form-control" name="city" autoComplete='off' placeholder='Enter a City'/>
                        </div>
                        <div className='md-3 m-3'> 
            <input type="text" className="form-control" name="country" autoComplete='off' placeholder='Enter a Country'/>
            </div>
            <div className='md-3'>
                <button className='btn btn-warning mb-3'>Get Weather</button>
            </div>
        </div>
            </form>
        </div>
        );
};

function error_() {
    return(
        <div className='alert alert-danger mx-5' role="alert">
            Please Enter City and Country
        </div>
    )
}

export default StartApp
