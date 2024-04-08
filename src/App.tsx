import Title from './Components/Title/Title';
import POPOSList from './Components/POPOSList/POPOSList';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='app'>
			<div className='app-content'>
				<Title />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
