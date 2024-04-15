import './Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		setCurrentDate(new Date());
	}, []);

	return (
		<h1 className='footer'>
			<br />
			<br />
			<br />
			<br />
			<h2>Mark Frazier copyright 2024</h2>
			<p>{currentDate.toString()}</p>
		</h1>
	);
};

export default Footer;
