import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';

const POPOSList = () => {
	return (
		<div className='POPOSList'>
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
			<POPOSSpace
				name='343 Sansome Roof Garden'
				address='343 Sansome St.'
				image='343-sansome-roof-garden.jpg'
			/>
			<POPOSSpace
				name='525 Market Street Plaza'
				address='525 Market St.'
				image='525-market-street-plaza.jpg'
			/>
		</div>
	);
};

export default POPOSList;
