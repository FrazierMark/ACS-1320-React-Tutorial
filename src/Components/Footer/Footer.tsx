import './Footer.css'
import { useState, useEffect } from 'react';

const Footer = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div className='footer'>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3>Mark Frazier copyright 2024</h3>
      <p>{currentDate.toString()}</p>
    </div>
  )

}

export default Footer