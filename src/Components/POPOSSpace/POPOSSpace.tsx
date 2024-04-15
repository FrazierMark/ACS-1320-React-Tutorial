import './POPOSSpace.css';
import { Link } from 'react-router-dom';

interface SpaceProps {
	id: number;
	name: string;
	image: string;
	address: string;
	hours: string;
}

function POPOSSpace({ id, name, image, address, hours }: SpaceProps) {
	return (
		<div className='POPOSSpace'>
			<Link to={`/details/${id}`}>
				<h1 className='POPOSSpace-title'>{name}</h1>
				<img
					src={`images/${image}`}
					width='300'
					height='300'
					alt={`A beautiful space at ${address}`}
				/>
			</Link>

			<div className='POPOSSpace-info'>
				<div>{address}</div>
				<div style={{ fontStyle: 'italic', color: 'green' }}>{hours}</div>
			</div>
		</div>
	);
}

export default POPOSSpace;
