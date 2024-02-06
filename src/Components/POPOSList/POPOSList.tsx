import POPOSSpace from '../POPOSSpace/POPOSSpace';

const POPOSList = () => {
	return (
		<div>
			<h1>Keep your eye on this space for future content...</h1>
			<POPOSSpace
				name='50 California Street'
				address='50 California St.'
				image='50-california-st.jpg'
			/>
			<POPOSSpace
				name='525 Market Street Plaza'
				address='525 Market St.'
				image='525-market-street-plaza.jpg'
			/>
			<POPOSSpace
				name='555 California Street'
				address='555 California St.'
				image='555-california.jpg'
			/>
			<POPOSSpace
				name='101 California Street'
				address='101 California St.'
				image='101-california.jpg'
			/>
		</div>
	);
};

export default POPOSList;
