import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json';

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
	const spaces = data.map(({title, address, images, hours}: JsonResponse, index: number) => {
		return (
			<POPOSSpace
				id={index}
				key={index}
				name={title}
				address={address}
				image={images[0]}
				hours={hours}
			/>
		);
	});

	return <div className='POPOSList'>{spaces}</div>;
};

export default POPOSList;
