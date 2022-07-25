import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Account from './pages/Account';
import Login from './pages/Login';
import Protected from './pages/Protected';

import './styles/App.css';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/Login' element={<Login />} />
				<Route
					path='/account'
					element={
						<Protected>
							<Account />
						</Protected>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
