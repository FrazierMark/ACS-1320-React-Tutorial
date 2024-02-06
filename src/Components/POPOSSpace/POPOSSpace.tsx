import logo from '/vite.svg';

interface SpaceProps {
	name: string;
	image: string;
	address: string
}

function POPOSSpace({name, image, address}: SpaceProps) {
	return (
		<div>
			<img src={`/images/${image}`}     
        width="300"
        height="300"
        alt="50 Califonia St."
      />
			<h1>{name}</h1>
			<div>{address}</div>
		</div>
	);
}

export default POPOSSpace;
