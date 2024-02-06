import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About.tsx';
import POPOSList from './Components/POPOSList/POPOSList.tsx';
import POPOSDetails from './Components/POPOSDetails/POPOSDetail.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/' element={<POPOSList />} />
					<Route path='about' element={<About />} />
					<Route path="/details/:id" element={<POPOSDetails />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
