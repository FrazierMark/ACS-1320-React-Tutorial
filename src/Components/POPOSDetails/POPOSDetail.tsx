import { useParams } from 'react-router-dom';
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList';
import './POPOSDetails.css';
import data from '../../sfpopos-data.json';
import.meta.env.PUBLIC_URL;

interface POPOSDetail {
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

const POPOSDetail = (props) => {
	const params = useParams();
	const id = parseInt(params.id! || '');

	// Check if data[id] exists and is not undefined
	const poposData = data[id];
	if (!poposData) {
		return <div>No data found for this POPOS ID.</div>;
	}

	const { images, title, desc, hours, features, geo } = poposData;

	return (
		<div className='POPOSDetails'>
			<div className='POPOSDetails-image'>
				<img src={`/images/${images[0]}`} alt={title} />
			</div>

			<div className='POPOSDetails-info'>
				<h1 className='POPOSDetails-title'>{title}</h1>
				<p className='POPOSDetails-desc'>{desc}</p>
				<p className='POPOSDetails-hours'>{hours}</p>
				<POPOSFeatureList features={features} />
				<p className='POPOSDetails-geo'>
					{geo.lat} {geo.lon}
				</p>
			</div>
		</div>
	);
};

export default POPOSDetail;
