import Title from './Components/Title/Title';
import POPOSList from './Components/POPOSList/POPOSList';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Title />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
