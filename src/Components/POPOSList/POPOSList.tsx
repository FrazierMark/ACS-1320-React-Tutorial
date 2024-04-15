import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json';
import { useState } from 'react';

interface JsonResponse {
	title: string;
	desc: string;
	address: string;
	hours: string;
	geo: {
		lat: number;
		lon: number;
	};
	images: string[];
	features: string[];
}

const POPOSList = () => {
	const [query, setQuery] = useState('');
	const spaces = data.filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
	.map(({ title, address, images, hours }: JsonResponse, id: number) => {
			return (
				<POPOSSpace
					id={id}
					key={`${title}-${id}`}
					name={title}
					address={address}
					image={images[0]}
					hours={hours}
				/>
			);
		}
	);

	return (
		<div className='POPOSList'>
			<form className="search-bar">
				<label htmlFor="search-input">Search for Public Space</label>
				<div className="bar-container">
				<input
					id="search-input"
					value={query}
					placeholder='search'
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type='submit'>Submit</button>
				</div>
			</form>
			{spaces}
		</div>
	);
};

export default POPOSList;
