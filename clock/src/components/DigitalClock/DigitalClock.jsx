import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {

    const [ clockState, setClockState ] = useState();

    useEffect( () => {

        setInterval( () => {
            const date = new Date();
            setClockState( date.toLocaleTimeString() );
        }, 1000)

    }, []);

  return (
    <div className='digital-clock'>
        <h2 className='clock'> { clockState } </h2>
    </div>
  )
}

export default DigitalClock