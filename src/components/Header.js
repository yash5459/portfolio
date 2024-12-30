"use client"

import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const Header = () => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const zone = moment.tz.guess();

    const updateTime = () => {
      const tzn = moment().tz(zone).format('HH:mm:ss a');
      setCurrentTime(tzn);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-10 mx-4 max-md:my-2 text-slate-300 font-extralight flex flex-row justify-between items-center'>
      <span className='text-3xl lg:text-2xl'>Portfolio</span>
      <span className='text-md lg:text-sm'>{currentTime}</span>
    </div>
  )
}

export default Header