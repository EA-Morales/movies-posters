import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './lib/context/UserProvider';

import App from './App';
import Login from './pages/Login';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='Login' element={<Login />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
